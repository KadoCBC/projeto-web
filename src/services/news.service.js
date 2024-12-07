import News from "../models/News.js";

const createService = (body) => News.create(body);

//sort com id -1 para pegar as ultimas noticias postadas
const findAllService = (offset, limit) => News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countNews = () => News.countDocuments();

const topNewsService = () => News.findOne().sort({ _id: -1 }).populate("user");

const findByIdService = (id) => News.findById(id).populate("user");

export {
    createService,
    findAllService,
    countNews,
    topNewsService,
    findByIdService
};

//Função que busca pelo título ou parte dele. Não é case sensitive
export const searchByTitleService = (title) => News.find({ 
    title: { $regex: `${title || ""}`, $options: "i" }
}).sort({ _id: -1 }).populate("user");

export const byUserService = (id) => 
    News.find({user: id}).sort({ _id: -1 }).populate("user");

export const updateService = (id, title, text, banner) => 
    News.findOneAndUpdate({_id: id}, {title, text, banner}, {rawResult: true});

export const deleteNewsService = (id) =>
    News.findByIdAndDelete({ _id: id });

export const likeNewsService = (idNews, userId) =>
    News.findOneAndUpdate(
        { _id: idNews, "like.userId": { $nin: [userId] } }, // $nin verifica se a noticia ja tem like do usuario
        {$push: {like: {userId, created: new Date()}} }
    );

export const deleteLikeNewsService = (idNews, userId) =>
    News.findOneAndUpdate(
        { _id: idNews }, // $nin verifica se a noticia ja tem like do usuario
        {$pull: {like: {userId} } }
    );

export const addCommentService = (idNews, comment, userId) => {
    let idComment = Math.floor(Date.now() * Math.random()).toString(36);

    return News.findOneAndUpdate({id: idNews},
        {$push: 
            {comments: {idComment, userId, comment,
                createdAt: new Date()},
            }       
        }
    );
}

export const deleteCommentService = (idNews, idComment, userId) => News.findOneAndUpdate(
    {_id: idNews},
    {$pull: {comments: {idComment, userId}}}
);