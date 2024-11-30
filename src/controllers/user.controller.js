const UserService = require('../services/user.service')

const create = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({message: "preencha todos os campos para se registrar"})
    }

    const user = await UserService.create(req.body);

    if (!user){
        return res.status(400).send({ message: "erro ao criar usuario"});
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


module.exports = {create};