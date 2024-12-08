//Faz a comunicação com o banco de dados

import User from '../models/User.js';
import jwt from 'jsonwebtoken';

//Busca usuário pelo email. Retorna o usuário e a senha
const loginService = (email) => User.findOne({email: email}).select("+password");

//Guarda a sessão do usuário sem expor os dados. 
//O ID do usuário é armazenado. A chave secreta é gerada. A sessão expira com 1 hora.
const generateToken = (id) => jwt.sign({id: id}, process.env.SECRET_JWT, {expiresIn: 86400});

export {loginService, generateToken}