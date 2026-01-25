import { Box } from '@components/atoms/Box'
import { InputGroup } from '@components/molecules/InputGroup'
import { Modal } from '@components/organisms/Modal'
import { GrossIncomeCategory, ReportCategories } from '@hooks/useReport'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Dialog from '@radix-ui/react-dialog'
import { format } from '@utils/formatter'
import { ReactElement } from 'react'
import { Card, CardBody, CardFooter, CardHeader, InfoButton } from './styles'

type GrossIncomeCardProps = {
  category: ReportCategories
  title: string
  subtitle: string
  withoutInvoiceAmount: number
  withInvoiceAmount: number
  subtotal: number
  help: ReactElement
  onAmountChange: (payload: GrossIncomeCategory) => void
}

export function GrossIncomeCard({
  category,
  title,
  subtitle,
  withoutInvoiceAmount,
  withInvoiceAmount,
  subtotal,
  help,
  onAmountChange,
}: GrossIncomeCardProps) {
  return (
    <Box>
      <Card>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <InfoButton>
              <FontAwesomeIcon
                icon={faCircleInfo}
                fontSize="1.5rem"
              />
            </InfoButton>
          </Dialog.Trigger>

          <Modal title="Precisando de ajuda?">{help}</Modal>
        </Dialog.Root>

        <CardHeader>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </CardHeader>

        <CardBody>
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
        </CardBody>

        <CardFooter>
          <p>Total das receitas</p>
          <span>{format.price(subtotal / 100)}</span>
        </CardFooter>
      </Card>
    </Box>
  )
}
