/* eslint-disable camelcase */
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons/faCloudArrowDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@components/atoms/Box'
import { ConfirmReportRemoval } from '../ConfirmReportRemoval'
import { Modal } from '../Modal'
import { Card, Title } from './styles'
import { format } from '@utils/formatter'
import { Report } from '@models/Report'
import { usePrintReport } from '@hooks/usePrintReport'
import { useDeleteReport } from '@hooks/useDeleteReport'

type ReportCardProps = {
  report: Report
}

export function ReportCard({ report }: ReportCardProps) {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const { handlePrintReport } = usePrintReport()
  const {
    id,
    period,
    trade_with_invoice,
    trade_without_invoice,
    industry_with_invoice,
    industry_without_invoice,
    services_with_invoice,
    services_without_invoice,
  } = report
  const total =
    trade_with_invoice +
    trade_without_invoice +
    industry_with_invoice +
    industry_without_invoice +
    services_with_invoice +
    services_without_invoice
  const periodFormatted = format.period(period, ' de ')

  const onCancel = () => setIsConfirmModalOpen(false)

  const { handleDeleteReport } = useDeleteReport({
    report,
    onfinish: onCancel,
  })

  return (
    <Box>
      <Card>
        <Title>
          <h3>{format.period(period)}</h3>
          <p>{format.price(total / 100)}</p>
        </Title>

        <Link
          to={`/relatorio/${id}`}
          role="button"
          aria-label={`Ver relatório de ${periodFormatted}`}
        >
          <FontAwesomeIcon
            icon={faEye}
            fontSize="1.5rem"
          />
        </Link>

        <button
          type="button"
          aria-label={`Baixar o relatório de ${periodFormatted}`}
          onClick={() => handlePrintReport(id)}
        >
          <FontAwesomeIcon
            icon={faCloudArrowDown}
            fontSize="1.5rem"
          />
        </button>

        <Dialog.Root
          open={isConfirmModalOpen}
          onOpenChange={setIsConfirmModalOpen}
        >
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label={`Excluir o relatório de ${periodFormatted}`}
            >
              <FontAwesomeIcon
                icon={faTrashAlt}
                fontSize="1.5rem"
              />
            </button>
          </Dialog.Trigger>

          <Modal title="Excluir relatório">
            <ConfirmReportRemoval
              reportName={periodFormatted}
              onConfirm={handleDeleteReport}
              onCancel={onCancel}
            />
          </Modal>
        </Dialog.Root>
      </Card>
    </Box>
  )
}
