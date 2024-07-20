import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { format } from '../../../utils/formatter'
import { Button } from '../../atoms/Button'
import { Amount, Heading, TotalStyle } from './styles'

type TotalProps = {
  amount: number
  onSave: () => Promise<void>
}

export function Total({ amount, onSave }: TotalProps) {
  return (
    <TotalStyle>
      <Heading>
        <p>Total</p>
        <p>Receitas brutas no mês</p>
      </Heading>
      <Amount>
        <span>{format.price(amount / 100)}</span>
      </Amount>
      <Button
        icon={faFloppyDisk}
        variant="success"
        aria-label="Salvar relatório"
        onClick={onSave}
      />
    </TotalStyle>
  )
}
