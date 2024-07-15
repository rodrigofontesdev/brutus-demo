import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
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
        <Button
          icon={faXmark}
          iconSize={36}
          variant="error"
          aria-label="Cancelar"
          onClick={onCancel}
        />
        <Button
          icon={faCheck}
          iconSize={36}
          variant="success"
          aria-label="Confirmar"
          onClick={onConfirm}
        />
      </Actions>
    </ConfirmReportRemovalStyle>
  )
}
