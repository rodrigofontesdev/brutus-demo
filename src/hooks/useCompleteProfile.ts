/* eslint-disable camelcase */
import { zodResolver } from '@hookform/resolvers/zod'
import { Mei } from '@models/MeiCategory'
import { User } from '@models/User'
import { MeiCategoryService } from '@services/MeiCategoryService'
import { queryClient } from '@services/react-query'
import { SubscriberService } from '@services/SubscriberService'
import { useMutation } from '@tanstack/react-query'
import { STATES } from '@utils/data'
import { format } from '@utils/formatter'
import { completeProfileSchema } from '@validation/CompleteProfileSchema'
import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { getAuthenticatedUserOptions, useAuth } from './useAuth'
import { useMultiStepControl } from './useMultiStepControl'
import { toastify } from './useToastify'

type CompleteProfileForm = z.infer<typeof completeProfileSchema>
type CompleteProfileFields = keyof CompleteProfileForm
type UpdateProfileRequest = {
  subscriberId: string
  secretWord: string
  city: string
  state: string
  mei: Mei
  creationDate: string
}

export function useCompleteProfile() {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const { currentStep, isLastStep, jumpToNextStep, jumpToStep } = useMultiStepControl()
  const { authenticatedUser } = useAuth()
  const { secret_word, city, state, opening_date } = authenticatedUser?.data ?? {}
  const stateOption = STATES.find((item) => item.value === state)
  const { handleSubmit, register, control, formState, trigger, setError, setFocus } =
    useForm<CompleteProfileForm>({
      mode: 'onChange',
      resolver: zodResolver(completeProfileSchema),
      defaultValues: {
        secretWord: secret_word ?? '',
        city: city ?? '',
        state: stateOption,
        mei: opening_date?.type ?? Mei.GERAL,
        creationDate: format.date(opening_date?.creation_date ?? ''),
      },
    })

  const onModalChange = () => setIsModalOpen(!isModalOpen)

  const updateProfileRequest = useMutation({
    mutationFn: ({ subscriberId, mei, creationDate, ...props }: UpdateProfileRequest) => {
      return Promise.all([
        SubscriberService.update({ subscriberId }, props),
        MeiCategoryService.create({ creationDate, type: mei }),
      ])
    },
    onSuccess(response) {
      const { city, state, secret_word } = response[0].data
      const meiCategory = response[1].data

      queryClient.setQueryData(
        getAuthenticatedUserOptions.queryKey,
        (oldData: AxiosResponse<User> | undefined) =>
          oldData
            ? {
                ...oldData,
                data: {
                  ...oldData.data,
                  city,
                  state,
                  secret_word,
                  opening_date: {
                    ...meiCategory,
                  },
                },
              }
            : oldData,
      )

      toastify('O seu perfil foi completado com sucesso.', 'success')
      onModalChange()
    },
    onError({ response }) {
      if (response?.data.type === 'INVALID_REQUEST_ERROR') {
        toastify('Não foi possível completar seu perfil, verifique os seus dados!', 'error')
        jumpToStep(1)

        response?.data.errors?.forEach((error) => {
          const hasText = (value: string) => error.toLowerCase().includes(value)

          if (hasText('secret word') || hasText('palavra secreta')) {
            setError('secretWord', { message: error })
          }

          if (hasText('city') || hasText('cidade')) {
            setError('city', { message: error })
          }

          if (hasText('state') || hasText('estado')) {
            setError('state', { message: error })
          }

          if (hasText('type') || hasText('tipo')) {
            setError('mei', { message: error })
          }

          if (
            hasText('creation date') ||
            hasText('data de criação') ||
            hasText('date') ||
            hasText('data')
          ) {
            setError('creationDate', { message: error })
          }
        })
      } else {
        toastify(response?.data.message ?? 'Ocorreu um erro desconhecido.', 'error')
      }
    },
  })

  async function handleStepValidation() {
    let fields: CompleteProfileFields[] = []

    switch (currentStep) {
      case 1:
        fields.push('secretWord')
        break
      case 2:
        fields.push('city', 'state')
        break
      case 3:
        fields.push('mei', 'creationDate')
        break
      default:
        fields = []
    }

    const isCurrentStepValid = await trigger(fields, { shouldFocus: true })

    if (!isCurrentStepValid) return

    jumpToNextStep()
  }

  const subscriberId = authenticatedUser?.data.id ?? ''

  const handleCompleteProfile = handleSubmit(async (data: CompleteProfileForm) => {
    const { secretWord, city, state, mei, creationDate } = data

    await updateProfileRequest.mutateAsync({
      subscriberId,
      secretWord,
      city,
      mei,
      creationDate: format.dateToIso(creationDate),
      state: state.value,
    })
  })

  useEffect(() => {
    if (updateProfileRequest.isError) {
      setFocus('secretWord')
    }
  }, [isLastStep, updateProfileRequest.isError, setFocus])

  return {
    handleCompleteProfile,
    handleStepValidation,
    register,
    control,
    formState,
    isModalOpen,
    onModalChange,
  }
}
