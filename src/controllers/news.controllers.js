import {
    createService,
    findAllService,
    countNews,
    topNewsService,
    findByIdService,
    searchByTitleService,
    byUserService
} from "../services/news.service.js";


const create = async (req, res) => {
    try{
        const {title, text, banner} = req.body;

        if(!title || !text || !banner){
            res.status(400).send({
                message: "Preencha todos os campos"
            });
        };

        await createService({
            title,
            text,
            banner,
            user: req.userId,
        });

        res.sendStatus(201)
    } catch (err){
        res.status(500).send({ message: err.message });
    }
    
};

const findAll = async (req, res) => {
    try{
            //Querys para paginação
    let {limit, offset} = req.query;
    
    limit = Number(limit);
    offset = Number(offset);

    if(!limit){
        limit = 5;
    }

    if(!offset){
        offset = 0;
    }

    const news = await findAllService(offset, limit);
    const total = await countNews();
    const currentUrl =  req.baseUrl;

    const next = offset + limit;
    const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;
    
    const previous = offset - limit < 0 ? null : offset - limit;
    const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;
    
    if (news.length === 0) {
        return res.status(400).send({ 
            message: "Não há notícias registradas" 
        });
    }
    res.send({
        nextUrl,
        previousUrl,
        limit,
        offset,
        total,

        results: news.map((item) => ({
            id: item._id,
            title: item.title,
            text: item.text,
            banner: item.banner,
            likes: item.likes,
            comments: item.comments,
            name: item.user.name,
            username: item.user.username,
            userAvatar: item.user.avatar,
        })),
    });
    }
    catch (err){
        res.status(500).send({ message: err.message });
        }
    };

const topNews = async (req, res) => {
    try{
        const news = await  topNewsService();
    
        if(!news) {
            return res.status(400).send({message: "Não tem noticia registrada"})
        }
    
        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                name: news.user.name,
                username: news.user.username,
                userAvatar: news.user.avatar,
            }
        });
    }
    catch (err){
        res.status(500).send({ message: err.message });
        }
    };

const findById = async (req, res) => {
    try{
        const { id } = req.params;

        const news = await findByIdService(id)

        return res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                name: news.user.name,
                username: news.user.username,
                userAvatar: news.user.avatar,
            }
        });
    }
    catch(err){
        res.status(500).send({ message: err.message});
    }
};

export { create, findAll, topNews, findById};

export const searchByTitle = async(req, res) => {
    try{
        const {title} = req.query;

        const news = await searchByTitleService(title);

        if(news.length === 0){
            return res.status(400).send({message: "Não foi encontrado nenhuma notícia"})
        }

        return res.send({
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                username: item.user.username,
                userAvatar: item.user.avatar,
            })),
        });

    }catch(err){
        res.status(500).send({ message: err.message});
    }
};

export const byUser = async (req, res) => {
    try{
        const id = req.userId;
        const news = await byUserService(id);

        return res.send({
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                username: item.user.username,
                userAvatar: item.user.avatar,
            })),
        });

    } catch(err){
        res.status(500).send({ message: err.message});
    }
};
