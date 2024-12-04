//Faz a comunicação com o banco de dados

import User from '../models/User.js';

//Busca usuário pelo email. Retorna o usuário e a senha
const loginService = (email) => User.findOne({email: email}).select("+password");

export {loginService}