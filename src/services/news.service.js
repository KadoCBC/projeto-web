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