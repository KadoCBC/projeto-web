import userService from '../services/user.service.js';
import mongoose from "mongoose";

//Recebe um Id e valida ele
export const validId = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "ID inválido" })
    }

    next();
};

//Valida o usuário pelo Id
export const validUser = async (req, res, next) => {
    try{
        const id = req.params.id;

        const user = await userService.findByIdService(id);

        if (!user) {
            return res.status(400).send({ message: "Id de usuario não encontrado" });
        }

        //A requisição que vai ser enviada para a próxima função vai ter id e user
        req.id = id;
        req.user = user;

        //Vai para a proxima função da chamada em user.route
        next();
    } catch (err) {
        res.status(500).send({ message: 'Falha ao conectar ao banco de dados' });
    }
};

