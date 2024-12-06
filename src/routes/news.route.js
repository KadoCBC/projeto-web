//Rotas de notícias

import { Router } from "express";
const router = Router();

import {
    create,
    findAll,
    topNews,
    findById,
    searchByTitle
} from "../controllers/news.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

router.post('/', authMiddleware, create)
router.get('/', findAll)
router.get('/top', topNews)
router.get('/search', searchByTitle) //Busca a notícia pelo título

router.get('/:id', authMiddleware, findById)

export default router;