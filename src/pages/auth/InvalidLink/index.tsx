import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Box } from '../../../components/atoms/Box'
import { ButtonLink } from '../../../components/atoms/ButtonLink'
import { Card, Container, Heading } from './styles'

export function InvalidLink() {
  return (
    <Container>
      <Box>
        <Card>
          <Heading>
            <h1>Link Inválido</h1>
            <p>
              Não é mais possível utilizar esse link, para continuar acessando solicite um novo.
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
