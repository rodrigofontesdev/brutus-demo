import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Box } from '../../../components/atoms/Box'
import { Button } from '../../../components/atoms/Button'
import { InputGroup } from '../../../components/molecules/InputGroup'
import { useConfirmAccount } from '../../../hooks/useConfirmAccount'
import { format } from '../../../utils/formatter'
import { Card, ConfirmForm, Container, Heading } from './styles'

export function ConfirmAccount() {
  const { handleSendEmail, userEmail, canSendEmail } = useConfirmAccount()
  const isButtonDisabled = !canSendEmail

  return (
    <Container>
      <Box>
        <Card>
          <Heading>
            <h1>Verificar E-mail</h1>
            <p>
              Acesse a caixa de entrada ou spam do e-mail, uma mensagem foi enviada, dentro você
              encontra um link para confirmar a criação da conta. É super rápido!
            </p>
          </Heading>

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
              onClick={handleSendEmail}
              disabled={isButtonDisabled}
            />

            <p>Se você não recebeu o e-mail podemos enviar outro dentro de 2 minutos.</p>
          </ConfirmForm>
        </Card>
      </Box>
    </Container>
  )
}
