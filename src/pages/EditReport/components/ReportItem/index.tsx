import { InputGroup } from '@components/molecules/InputGroup'
import { GrossIncomeCategory, ReportCategories } from '@hooks/useReport'
import { format } from '@utils/formatter'
import { ReportItemStyle } from './styles'

type ReportItemProps = {
  category: ReportCategories
  title: string
  withoutInvoiceAmount: number
  withInvoiceAmount: number
  subtotal: number
  onAmountChange: (payload: GrossIncomeCategory) => void
}

export function ReportItem({
  category,
  title,
  withoutInvoiceAmount,
  withInvoiceAmount,
  subtotal,
  onAmountChange,
}: ReportItemProps) {
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
              onAmountChange({
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
              onAmountChange({
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
          <input
            name={`subtotal[${category}]`}
            value={format.price(subtotal / 100)}
            readOnly
          />
        </InputGroup.Label>
      </InputGroup.Root>
    </ReportItemStyle>
  )
}
