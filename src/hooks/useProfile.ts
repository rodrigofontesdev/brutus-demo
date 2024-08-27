import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { STATES } from '../utils/data'
import { toastify } from './useToastify'

const accountSchema = z.object({
  fullName: z.string().trim().min(1, { message: 'O campo nome completo é obrigatório.' }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: 'O campo e-mail é obrigatório.' })
    .email({ message: 'O e-mail é inválido.' }),
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

type Account = z.infer<typeof accountSchema>

export function useProfile() {
  const { handleSubmit, ...methods } = useForm<Account>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      fullName: 'Rodrigo Fontes Santos',
      email: 'oi@rodrigofontes.dev',
      cellPhone: '(11) 99988-1234',
      city: 'Ribeirão Pires',
      state: STATES[24],
    },
  })

  const { isDirty } = methods.formState

  async function updateAccount(data: Account) {
    console.log(data)

    if (isDirty) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            toastify('Os dados da conta foram atualizados.', 'success', {
              position: 'top-center',
            })
          )
        }, 1000)
      })
    }
  }

  const handleUpdateAccount = handleSubmit(updateAccount)

  return {
    handleUpdateAccount,
    ...methods,
  }
}
