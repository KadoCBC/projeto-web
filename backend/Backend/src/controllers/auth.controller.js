import bcrypt from 'bcrypt';
import { loginService, generateToken } from '../services/auth.service.js';


//Verifica se o email e senha estão no banco de dados para login
const login = async (req, res) => {
    const {email, password} = req.body;

    try{
        //Retorna usuário buscado pelo email. Função usada em auth.service
        const user = await loginService(email);

        if(!user){
            return res.status(404).send({message: "Usuário ou senha invalidos"})
        }


        const passwordIsValid = await bcrypt.compare(password, user.password);

        if(!passwordIsValid || !user){
            return res.status(404).send({message: "Usuário ou senha invalidos"})
        }

        const token = generateToken(user.id)

        res.send(token);
    } catch (err){
        res.status(500).send(err.message);
    }
    
};

export {login};
