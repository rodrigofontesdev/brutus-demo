import { faFloppyDisk, faPrint } from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent, useState } from 'react'
import { Box } from '../../components/atoms/Box'
import { Button } from '../../components/atoms/Button'
import { InputGroup } from '../../components/molecules/InputGroup'
import { format } from '../../utils/formatter'
import {
  EntrepreneurInfo,
  MainStyle,
  Report,
  ReportBody,
  ReportBodyItem,
  ReportHeading,
  ReportTotal,
  Total,
  TotalHeading,
} from './styles'

type Period = {
  month: number
  year: number
}

type MonthlyGrossRevenue = {
  tradeWithoutInvoice?: number
  tradeWithInvoice?: number
  industryWithoutInvoice?: number
  industryWithInvoice?: number
  servicesWithoutInvoice?: number
  servicesWithInvoice?: number
}

export function EditReport() {
  const [grossRevenue, setGrossRevenue] = useState<MonthlyGrossRevenue>({
    tradeWithoutInvoice: 0,
    tradeWithInvoice: 0,
    industryWithoutInvoice: 0,
    industryWithInvoice: 0,
    servicesWithoutInvoice: 0,
    servicesWithInvoice: 0,
  })
  const total = Object.values(grossRevenue).reduce((acc, amount) => {
    acc += amount

    return acc
  }, 0)

  function handleAmountChange({ ...data }: MonthlyGrossRevenue) {
    const updatedGrossRevenue = {
      ...grossRevenue,
      ...data,
    }

    setGrossRevenue(updatedGrossRevenue)
  }

  return (
    <MainStyle>
      <EntrepreneurInfo>
        <h1>
          Período de apuração <span>Junho/2024</span>
        </h1>

        <InputGroup.Root>
          <InputGroup.Label inputId="businessCnpj" text="CNPJ" />
          <InputGroup.Control id="businessCnpj" value="48.330.554/0001-37" readOnly />
        </InputGroup.Root>

        <InputGroup.Root>
          <InputGroup.Label inputId="fullName" text="Empreendedor individual" />
          <InputGroup.Control id="fullName" value="Rodrigo Fontes Santos" readOnly />
        </InputGroup.Root>

        <InputGroup.Root>
          <InputGroup.Label inputId="address" text="Local" />
          <InputGroup.Control id="address" value="Ribeirão Pires - São Paulo" readOnly />
        </InputGroup.Root>

        <InputGroup.Root>
          <InputGroup.Label inputId="date" text="Data" />
          <InputGroup.Control id="date" value="20/07/2024" readOnly />
        </InputGroup.Root>
      </EntrepreneurInfo>

      <Box>
        <Report>
          <ReportHeading>
            <h2>Editar Relatório</h2>
            <Button icon={faPrint} aria-label="Imprimir relatório" />
          </ReportHeading>

          <ReportBody>
            <ReportBodyItem>
              <h3>Comércio</h3>

              <InputGroup.Root>
                <InputGroup.Label inputId="tradeWithoutInvoice" text="Sem nota fiscal" />
                <InputGroup.MaskControl
                  mask="R$ amount"
                  blocks={{
                    amount: {
                      mask: Number,
                      scale: 2,
                      thousandsSeparator: '.',
                      padFractionalZeros: true,
                    },
                  }}
                  id="tradeWithoutInvoice"
                  defaultValue={format.price(grossRevenue.tradeWithoutInvoice!)}
                  onChange={(amount: ChangeEvent<HTMLInputElement>) => {
                    handleAmountChange({
                      tradeWithoutInvoice: Number(amount.target.value.replace(/\D/g, '')) / 100,
                    })
                  }}
                />
              </InputGroup.Root>

              <InputGroup.Root>
                <InputGroup.Label inputId="tradeWithInvoice" text="Com nota fiscal" />
                <InputGroup.MaskControl
                  mask="R$ amount"
                  blocks={{
                    amount: {
                      mask: Number,
                      scale: 2,
                      thousandsSeparator: '.',
                      padFractionalZeros: true,
                    },
                  }}
                  id="tradeWithInvoice"
                  defaultValue={format.price(grossRevenue.tradeWithInvoice!)}
                  onChange={(amount: ChangeEvent<HTMLInputElement>) => {
                    handleAmountChange({
                      tradeWithInvoice: Number(amount.target.value.replace(/\D/g, '')) / 100,
                    })
                  }}
                />
              </InputGroup.Root>

              <InputGroup.Root>
                <InputGroup.Label text="Total das receitas">
                  <input
                    type="text"
                    name="tradeSubtotal"
                    value={format.price(
                      grossRevenue.tradeWithoutInvoice! + grossRevenue.tradeWithInvoice!
                    )}
                    readOnly
                  />
                </InputGroup.Label>
              </InputGroup.Root>
            </ReportBodyItem>

            <ReportBodyItem>
              <h3>Indústria</h3>

              <InputGroup.Root>
                <InputGroup.Label inputId="industryWithoutInvoice" text="Sem nota fiscal" />
                <InputGroup.MaskControl
                  mask="R$ amount"
                  blocks={{
                    amount: {
                      mask: Number,
                      scale: 2,
                      thousandsSeparator: '.',
                      padFractionalZeros: true,
                    },
                  }}
                  id="industryWithoutInvoice"
                  defaultValue={format.price(grossRevenue.industryWithoutInvoice!)}
                  onChange={(amount: ChangeEvent<HTMLInputElement>) => {
                    handleAmountChange({
                      industryWithoutInvoice: Number(amount.target.value.replace(/\D/g, '')) / 100,
                    })
                  }}
                />
              </InputGroup.Root>

              <InputGroup.Root>
                <InputGroup.Label inputId="industryWithInvoice" text="Com nota fiscal" />
                <InputGroup.MaskControl
                  mask="R$ amount"
                  blocks={{
                    amount: {
                      mask: Number,
                      scale: 2,
                      thousandsSeparator: '.',
                      padFractionalZeros: true,
                    },
                  }}
                  id="industryWithInvoice"
                  defaultValue={format.price(grossRevenue.industryWithInvoice!)}
                  onChange={(amount: ChangeEvent<HTMLInputElement>) => {
                    handleAmountChange({
                      industryWithInvoice: Number(amount.target.value.replace(/\D/g, '')) / 100,
                    })
                  }}
                />
              </InputGroup.Root>

              <InputGroup.Root>
                <InputGroup.Label text="Total das receitas">
                  <input
                    type="text"
                    name="industrySubtotal"
                    value={format.price(
                      grossRevenue.industryWithoutInvoice! + grossRevenue.industryWithInvoice!
                    )}
                    readOnly
                  />
                </InputGroup.Label>
              </InputGroup.Root>
            </ReportBodyItem>

            <ReportBodyItem>
              <h3>Serviços</h3>

              <InputGroup.Root>
                <InputGroup.Label inputId="servicesWithoutInvoice" text="Sem nota fiscal" />
                <InputGroup.MaskControl
                  mask="R$ amount"
                  blocks={{
                    amount: {
                      mask: Number,
                      scale: 2,
                      thousandsSeparator: '.',
                      padFractionalZeros: true,
                    },
                  }}
                  id="servicesWithoutInvoice"
                  defaultValue={format.price(grossRevenue.servicesWithoutInvoice!)}
                  onChange={(amount: ChangeEvent<HTMLInputElement>) => {
                    handleAmountChange({
                      servicesWithoutInvoice: Number(amount.target.value.replace(/\D/g, '')) / 100,
                    })
                  }}
                />
              </InputGroup.Root>

              <InputGroup.Root>
                <InputGroup.Label inputId="servicesWithInvoice" text="Com nota fiscal" />
                <InputGroup.MaskControl
                  mask="R$ amount"
                  blocks={{
                    amount: {
                      mask: Number,
                      scale: 2,
                      thousandsSeparator: '.',
                      padFractionalZeros: true,
                    },
                  }}
                  id="servicesWithInvoice"
                  defaultValue={format.price(grossRevenue.servicesWithInvoice!)}
                  onChange={(amount: ChangeEvent<HTMLInputElement>) => {
                    handleAmountChange({
                      servicesWithInvoice: Number(amount.target.value.replace(/\D/g, '')) / 100,
                    })
                  }}
                />
              </InputGroup.Root>

              <InputGroup.Root>
                <InputGroup.Label text="Total das receitas">
                  <input
                    type="text"
                    name="servicesSubtotal"
                    value={format.price(
                      grossRevenue.servicesWithoutInvoice! + grossRevenue.servicesWithInvoice!
                    )}
                    readOnly
                  />
                </InputGroup.Label>
              </InputGroup.Root>
            </ReportBodyItem>
          </ReportBody>

          <ReportTotal>
            <TotalHeading>
              <p>Total</p>
              <p>Receitas brutas no mês</p>
            </TotalHeading>
            <Total>
              <span>{format.price(total)}</span>
            </Total>
            <Button icon={faFloppyDisk} variant="success" aria-label="Salvar alterações" />
          </ReportTotal>
        </Report>
      </Box>
    </MainStyle>
  )
}
