import { faHome } from '@fortawesome/free-solid-svg-icons'
import { ButtonLink } from '../../../components/atoms/ButtonLink'
import { Card, Container, Overlay } from './styles'

export function InvalidLink() {
  return (
    <Container>
      <Card>
        <Overlay></Overlay>

        <header>
          <h1>Link Inválido</h1>
          <p>Não é mais possível utilizar esse link, para continuar acessando solicite um novo.</p>
        </header>

        <ButtonLink
          to="/sign-in"
          icon={faHome}
          variant="success"
          aria-label="Solicitar novo link"
        />
      </Card>
    </Container>
  )
}
