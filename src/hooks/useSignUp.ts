import { zodResolver } from '@hookform/resolvers/zod'
import { authService } from '@services/AuthService'
import { useMutation } from '@tanstack/react-query'
import { format } from '@utils/formatter'
import { signUpSchema } from '@validation/SignUpSchema'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useMultiStepControl } from './useMultiStepControl'
import { toastify } from './useToastify'

type SignUpForm = z.infer<typeof signUpSchema>
type SignUpFields = keyof SignUpForm

export function useSignUp() {
  const navigate = useNavigate()
  const { currentStep, isLastStep, jumpToNextStep, jumpToStep } = useMultiStepControl()
  const { handleSubmit, register, formState, trigger, getValues, setError, setFocus } =
    useForm<SignUpForm>({
      mode: 'onSubmit',
      resolver: zodResolver(signUpSchema),
      defaultValues: {
        businessCnpj: '',
        fullName: '',
        mobilePhone: '',
        email: '',
      },
    })

  const signUpRequest = useMutation({
    mutationFn: authService.signUp,
    onSuccess({ data }) {
      navigate(`/cadastrar/confirmar?user=${data.email}`, { replace: true })
    },
    onError({ response }) {
      if (response?.data.type === 'INVALID_REQUEST_ERROR') {
        toastify('Não foi possível criar a sua conta, verifique os seus dados!', 'error')
        jumpToStep(1)

        response?.data.errors?.forEach((error) => {
          const hasText = (value: string) => error.toLowerCase().includes(value)

          if (hasText('cnpj')) {
            setError('businessCnpj', { message: error })
          }

          if (hasText('full name') || hasText('nome completo')) {
            setError('fullName', { message: error })
          }

          if (hasText('mobile phone') || hasText('celular')) {
            setError('mobilePhone', { message: error })
          }

          if (hasText('email') || hasText('e-mail')) {
            setError('email', { message: error })
          }
        })
      } else {
        toastify(response?.data.message ?? 'Ocorreu um erro desconhecido.', 'error')
      }
    },
  })

  async function handleStepValidation() {
    const fields = Object.keys(getValues())
    const currentField = fields.at(currentStep - 1) as SignUpFields
    const isCurrentStepValid = await trigger(currentField, { shouldFocus: true })

    if (!isCurrentStepValid) return

    jumpToNextStep()
  }

  const handleSignUp = handleSubmit(async (data: SignUpForm) => {
    const { businessCnpj, fullName, mobilePhone, email } = data

    await signUpRequest.mutateAsync({
      fullName,
      email,
      cnpj: format.digits(businessCnpj),
      mobilePhone: format.digits(mobilePhone),
    })
  })

  useEffect(() => {
    if (signUpRequest.isError) {
      setFocus('businessCnpj')
    }
  }, [isLastStep, signUpRequest.isError, setFocus])

  return {
    handleStepValidation,
    handleSignUp,
    register,
    formState,
  }
}
