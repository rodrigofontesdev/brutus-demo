import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SelectGroup } from '../../components/molecules/SelectGroup'
import { Total } from '../../components/molecules/Total'
import { ReportContext } from '../../contexts/ReportContext'
import { MONTHS, YEARS } from '../../utils/data'
import { CompleteProfileModal } from './components/CompleteProfileModal'
import { GrossIncomeCard } from './components/GrossIncomeCard'
import { IndustryHelp } from './components/Help/IndustryHelp'
import { ServicesHelp } from './components/Help/ServicesHelp'
import { TradeHelp } from './components/Help/TradeHelp'
import { Cards, FilterByPeriod } from './styles'

type Period = {
  month: number
  year: number
}

type SelectOption = {
  value: string
  label: string
}

export function NewReport() {
  const { grossIncome, total } = useContext(ReportContext)
  const navigate = useNavigate()

  const [period, setPeriod] = useState<Period>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  })

  async function handleCreateReport() {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(navigate('/report/2/edit'))
      }, 1000)
    })
  }

  const availableMonths = () => {
    const selectedYear = period.year
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()

    if (selectedYear === currentYear && currentMonth > 0) {
      return MONTHS.filter((_, index) => index < currentMonth).reverse()
    }

    return [...MONTHS].reverse()
  }

  const availableYears = () => {
    const currentMonth = new Date().getMonth()
    return currentMonth === 0 ? YEARS.filter((_, index) => index > 0) : YEARS
  }

  const years = availableYears()
  const months = availableMonths()
  const isProfileCompleted = true

  return (
    <main>
      {!isProfileCompleted && <CompleteProfileModal />}

      <FilterByPeriod>
        <SelectGroup.Root>
          <SelectGroup.Label text="Período de apuração">
            <SelectGroup.Control
              id="period[month]"
              placeholder="Selecionar mês"
              options={months}
              defaultValue={months[0]}
              isSearchable={false}
              onChange={(option) =>
                setPeriod({ ...period, month: Number((option as SelectOption).value) })
              }
            />
          </SelectGroup.Label>
          <SelectGroup.Control
            id="period[year]"
            placeholder="Selecionar ano"
            options={years}
            defaultValue={years[0]}
            isSearchable={false}
            onChange={(option) =>
              setPeriod({ ...period, year: Number((option as SelectOption).value) })
            }
          />
        </SelectGroup.Root>
      </FilterByPeriod>

      <Cards>
        <GrossIncomeCard
          category="trade"
          title="Comércio"
          subtitle="Revenda de mercadorias"
          withInvoiceAmount={grossIncome.trade.withInvoice}
          withoutInvoiceAmount={grossIncome.trade.withoutInvoice}
          subtotal={grossIncome.trade.withInvoice + grossIncome.trade.withoutInvoice}
          help={() => <TradeHelp />}
        />

        <GrossIncomeCard
          category="industry"
          title="Indústria"
          subtitle="Venda de produtos industrializados"
          withInvoiceAmount={grossIncome.industry.withInvoice}
          withoutInvoiceAmount={grossIncome.industry.withoutInvoice}
          subtotal={grossIncome.industry.withInvoice + grossIncome.industry.withoutInvoice}
          help={() => <IndustryHelp />}
        />

        <GrossIncomeCard
          category="services"
          title="Serviços"
          subtitle="Prestação de serviços"
          withInvoiceAmount={grossIncome.services.withInvoice}
          withoutInvoiceAmount={grossIncome.services.withoutInvoice}
          subtotal={grossIncome.services.withInvoice + grossIncome.services.withoutInvoice}
          help={() => <ServicesHelp />}
        />
      </Cards>

      <Total amount={total} onSave={() => handleCreateReport()} />
    </main>
  )
}
