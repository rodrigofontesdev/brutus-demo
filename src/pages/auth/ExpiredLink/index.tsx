import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Box } from '../../../components/atoms/Box'
import { ButtonLink } from '../../../components/atoms/ButtonLink'
import { Card, Container } from './styles'

export function ExpiredLink() {
  return (
    <Container>
      <Box>
        <Card>
          <header>
            <h1>Link Expirado</h1>
            <p>O seu link encontra-se expirado, para continuar acessando solicite um novo.</p>
          </header>

          <ButtonLink
            to="/sign-in"
            icon={faHome}
            variant="success"
            aria-label="Solicitar novo link"
          />
        </Card>
      </Box>
    </Container>
  )
}
