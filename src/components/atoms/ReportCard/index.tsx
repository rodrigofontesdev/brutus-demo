import { Link } from 'react-router-dom'
import { Card, Actions, Title, Overlay } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons/faCloudArrowDown'

export function ReportCard() {
  return (
    <Card>
      <Overlay></Overlay>

      <Title>
        <h3>Maio/2024</h3>
        <p>R$ 6.250,00</p>
      </Title>

      <Actions>
        <Link to="/" role="button">
          <FontAwesomeIcon icon={faEye} fontSize={24} />
        </Link>
        <button type="button">
          <FontAwesomeIcon icon={faCloudArrowDown} fontSize={24} />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faTrashAlt} fontSize={24} />
        </button>
      </Actions>
    </Card>
  )
}
