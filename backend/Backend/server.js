import express from 'express';
import connectcDatabase from './src/database/db.js';
import dotenv from "dotenv";
import cors from "cors";

import userRoute from './src/routes/user.route.js';
import authRoute from './src/routes/auth.route.js';
import newsRoute from './src/routes/news.route.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

connectcDatabase()
app.use(express.json());
app.use(cors());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));