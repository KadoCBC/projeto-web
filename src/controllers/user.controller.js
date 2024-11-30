
const create = (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({message: "preencha todos os campos para se registrar"})
    }

    res.status(201).send({
        message: "Usuario criado com sucesso",
        user: {
            name: name,
            username: username,
            email: email,
            avatar: avatar,
            background: background,
        },
    });
};


module.exports = {create};