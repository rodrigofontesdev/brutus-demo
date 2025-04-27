import { zodResolver } from '@hookform/resolvers/zod'
import { STATES } from '@utils/data'
import { accountSchema } from '@validation/AccountSchema'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toastify } from './useToastify'

type AccountForm = z.infer<typeof accountSchema>

export function useProfile() {
  const { handleSubmit, register, control, formState } = useForm<AccountForm>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      fullName: 'Rodrigo Fontes Santos',
      email: 'oi@rodrigofontes.dev',
      cellPhone: '(11) 99988-1234',
      city: 'Ribeirão Pires',
      state: STATES[24],
    },
  })

  const { isDirty } = formState

  const handleUpdateAccount = handleSubmit(async (data: AccountForm) => {
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
  })

  return {
    handleUpdateAccount,
    register,
    formState,
    control,
  }
}
