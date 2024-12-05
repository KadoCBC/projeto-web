//Rotas de notícias

import { Router } from "express";
const router = Router();

import {create, findAll} from "../controllers/news.controllers.js";

router.post('/', create)
router.get('/', getAll)


export default router;