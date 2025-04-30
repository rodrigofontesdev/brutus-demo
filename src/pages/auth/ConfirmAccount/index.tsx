import { Box } from '@components/atoms/Box'
import { InputGroup } from '@components/molecules/InputGroup'
import { format } from '@utils/formatter'
import { useSearchParams } from 'react-router-dom'
import { Card, Container, Heading } from './styles'

export function ConfirmAccount() {
  const [searchParams] = useSearchParams()
  const userEmail = searchParams.get('user')

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

          <form>
            <InputGroup.Root>
              <InputGroup.Label
                inputId="email"
                text="Enviamos um e-mail para:"
                variant="large"
              />
              <InputGroup.Control
                id="email"
                defaultValue={userEmail ? format.email(userEmail) : ''}
                variant="large"
                disabled
              />
            </InputGroup.Root>
          </form>
        </Card>
      </Box>
    </Container>
  )
}
