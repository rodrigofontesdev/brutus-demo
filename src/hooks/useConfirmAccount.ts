import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toastify } from './useToastify'

export function useConfirmAccount() {
  const [canSendEmail, setCanSendEmail] = useState(false)
  const [searchParams] = useSearchParams()
  const userEmail = searchParams.get('user')

  async function handleSendEmail() {
    if (canSendEmail) {
      try {
        await new Promise((resolve) => {
          setTimeout(
            () => resolve(toastify('E-mail enviado, acesse sua caixa de entrada.', 'success')),
            1000
          )
        })

        setCanSendEmail(false)
      } catch {
        toastify('Não foi possível enviar o e-mail, tente novamente.', 'error')
      }
    }
  }

  useEffect(() => {
    if (!canSendEmail) {
      setTimeout(() => setCanSendEmail(true), 60 * 2 * 1000) // after 2 minutes
    }
  }, [canSendEmail])

  return {
    handleSendEmail,
    userEmail,
    canSendEmail,
  }
}
