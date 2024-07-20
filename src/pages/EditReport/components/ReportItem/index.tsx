import { useContext } from 'react'
import { InputGroup } from '../../../../components/molecules/InputGroup'
import { ReportCategories, ReportContext } from '../../../../contexts/ReportContext'
import { format } from '../../../../utils/formatter'
import { ReportItemStyle } from './styles'

type ReportItemProps = {
  category: ReportCategories
  title: string
  withoutInvoiceAmount: number
  withInvoiceAmount: number
  subtotal: number
}

export function ReportItem({
  category,
  title,
  withoutInvoiceAmount,
  withInvoiceAmount,
  subtotal,
}: ReportItemProps) {
  const { handleAmountChange } = useContext(ReportContext)

  return (
    <ReportItemStyle>
      <h3>{title}</h3>

      <InputGroup.Root>
        <InputGroup.Label text="Sem nota fiscal">
          <InputGroup.MaskControl
            prefix="R$"
            mask={Number}
            thousandsSeparator="."
            padFractionalZeros
            unmask="typed"
            name={`withoutInvoice[${category}]`}
            placeholder="0,00"
            value={String(withoutInvoiceAmount / 100)}
            onAccept={(amount) => {
              handleAmountChange({
                category: category,
                amount: Number(amount) * 100,
                invoice: false,
              })
            }}
          />
        </InputGroup.Label>
      </InputGroup.Root>

      <InputGroup.Root>
        <InputGroup.Label text="Com nota fiscal">
          <InputGroup.MaskControl
            prefix="R$"
            mask={Number}
            thousandsSeparator="."
            padFractionalZeros
            unmask="typed"
            name={`withInvoice[${category}]`}
            placeholder="0,00"
            value={String(withInvoiceAmount / 100)}
            onAccept={(amount) => {
              handleAmountChange({
                category: category,
                amount: Number(amount) * 100,
                invoice: true,
              })
            }}
          />
        </InputGroup.Label>
      </InputGroup.Root>

      <InputGroup.Root>
        <InputGroup.Label text="Total das receitas">
          <input name={`subtotal${category}`} value={format.price(subtotal / 100)} readOnly />
        </InputGroup.Label>
      </InputGroup.Root>
    </ReportItemStyle>
  )
}
