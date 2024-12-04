import express from 'express';
import connectcDatabase from './src/database/db.js';
import userRoute from './src/routes/user.route.js';

const port = 3000;
const app = express();

connectcDatabase()
app.use(express.json());
app.use("/user", userRoute);

app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));