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
    update,
    deleteNews,
    likeNews,
    addComment,
    deleteComment
} from "../controllers/news.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { validNews } from "../middlewares/global.middlewares.js";


router.post('/', authMiddleware, create);
router.get('/', findAll);
router.get('/top', topNews);
router.get('/search', searchByTitle); //Busca a notícia pelo título
router.get("/byUser", authMiddleware, byUser);
router.get('/:id', authMiddleware, findById);
router.patch("/:id", authMiddleware, validNews, update);
router.patch("/like/:id", authMiddleware, likeNews);
router.delete("/:id", authMiddleware, deleteNews);
router.patch("/comment/:id", authMiddleware, addComment);
router.patch("/comment/:idNews/:idComment", authMiddleware, deleteComment);


export default router;