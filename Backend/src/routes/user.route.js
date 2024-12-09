import express from "express";
import userController from "../controllers/user.controller.js";
import {validId, validUser} from "../middlewares/global.middlewares.js";

const route = express.Router();

route.post("/", userController.create);
route.get("/", userController.findAll);

route.use(validId);
route.get("/findById/:id?", validId, userController.findById)  //validId e validUser ocorrem antes da função userController.findById
route.patch("/:id", userController.update)  

export default route;
