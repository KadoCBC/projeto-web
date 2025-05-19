import mongoose from "mongoose";
import bcrypt from "bcrypt";

//Protocolo para criação de um usuario
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    background: {
        type: String,
        required: true,
    }
});

//Criptografia de senha. Um hash é criado a partir da senha.
UserSchema.pre("save", async function(next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const User = mongoose.model("User", UserSchema);

export default User;
