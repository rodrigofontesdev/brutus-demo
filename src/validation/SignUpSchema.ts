import { z } from 'zod'

export const signUpSchema = z.object({
  businessCnpj: z
    .string()
    .min(1, { message: 'O campo CNPJ é obrigatório.' })
    .regex(/^[0-9a-z]{2}\.[0-9a-z]{3}\.[0-9a-z]{3}\/[0-9a-z]{4}-[0-9]{2}$/i, {
      message: 'O formato do CNPJ é inválido.',
    }),
  fullName: z.string().trim().min(1, { message: 'O campo nome completo é obrigatório.' }),
  mobilePhone: z
    .string()
    .min(1, { message: 'O campo celular é obrigatório.' })
    .regex(/^\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}$/i, {
      message: 'O formato do celular é inválido.',
    }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: 'O campo e-mail é obrigatório.' })
    .email({ message: 'O formato do e-mail é inválido.' }),
})
