import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toastify } from './useToastify'

const signInSchema = z.object({
  businessCnpj: z
    .string()
    .min(1, { message: 'O campo CNPJ é obrigatório.' })
    .regex(/^[0-9a-z]{2}\.[0-9a-z]{3}\.[0-9a-z]{3}\/[0-9a-z]{4}-[0-9]{2}$/i, {
      message: 'O formato do CNPJ é inválido.',
    }),
})

type SignIn = z.infer<typeof signInSchema>

export function useSignIn() {
  const { handleSubmit, ...methods } = useForm<SignIn>({
    mode: 'onChange',
    resolver: zodResolver(signInSchema),
    defaultValues: {
      businessCnpj: '',
    },
  })

  const handleSignIn = handleSubmit(signIn)

  return { handleSignIn, ...methods }
}

async function signIn(data: SignIn) {
  try {
    console.log(data)

    await new Promise((resolve) => {
      setTimeout(
        () => resolve(toastify('O link de acesso foi enviado para o seu e-mail.', 'success')),
        1000
      )
    })
  } catch {
    toastify('Tem certeza que digitou o CNPJ correto?', 'error')
  }
}
