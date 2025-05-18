/* eslint-disable camelcase */
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from '@models/User'
import { queryClient } from '@services/react-query'
import {
  SubscriberService,
  UpdateSubscriberBody,
  UpdateSubscriberParams,
} from '@services/SubscriberService'
import { useMutation } from '@tanstack/react-query'
import { STATES } from '@utils/data'
import { format } from '@utils/formatter'
import { accountSchema } from '@validation/AccountSchema'
import { AxiosResponse } from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { getAuthenticatedUserOptions, useAuth } from './useAuth'
import { toastify } from './useToastify'

type AccountForm = z.infer<typeof accountSchema>
type UpdateAccountRequest = UpdateSubscriberParams &
  Pick<UpdateSubscriberBody, 'fullName' | 'email' | 'mobilePhone' | 'city' | 'state' | 'secretWord'>

export function useProfile() {
  const { authenticatedUser } = useAuth()
  const { full_name, email, mobile_phone, city, state, secret_word } = authenticatedUser?.data ?? {}
  const { handleSubmit, register, control, formState, setError, reset } = useForm<AccountForm>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      fullName: full_name ?? '',
      email: email ?? '',
      mobilePhone: mobile_phone ? format.phone(mobile_phone) : '',
      city: city ?? '',
      state: STATES.find((item) => item.value === state),
      secretWord: secret_word ?? '',
    },
  })

  const { isDirty } = formState

  const updateAccountRequest = useMutation({
    mutationFn: ({ subscriberId, ...props }: UpdateAccountRequest) =>
      SubscriberService.update({ subscriberId }, props),
    onSuccess({ data }) {
      const { full_name, email, mobile_phone, city, state, secret_word } = data

      queryClient.setQueryData(
        getAuthenticatedUserOptions.queryKey,
        (oldData: AxiosResponse<User> | undefined) => {
          if (!oldData) return oldData

          const newData = {
            ...oldData,
            data: {
              ...oldData.data,
              full_name,
              email,
              mobile_phone,
              city,
              state,
              secret_word,
            },
          }

          reset({
            fullName: full_name ?? oldData.data.full_name,
            email: email ?? oldData.data.email,
            mobilePhone: format.phone(mobile_phone ?? oldData.data.mobile_phone),
            city: city ?? oldData.data.city ?? '',
            state:
              STATES.find((item) => item.value === state) ??
              STATES.find((item) => item.value === oldData.data.state),
            secretWord: secret_word ?? oldData.data.secret_word ?? '',
          })

          return newData
        },
      )

      toastify('Os dados da sua conta foram atualizados com sucesso.', 'success', {
        position: 'top-center',
      })
    },
    onError({ response }) {
      if (response?.data.type === 'INVALID_REQUEST_ERROR') {
        toastify('Não foi possível atualizar a conta, verifique os seus dados!', 'error', {
          position: 'top-center',
        })

        response?.data.errors?.forEach((error) => {
          const hasText = (value: string) => error.toLowerCase().includes(value)

          if (hasText('full name') || hasText('nome completo')) {
            setError('fullName', { message: error })
          }

          if (hasText('email') || hasText('e-mail')) {
            setError('email', { message: error })
          }

          if (hasText('mobile phone') || hasText('celular')) {
            setError('mobilePhone', { message: error })
          }

          if (hasText('city') || hasText('cidade')) {
            setError('city', { message: error })
          }

          if (hasText('state') || hasText('estado')) {
            setError('state', { message: error })
          }

          if (hasText('secret word') || hasText('palavra secreta')) {
            setError('secretWord', { message: error })
          }
        })
      } else {
        toastify(response?.data.message ?? 'Ocorreu um erro desconhecido.', 'error', {
          position: 'top-center',
        })
      }
    },
  })

  const subscriberId = authenticatedUser?.data.id ?? ''

  const handleUpdateAccount = handleSubmit(async (data: AccountForm) => {
    if (!isDirty) return

    const { fullName, email, mobilePhone, city, state, secretWord } = data

    await updateAccountRequest.mutateAsync({
      subscriberId,
      fullName,
      email,
      secretWord,
      city,
      state: state.value,
      mobilePhone: format.digits(mobilePhone),
    })
  })

  return {
    handleUpdateAccount,
    register,
    formState,
    control,
  }
}
