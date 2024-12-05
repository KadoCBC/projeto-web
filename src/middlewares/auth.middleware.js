import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import userService from '../services/user.service.js'

dotenv.config();

//Criando autorização do Token de login
export const authMiddleware = (req, res, next) => {
    try {
        const {authorization} = req.headers;

        if(!authorization){
            return res.sendStatus(401)
        }
        //separando a string do Token
        const parts = authorization.split(" ");
    
        if (parts.length !== 2){
            return res.sendStatus(401);
        }

        const [schema, token] = parts;
    
        //Comparando a palavra padrão
        if (schema !== "Bearer") {
            return res.sendStatus(401);
        }
        
        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if (error) {
                return res.status(401).send({message: "Token invalido"});
            }
            
            const user = await userService.findByIdService(decoded.id);

            if (!user || !user.id) {
                return res.status(401).send({ message: "invalid token!" });
            }
    
            req.userId = user.id;
            
            return next();
        });
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};