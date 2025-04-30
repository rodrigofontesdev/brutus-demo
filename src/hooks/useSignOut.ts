import { authService } from '@services/AuthService'
import { queryClient } from '@services/react-query'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { getAuthenticatedUserOptions } from './useAuth'
import { toastify } from './useToastify'

export function useSignOut() {
  const navigate = useNavigate()
  const signOutRequest = useMutation({
    mutationFn: authService.signOut,
    onSuccess() {
      queryClient.removeQueries({ queryKey: getAuthenticatedUserOptions.queryKey })

      navigate('/entrar', { replace: true })
      toastify('Você saiu da sua conta, volte logo!', 'success')
    },
  })

  const handleSignOut = async () => {
    await signOutRequest.mutateAsync()
  }

  return { handleSignOut }
}
