import { zodResolver } from '@hookform/resolvers/zod'
import { queryClient } from '@services/react-query'
import { SubscriberService } from '@services/SubscriberService'
import { useMutation } from '@tanstack/react-query'
import { deleteAccountSchema } from '@validation/DeleteAccountSchema'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { getAuthenticatedUserOptions, useAuth } from './useAuth'
import { toastify } from './useToastify'

type DeleteAccountForm = z.infer<typeof deleteAccountSchema>

export function useDeleteAccount() {
  const { authenticatedUser } = useAuth()
  const navigate = useNavigate()
  const { handleSubmit, register, formState } = useForm<DeleteAccountForm>({
    mode: 'onSubmit',
    resolver: zodResolver(deleteAccountSchema),
    defaultValues: {
      businessCnpj: '',
    },
  })

  const deleteAccountRequest = useMutation({
    mutationFn: SubscriberService.delete,
    onSuccess() {
      queryClient.removeQueries({ queryKey: getAuthenticatedUserOptions.queryKey })

      navigate('/entrar', { replace: true })
      toastify('A sua conta foi excluida como solicitado.', 'success')
    },
    onError({ response }) {
      toastify(response?.data.message ?? 'Ocorreu um erro desconhecido.', 'error')
    },
  })

  const subscriberId = authenticatedUser?.data.id

  const handleDeleteAccount = handleSubmit(async () => {
    if (!subscriberId) return

    await deleteAccountRequest.mutateAsync({ subscriberId })
  })

  return {
    handleDeleteAccount,
    register,
    formState,
  }
}
