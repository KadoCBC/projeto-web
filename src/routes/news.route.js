//Rotas de notícias

import { Router } from "express";
const router = Router();

import {
    create,
    findAll,
    topNews,
    findById,
    searchByTitle,
    byUser,
    update
} from "../controllers/news.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { validNews } from "../middlewares/global.middlewares.js";


router.post('/', authMiddleware, create)
router.get('/', findAll)
router.get('/top', topNews)
router.get('/search', searchByTitle) //Busca a notícia pelo título
router.get("/byUser", authMiddleware, byUser)
router.patch("/:id", authMiddleware, validNews, update)

router.get('/:id', authMiddleware, findById)

export default router;