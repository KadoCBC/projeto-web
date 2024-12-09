import {z} from "zod";

export const signinSchema = z.object({
    email: z.string().email({message: "Email inválido"}).toLowerCase(), // email valido, passei pra lower case pra nao dar ruim
    password: z.string().min(6, {message: "Senha deve ter no mínimo 6 caracteres"}), // senha minimo 6 caracteres
});