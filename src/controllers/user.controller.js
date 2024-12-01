const userService = require('../services/user.service')
const mongoose = require("mongoose")

const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({ message: "preencha todos os campos para se registrar" })
    }

    const user = await userService.createService(req.body);

    if (!user) {
        return res.status(400).send({ message: "erro ao criar usuario" });
    }

    res.status(201).send({
        message: "Usuario criado com sucesso",
        user: {
            id: user._id,
            name: name,
            username: username,
            email: email,
            avatar: avatar,
            background: background,
        },
    });
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();

    if (users.length === 0) {
        return res.status(400).send({ message: "Não há usuarios registrados" });
    }
    res.send(users);
};

const findById = async (req, res) => {
    const user = req.user;
    res.send(user);
};

const update = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name && !username && !email && !password && !avatar && !background) {
        res.status(400).send({ message: "Preecha pelo menos um campo para atualizar"});
    }

    const {id, user} = req;
    
    await userService.updateService(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background
    );

    res.send({ message: "Usuario foi atualizado com Sucesso!"})
};

module.exports = { create, findAll, findById, update};