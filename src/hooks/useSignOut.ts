import { authService } from '@services/AuthService'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toastify } from './useToastify'

export function useSignOut() {
  const navigate = useNavigate()
  const signOutRequest = useMutation({
    mutationFn: authService.signOut,
    onSuccess() {
      navigate('/entrar')
      toastify('Você saiu da sua conta, volte logo!', 'success')
    },
  })

  const handleSignOut = () => {
    signOutRequest.mutateAsync()
  }

  return { handleSignOut }
}
