const express = require('express');
const app = express();
const connectcDatabase = require("./src/database/db")

const userRoute = require("./src/routes/user.route")


const port = 3000;

connectcDatabase()
app.use(express.json());
app.use("/user", userRoute);

app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));