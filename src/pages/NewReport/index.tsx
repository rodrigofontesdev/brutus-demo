import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Total } from '../../components/molecules/Total'
import { ReportContext } from '../../contexts/ReportContext'
import { useViewport } from '../../hooks/useViewport'
import { CompleteProfileModal } from './components/CompleteProfileModal'
import { FilterByPeriod } from './components/FilterByPeriod'
import { GrossIncomeCard } from './components/GrossIncomeCard'
import { IndustryHelp } from './components/Help/IndustryHelp'
import { ServicesHelp } from './components/Help/ServicesHelp'
import { TradeHelp } from './components/Help/TradeHelp'
import { Progress } from './components/Progress'
import { Cards, Main, TotalWrapper } from './styles'

export function NewReport() {
  const { grossIncome, total } = useContext(ReportContext)
  const { checkViewport } = useViewport()
  const navigate = useNavigate()
  const isProfileIncomplete = false

  async function handleCreateReport() {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(navigate('/relatorio/2', { replace: true }))
      }, 1000)
    })
  }

  return (
    <Main>
      {isProfileIncomplete && <CompleteProfileModal />}

      <FilterByPeriod />

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
          onSave={() => handleCreateReport()}
        />
      </TotalWrapper>
    </Main>
  )
}
