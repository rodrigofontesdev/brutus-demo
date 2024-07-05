import { faThumbsUp, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../atoms/Button'
import { InputGroup } from '../../molecules/InputGroup'
import { Actions, ConfirmReportRemovalStyle } from './styles'

type ConfirmReportRemovalProps = {
  reportName: string
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmReportRemoval({
  reportName,
  onConfirm,
  onCancel,
}: ConfirmReportRemovalProps) {
  return (
    <ConfirmReportRemovalStyle>
      <p>
        Você tem certeza que deja remover o relatório referente ao período de apuração de{' '}
        {reportName}? Essa ação é irreversível.
      </p>

      <InputGroup.Root>
        <InputGroup.Label text="Período de apuração" inputId="report" variant="large" />
        <InputGroup.Control id="report" defaultValue={reportName} variant="large" readOnly />
      </InputGroup.Root>

      <Actions>
        <p>Deseja continuar com essa ação?</p>
        <div>
          <Button
            icon={faXmark}
            iconSize={40}
            variant="error"
            aria-label="Cancelar"
            onClick={onCancel}
          ></Button>
          <Button
            icon={faThumbsUp}
            iconSize={32}
            variant="success"
            aria-label="Confirmar"
            onClick={onConfirm}
          ></Button>
        </div>
      </Actions>
    </ConfirmReportRemovalStyle>
  )
}
