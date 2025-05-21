/* eslint-disable camelcase */
import { Total } from '@components/molecules/Total'
import { ReportContext } from '@contexts/ReportContext'
import { useAuth } from '@hooks/useAuth'
import { useCreateReport } from '@hooks/useCreateReport'
import { useFilter } from '@hooks/useFilter'
import { useViewport } from '@hooks/useViewport'
import { useContext, useState } from 'react'
import { CompleteProfileModal } from './components/CompleteProfileModal'
import { FilterByPeriod } from './components/FilterByPeriod'
import { GrossIncomeCard } from './components/GrossIncomeCard'
import { IndustryHelp } from './components/Help/IndustryHelp'
import { ServicesHelp } from './components/Help/ServicesHelp'
import { TradeHelp } from './components/Help/TradeHelp'
import { Progress } from './components/Progress'
import { Cards, Main, TotalWrapper } from './styles'

export function NewReport() {
  const { checkViewport } = useViewport()
  const { authenticatedUser } = useAuth()
  const { grossIncome, total } = useContext(ReportContext)
  const { reportingPeriod, months, years, onChangeMonth, onChangeYear } = useFilter()
  const { trade, industry, services } = grossIncome
  const { handleCreateReport } = useCreateReport({
    tradeWithInvoice: trade.withInvoice,
    tradeWithoutInvoice: trade.withoutInvoice,
    industryWithInvoice: industry.withInvoice,
    industryWithoutInvoice: industry.withoutInvoice,
    servicesWithInvoice: services.withInvoice,
    servicesWithoutInvoice: services.withoutInvoice,
    period: new Date(reportingPeriod.year, reportingPeriod.month),
  })
  const [isProfileIncomplete] = useState(() => {
    if (!authenticatedUser) return false

    const { secret_word, city, state, opening_date } = authenticatedUser.data

    return [secret_word, city, state, opening_date].some((field) => field === null)
  })

  return (
    <Main>
      {isProfileIncomplete && <CompleteProfileModal />}

      <FilterByPeriod
        months={months}
        years={years}
        onChangeMonth={onChangeMonth}
        onChangeYear={onChangeYear}
      />

      {(checkViewport('mobile') || checkViewport('tablet')) && <Progress />}

      <Cards>
        <GrossIncomeCard
          category="trade"
          title="Comércio"
          subtitle="Revenda de mercadorias"
          withInvoiceAmount={grossIncome.trade.withInvoice}
          withoutInvoiceAmount={grossIncome.trade.withoutInvoice}
          subtotal={grossIncome.trade.withInvoice + grossIncome.trade.withoutInvoice}
          help={<TradeHelp />}
        />

        <GrossIncomeCard
          category="industry"
          title="Indústria"
          subtitle="Venda de produtos industrializados"
          withInvoiceAmount={grossIncome.industry.withInvoice}
          withoutInvoiceAmount={grossIncome.industry.withoutInvoice}
          subtotal={grossIncome.industry.withInvoice + grossIncome.industry.withoutInvoice}
          help={<IndustryHelp />}
        />

        <GrossIncomeCard
          category="services"
          title="Serviços"
          subtitle="Prestação de serviços"
          withInvoiceAmount={grossIncome.services.withInvoice}
          withoutInvoiceAmount={grossIncome.services.withoutInvoice}
          subtotal={grossIncome.services.withInvoice + grossIncome.services.withoutInvoice}
          help={<ServicesHelp />}
        />
      </Cards>

      <TotalWrapper>
        <Total
          amount={total}
          onSave={handleCreateReport}
        />
      </TotalWrapper>
    </Main>
  )
}
