import { z } from 'zod'

export const accountSchema = z.object({
  fullName: z.string().trim().min(1, { message: 'O campo nome completo é obrigatório.' }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: 'O campo e-mail é obrigatório.' })
    .email({ message: 'O formato do e-mail é inválido.' }),
  cellPhone: z
    .string()
    .min(1, { message: 'O campo celular é obrigatório.' })
    .regex(/^\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}$/i, {
      message: 'O formato do celular é inválido.',
    }),
  city: z.string().trim().min(1, { message: 'O campo cidade é obrigatório.' }),
  state: z
    .object({ value: z.string(), label: z.string() })
    .nullable()
    .refine((data) => (data ? 'value' in data : false), {
      message: 'O campo estado é obrigatório.',
    }),
})
