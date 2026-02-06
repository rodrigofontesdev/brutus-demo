import { faMinus, faPlus, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '@components/atoms/Box'
import { Button } from '@components/atoms/Button'
import { InputGroup } from '@components/molecules/InputGroup'
import { Total } from '@components/molecules/Total'
import { ReportItem } from './components/ReportItem'
import {
  Entrepreneur,
  EntrepreneurForm,
  EntrepreneurFormInner,
  Main,
  Report,
  ReportBody,
  ReportHeading,
  ReportPeriod,
} from './styles'
import { useEditReport } from '@hooks/useEditReport'
import { usePrintReport } from '@hooks/usePrintReport'
import { format } from '@utils/formatter'
import { useParams } from 'react-router-dom'

export function EditReport() {
  const { id } = useParams()
  const {
    authenticatedUser,
    grossIncome,
    total,
    handleAmountChange,
    handleUpdateReport,
    periodFormatted,
    dateFormatted,
    stateName,
    showPrintReportButton,
    showReportPeriodData,
    handleToggleReportPeriodData,
  } = useEditReport()
  const { handlePrintReport } = usePrintReport()

  return (
    <Main>
      <Entrepreneur>
        <ReportPeriod>
          <h1>
            Período de apuração <span>{periodFormatted}</span>
          </h1>

          <button onClick={handleToggleReportPeriodData}>
            {showReportPeriodData ? (
              <>
                <FontAwesomeIcon
                  icon={faMinus}
                  fontSize="0.875rem"
                />
                Ocultar detalhes
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faPlus}
                  fontSize="0.875rem"
                />
                Mostrar detalhes
              </>
            )}
          </button>
        </ReportPeriod>

        <EntrepreneurForm $isHidden={!showReportPeriodData}>
          <EntrepreneurFormInner>
            <InputGroup.Root>
              <InputGroup.Label
                inputId="businessCnpj"
                text="CNPJ"
              />
              <InputGroup.Control
                id="businessCnpj"
                value={format.cnpj(authenticatedUser?.data.cnpj ?? '')}
                readOnly
              />
            </InputGroup.Root>

            <InputGroup.Root>
              <InputGroup.Label
                inputId="fullName"
                text="Empreendedor individual"
              />
              <InputGroup.Control
                id="fullName"
                value={authenticatedUser?.data.full_name}
                readOnly
              />
            </InputGroup.Root>

            <InputGroup.Root>
              <InputGroup.Label
                inputId="address"
                text="Local"
              />
              <InputGroup.Control
                id="address"
                value={`${authenticatedUser?.data.city} - ${stateName}`}
                readOnly
              />
            </InputGroup.Root>

            <InputGroup.Root>
              <InputGroup.Label
                inputId="date"
                text="Data"
              />
              <InputGroup.Control
                id="date"
                value={dateFormatted}
                readOnly
              />
            </InputGroup.Root>
          </EntrepreneurFormInner>
        </EntrepreneurForm>
      </Entrepreneur>

      <Box>
        <Report>
          <ReportHeading>
            <h2>Editar Relatório</h2>

            {showPrintReportButton && (
              <Button
                icon={faPrint}
                aria-label="Imprimir relatório"
                onClick={() => handlePrintReport(id!)}
              />
            )}
          </ReportHeading>

          <ReportBody>
            <ReportItem
              category="trade"
              title="Comércio"
              withInvoiceAmount={grossIncome.trade.withInvoice}
              withoutInvoiceAmount={grossIncome.trade.withoutInvoice}
              subtotal={grossIncome.trade.withInvoice + grossIncome.trade.withoutInvoice}
              onAmountChange={handleAmountChange}
            />

            <ReportItem
              category="industry"
              title="Indústria"
              withInvoiceAmount={grossIncome.industry.withInvoice}
              withoutInvoiceAmount={grossIncome.industry.withoutInvoice}
              subtotal={grossIncome.industry.withInvoice + grossIncome.industry.withoutInvoice}
              onAmountChange={handleAmountChange}
            />

            <ReportItem
              category="services"
              title="Serviços"
              withInvoiceAmount={grossIncome.services.withInvoice}
              withoutInvoiceAmount={grossIncome.services.withoutInvoice}
              subtotal={grossIncome.services.withInvoice + grossIncome.services.withoutInvoice}
              onAmountChange={handleAmountChange}
            />
          </ReportBody>

          <Total
            amount={total}
            onSave={handleUpdateReport}
          />
        </Report>
      </Box>
    </Main>
  )
}
