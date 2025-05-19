import User from "../models/User.js"

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = async (userIdParam, userIdLogged) => {
let idParam;
  if (!userIdParam) {
    userIdParam = userIdLogged;
    idParam = userIdParam;
  } else {
    idParam = userIdParam;
  }
  if (!idParam)
    throw new Error("Mande um id de user nos parametros para buscar");

  const findByIdUser = (idUser) => User.findById(idUser);
  const user = await findByIdUser(idParam);

  if (!user) throw new Error("Usuario não encontrado!");

  return user;
}

const updateService = (        
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) => User.findOneAndUpdate(
    {_id: id},
    {id,name,username,email,password,avatar,background}
)

export default {
    createService,
    findAllService,
    findByIdService,
    updateService,
};