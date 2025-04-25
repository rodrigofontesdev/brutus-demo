import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from './styles'

type ScreenLoading = { message?: string }

export function ScreenLoading({ message }: ScreenLoading) {
  return (
    <Container>
      <FontAwesomeIcon icon={faSpinner} fontSize="3rem" spin />
      <p>{message ?? 'Carregando...'}</p>
    </Container>
  )
}
