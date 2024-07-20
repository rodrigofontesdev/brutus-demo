import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { Box } from '../../components/atoms/Box'
import { Button } from '../../components/atoms/Button'
import { InputGroup } from '../../components/molecules/InputGroup'
import { Total } from '../../components/molecules/Total'
import { ReportContext } from '../../contexts/ReportContext'
import { toastify } from '../../hooks/useToastify'
import { ReportItem } from './components/ReportItem'
import { Entrepreneur, MainStyle, Report, ReportBody, ReportHeading } from './styles'

export function EditReport() {
  const { grossIncome, total } = useContext(ReportContext)

  async function handleUpdateReport() {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          toastify('Relatório atualizado com sucesso.', 'success', {
            position: 'top-center',
          })
        )
      }, 1000)
    })
  }

  return (
    <MainStyle>
      <Entrepreneur>
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
      </Entrepreneur>

      <Box>
        <Report>
          <ReportHeading>
            <h2>Editar Relatório</h2>

            <Button icon={faPrint} aria-label="Imprimir relatório" />
          </ReportHeading>

          <ReportBody>
            <ReportItem
              category="trade"
              title="Comércio"
              withInvoiceAmount={grossIncome.trade.withInvoice}
              withoutInvoiceAmount={grossIncome.trade.withoutInvoice}
              subtotal={grossIncome.trade.withInvoice + grossIncome.trade.withoutInvoice}
            />

            <ReportItem
              category="industry"
              title="Indústria"
              withInvoiceAmount={grossIncome.industry.withInvoice}
              withoutInvoiceAmount={grossIncome.industry.withoutInvoice}
              subtotal={grossIncome.industry.withInvoice + grossIncome.industry.withoutInvoice}
            />

            <ReportItem
              category="services"
              title="Serviços"
              withInvoiceAmount={grossIncome.services.withInvoice}
              withoutInvoiceAmount={grossIncome.services.withoutInvoice}
              subtotal={grossIncome.services.withInvoice + grossIncome.services.withoutInvoice}
            />
          </ReportBody>

          <Total amount={total} onSave={() => handleUpdateReport()} />
        </Report>
      </Box>
    </MainStyle>
  )
}
