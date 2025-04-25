import { zodResolver } from '@hookform/resolvers/zod'
import { authService } from '@services/AuthService'
import { useMutation } from '@tanstack/react-query'
import { format } from '@utils/formatter'
import { signInSchema } from '@validation/SignInSchema'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toastify } from './useToastify'

type SignInForm = z.infer<typeof signInSchema>

export function useSignIn() {
  const { handleSubmit, register, formState, setError, setFocus } = useForm<SignInForm>({
    mode: 'onChange',
    resolver: zodResolver(signInSchema),
    defaultValues: {
      businessCnpj: '',
    },
  })

  const signInRequest = useMutation({
    mutationFn: authService.signIn,
    onSuccess() {
      toastify('O link para acessar sua conta foi enviado para o seu e-mail.', 'success')
    },
    onError({ response }) {
      if (response?.data.type === 'INVALID_REQUEST_ERROR') {
        setError('businessCnpj', { message: response.data.errors?.at(0) })
      } else {
        toastify(response?.data.message ?? 'Ocorreu um erro desconhecido.', 'error')
      }

      setFocus('businessCnpj')
    },
  })

  const handleSignIn = handleSubmit(async (data: SignInForm) => {
    await signInRequest.mutateAsync({
      cnpj: format.digits(data.businessCnpj),
    })
  })

  return { handleSignIn, register, formState }
}
