import News from "../models/News.js";

const createService = (body) => News.create(body);

//sort com id -1 para pegar as ultimas noticias postadas
const findAllService = (offset, limit) => News.find().sort({_id: -1}).skip(offset).limit(limit).populate("user");

const countNews = () => News.countDocuments();

const topNewsService = () => News.findOne().sort({_id: -1}).populate("user");

const findByIdService = (id) => News.findById(id).populate("user");

export {
    createService,
    findAllService,
    countNews,
    topNewsService,
    findByIdService
};