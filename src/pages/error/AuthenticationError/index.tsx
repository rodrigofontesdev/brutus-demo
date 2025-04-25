import { Box } from '@components/atoms/Box'
import { ButtonLink } from '@components/atoms/ButtonLink'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Card, Container, Heading } from './styles'

export function AuthenticationError() {
  return (
    <Container>
      <Box>
        <Card>
          <Heading>
            <h1>Link Inválido</h1>
            <p>
              O link que você está tentando utilizar para acessar a sua conta na plataforma expirou
              ou já foi utilizado. Para continuar acessando solicite um novo.
            </p>
          </Heading>

          <ButtonLink
            to="/entrar"
            icon={faHome}
            variant="success"
            aria-label="Solicitar novo link"
          />
        </Card>
      </Box>
    </Container>
  )
}
