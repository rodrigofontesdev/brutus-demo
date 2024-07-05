import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from '../../../components/atoms/Button'
import { InputGroup } from '../../../components/molecules/InputGroup'
import { toastify } from '../../../hooks/useToastify'
import { Card, ConfirmForm, Container, Overlay } from './styles'
import { format } from '../../../utils/formatter'

export function Confirm() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [searchParams] = useSearchParams()
  const userEmail = searchParams.get('user')

  async function handleSendEmail() {
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(toastify('E-mail enviado, acesse sua caixa de entrada.', 'success'))
        }, 1000)
      })

      setIsButtonDisabled(true)
    } catch {
      toastify('Não foi possível enviar o e-mail, tente novamente.', 'error')
    }
  }

  useEffect(
    function enableButton() {
      if (isButtonDisabled) {
        setTimeout(() => {
          setIsButtonDisabled(false)
        }, 2000 * 60) // after 2 minutes
      }
    },
    [isButtonDisabled]
  )

  return (
    <Container>
      <Card>
        <Overlay></Overlay>

        <header>
          <h1>Verificar E-mail</h1>
          <p>
            Acesse a caixa de entrada ou spam do e-mail, uma mensagem foi enviada, dentro você
            encontra um link para confirmar a criação da conta. É super rápido!
          </p>
        </header>

        <ConfirmForm>
          <InputGroup.Root>
            <InputGroup.Label inputId="email" text="Enviamos um e-mail para:" variant="large" />
            <InputGroup.Control
              id="email"
              defaultValue={userEmail ? format.email(userEmail) : ''}
              variant="large"
              disabled
            />
          </InputGroup.Root>

          <Button
            type="button"
            icon={faEnvelope}
            variant="success"
            aria-label="Reenviar e-mail"
            onClick={() => handleSendEmail()}
            disabled={isButtonDisabled}
          />

          <p>Se você não recebeu o e-mail podemos enviar outro dentro de 2 minutos.</p>
        </ConfirmForm>
      </Card>
    </Container>
  )
}
