import { Mei } from '@models/MeiCategory'
import { z } from 'zod'

export const completeProfileSchema = z.object({
  secretWord: z
    .string()
    .trim()
    .min(1, { message: 'O campo palavra secreta é obrigatório.' })
    .max(50, { message: 'A palavra secreta é muito grande. Limite de 50 caracteres.' }),
  city: z.string().trim().min(1, { message: 'O campo cidade é obrigatório.' }),
  state: z.object(
    { value: z.string(), label: z.string() },
    { message: 'O campo estado é obrigatório.' },
  ),
  mei: z.enum([Mei.GERAL, Mei.TAC], { message: 'A categoria selecionada é inválida.' }),
  creationDate: z
    .string()
    .trim()
    .min(1, { message: 'O campo data de criação é obrigatório.' })
    .refine((date) => /^\d{2}\/\d{2}\/\d{4}$/.test(date), {
      message: 'O formato da data de criação é inválido.',
    }),
})
