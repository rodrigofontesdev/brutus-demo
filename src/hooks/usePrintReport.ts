import { createElement, useState, type ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { pdf, type DocumentProps } from '@react-pdf/renderer'
import { ReportService } from '@services/ReportService'
import { queryClient } from '@services/react-query'
import { STATES } from '@utils/data'
import { useAuth } from './useAuth'
import { toastify } from './useToastify'
import { ReportPdfTemplate } from '@templates/ReportPdfTemplate'

export function usePrintReport() {
  const { id } = useParams()
  const { authenticatedUser } = useAuth()
  const [isPrinting, setIsPrinting] = useState(false)
  const state = STATES.find(({ value }) => value === authenticatedUser?.data.state)?.label

  const handlePrintReport = async () => {
    if (!id || isPrinting) return

    try {
      setIsPrinting(true)

      const getReportRequest = await queryClient.ensureQueryData({
        queryKey: ['report', id],
        queryFn: () => ReportService.get(id),
      })
      const report = getReportRequest

      const pdfDocument = createElement(ReportPdfTemplate, {
        cnpj: authenticatedUser?.data.cnpj ?? '',
        name: authenticatedUser?.data.full_name ?? '',
        city: authenticatedUser?.data.city ?? '',
        state: state ?? '',
        period: report.period,
        tradeWithInvoice: report.trade_with_invoice / 100,
        tradeWithoutInvoice: report.trade_without_invoice / 100,
        industryWithInvoice: report.industry_with_invoice / 100,
        industryWithoutInvoice: report.industry_without_invoice / 100,
        servicesWithInvoice: report.services_with_invoice / 100,
        servicesWithoutInvoice: report.services_without_invoice / 100,
      })

      const blob = await pdf(pdfDocument as ReactElement<DocumentProps>).toBlob()
      const url = URL.createObjectURL(blob)
      const anchor = window.document.createElement('a')
      anchor.href = url
      anchor.download = `${report.period}-relatorio-mensal-das-receitas-brutas.pdf`
      anchor.click()
      setTimeout(() => URL.revokeObjectURL(url), 0)
    } catch {
      toastify('Ocorreu um erro ao gerar o relatório para o período.', 'error')
    } finally {
      setIsPrinting(false)
    }
  }

  return { handlePrintReport, isPrinting }
}
