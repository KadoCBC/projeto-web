import { z } from "zod";

export const searchSchema = z.object({
    title: z
     .string()
     .nonempty({message: "A pesquisa está vazia"})
     .refine(value => !/^\s+$/.test(value), {message: "A pesquisa não aceita somente espaços"}), // nao aceita apenas espacos

});