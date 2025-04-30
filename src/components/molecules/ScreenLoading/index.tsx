import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from './styles'

export function ScreenLoading() {
  return (
    <Container>
      <FontAwesomeIcon icon={faSpinner} fontSize="3rem" spin />
    </Container>
  )
}
