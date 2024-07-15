import { faCircleInfo, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Dialog from '@radix-ui/react-dialog'
import { ChangeEvent, useState } from 'react'
import { Box } from '../../components/atoms/Box'
import { Button } from '../../components/atoms/Button'
import { InputGroup } from '../../components/molecules/InputGroup'
import { SelectGroup } from '../../components/molecules/SelectGroup'
import { Modal } from '../../components/organisms/Modal'
import { MonthInputType, MONTHS, YearInputType, YEARS } from '../../utils/data'
import { format } from '../../utils/formatter'
import { IndustryHelp } from './components/IndustryHelp'
import { ServicesHelp } from './components/ServicesHelp'
import { TradeHelp } from './components/TradeHelp'
import {
  CardBody,
  CardFooter,
  CardHeader,
  Cards,
  FilterByPeriod,
  GrossIncomeCard,
  InfoButton,
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

export function NewReport() {
  const [period, setPeriod] = useState<Period>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  })
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
    <main>
      <FilterByPeriod>
        <SelectGroup.Root>
          <SelectGroup.Label text="Período de apuração">
            <SelectGroup.Control
              id="period[month]"
              placeholder="Selecionar mês"
              options={MONTHS}
              defaultValue={MONTHS[new Date().getMonth() - 1]}
              isSearchable={false}
              onChange={(month: MonthInputType) => {
                setPeriod({ month: Number(month.value), year: period.year })
              }}
            />
          </SelectGroup.Label>
          <SelectGroup.Control
            id="period[year]"
            placeholder="Selecionar ano"
            options={YEARS}
            defaultValue={YEARS[0]}
            isSearchable={false}
            onChange={(year: YearInputType) => {
              setPeriod({ month: period.month, year: Number(year.value) })
            }}
          />
        </SelectGroup.Root>
      </FilterByPeriod>

      <Cards>
        <Box>
          <GrossIncomeCard>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <InfoButton>
                  <FontAwesomeIcon icon={faCircleInfo} fontSize={26} />
                </InfoButton>
              </Dialog.Trigger>

              <Modal title="Precisando de ajuda?">
                <TradeHelp />
              </Modal>
            </Dialog.Root>

            <CardHeader>
              <h2>Comércio</h2>
              <p>Revenda de mercadorias</p>
            </CardHeader>

            <CardBody>
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
            </CardBody>

            <CardFooter>
              <p>Total das receitas</p>
              <span>
                {format.price(grossRevenue.tradeWithoutInvoice! + grossRevenue.tradeWithInvoice!)}
              </span>
            </CardFooter>
          </GrossIncomeCard>
        </Box>

        <Box>
          <GrossIncomeCard>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <InfoButton>
                  <FontAwesomeIcon icon={faCircleInfo} fontSize={26} />
                </InfoButton>
              </Dialog.Trigger>

              <Modal title="Precisando de ajuda?">
                <IndustryHelp />
              </Modal>
            </Dialog.Root>

            <CardHeader>
              <h2>Indústria</h2>
              <p>Venda de produtos industrializados</p>
            </CardHeader>

            <CardBody>
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
            </CardBody>

            <CardFooter>
              <p>Total das receitas</p>
              <span>
                {format.price(
                  grossRevenue.industryWithoutInvoice! + grossRevenue.industryWithInvoice!
                )}
              </span>
            </CardFooter>
          </GrossIncomeCard>
        </Box>

        <Box>
          <GrossIncomeCard>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <InfoButton>
                  <FontAwesomeIcon icon={faCircleInfo} fontSize={26} />
                </InfoButton>
              </Dialog.Trigger>

              <Modal title="Precisando de ajuda?">
                <ServicesHelp />
              </Modal>
            </Dialog.Root>

            <CardHeader>
              <h2>Serviços</h2>
              <p>Prestação de serviços</p>
            </CardHeader>

            <CardBody>
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
            </CardBody>

            <CardFooter>
              <p>Total das receitas</p>
              <span>
                {format.price(
                  grossRevenue.servicesWithoutInvoice! + grossRevenue.servicesWithInvoice!
                )}
              </span>
            </CardFooter>
          </GrossIncomeCard>
        </Box>
      </Cards>

      <ReportTotal>
        <TotalHeading>
          <p>Total</p>
          <p>Receitas brutas no mês</p>
        </TotalHeading>
        <Total>
          <span>{format.price(total)}</span>
        </Total>
        <Button icon={faFloppyDisk} variant="success" aria-label="Salvar relatório" />
      </ReportTotal>
    </main>
  )
}
