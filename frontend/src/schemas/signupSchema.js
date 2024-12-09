import {z} from "zod";

export const signupSchema = z.object({
    name: z
    .string()
    .min(3, {message: "Nome deve ter no mínimo 3 caracteres"})
    .transform((name) => 
        name
    .trim()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ")),                // nome minimo 3 caracteres, trim, map, split e join pra deixar a primeira letra de cada palavra maiuscula
    email: z.string().email({message: "Email inválido"}).toLowerCase(), // email valido, passei pra lower case pra nao dar ruim
    password: z.string().min(6, {message: "Senha deve ter no mínimo 6 caracteres"}), // senha minimo 6 caracteres
    confirmPassword: z.string().min(6, {message: "Senha deve ter no mínimo 6 caracteres"}), // senha minimo 6 caracteres
}).refine((data) => data.password === data.confirmPassword, {message: "As senhas devem ser iguais", path: ["confirmPassword"], }); // senha e confirmar senha iguais