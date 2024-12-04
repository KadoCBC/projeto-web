//Verifica se o email e senha estão no banco de dados para login

import bcrypt from 'bcrypt';
import { loginService } from '../services/auth.service.js';

const login = async (req, res) => {
    const {email, password} = req.body;

    try{
        //Retorna usuário buscado pelo email. Função usada em auth.service
        const user = await loginService(email);

        const passwordIsValid = await bcrypt.compare(password, user.password);

        if(!passwordIsValid || !user){
            return res.status(404).send({message: "Usuário ou senha invalidos"})
        }

        res.send("Login ok");
    } catch (err){
        res.status(500).send(err.message);
    }
    
};

export {login};