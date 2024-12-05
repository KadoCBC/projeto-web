import { createService, findAllService } from "../services/news.service.js";
import {ObjectId} from "mongoose";

const create = async (req, res) => {
    try{
        const {title, text, banner} = req.body;

        if(!title || !text || !banner){
            res.status(400).send({
                message: "Preencha todos os campos"
            })
        };

        await createService({
            title,
            text,
            banner,
            user: ObjectId("ObjectIdFake1"),
        });

        res.send(201)
    } catch (err){
        res.status(500).send({ message: err.message });
    }
    
};

const findAll = async (req, res) => {
    const news = await findAllService();
    if (news.length === 0) {
        return res.status(400).send({ 
            message: "Não há notícias registradas" 
        });
    }
    res.send(news);
};

export { create, findAll};