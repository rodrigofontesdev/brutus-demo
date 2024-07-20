import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactElement, useContext } from 'react'
import { Box } from '../../../../components/atoms/Box'
import { InputGroup } from '../../../../components/molecules/InputGroup'
import { Modal } from '../../../../components/organisms/Modal'
import { ReportCategories, ReportContext } from '../../../../contexts/ReportContext'
import { format } from '../../../../utils/formatter'
import { Card, CardBody, CardFooter, CardHeader, InfoButton } from './styles'

type GrossIncomeCard = {
  category: ReportCategories
  title: string
  subtitle: string
  withoutInvoiceAmount: number
  withInvoiceAmount: number
  subtotal: number
  help: () => ReactElement
}

export function GrossIncomeCard({
  category,
  title,
  subtitle,
  withoutInvoiceAmount,
  withInvoiceAmount,
  subtotal,
  help,
}: GrossIncomeCard) {
  const { handleAmountChange } = useContext(ReportContext)

  return (
    <Box>
      <Card>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <InfoButton>
              <FontAwesomeIcon icon={faCircleInfo} fontSize={24} />
            </InfoButton>
          </Dialog.Trigger>

          <Modal title="Precisando de ajuda?">{help()}</Modal>
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
        </CardBody>

        <CardFooter>
          <p>Total das receitas</p>
          <span>{format.price(subtotal / 100)}</span>
        </CardFooter>
      </Card>
    </Box>
  )
}
