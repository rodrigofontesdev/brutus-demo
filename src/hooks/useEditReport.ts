import { toastify } from './useToastify'
import { useLoaderData, useParams } from 'react-router-dom'
import { STATES } from '@utils/data'
import { useAuth } from './useAuth'
import { useViewport } from './useViewport'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { ReportService, UpdateReportBody } from '@services/ReportService'
import { Report } from '@models/Report'
import { useReport } from './useReport'
import { format } from '@utils/formatter'
import { queryClient } from '@services/react-query'

export function useEditReport() {
  const { authenticatedUser } = useAuth()
  const { id } = useParams()
  const { report } = useLoaderData<{ report: Report }>()
  const { grossIncome, total, handleAmountChange } = useReport({
    trade: {
      withInvoice: report.trade_with_invoice,
      withoutInvoice: report.trade_without_invoice,
    },
    industry: {
      withInvoice: report.industry_with_invoice,
      withoutInvoice: report.industry_without_invoice,
    },
    services: {
      withInvoice: report.services_with_invoice,
      withoutInvoice: report.services_without_invoice,
    },
  })
  const { checkViewport } = useViewport()
  const [showReportPeriodData, setShowReportPeriodData] = useState(() =>
    checkViewport('mobile') ? false : true,
  )

  const updateReportRequest = useMutation({
    mutationFn: (data: UpdateReportBody) => ReportService.update(id!, data),
    onSuccess(data) {
      queryClient.setQueryData(['report', id], data)
      toastify('O relatório foi alterado com sucesso.', 'success')
    },
    onError({ response }) {
      const message =
        response?.data.type === 'INVALID_REQUEST_ERROR'
          ? response.data.errors?.at(0)
          : response?.data.message

      toastify(message ?? 'Ocorreu um erro desconhecido.', 'error')
    },
  })

  async function handleUpdateReport() {
    await updateReportRequest.mutateAsync({
      tradeWithInvoice: grossIncome.trade.withInvoice,
      tradeWithoutInvoice: grossIncome.trade.withoutInvoice,
      industryWithInvoice: grossIncome.industry.withInvoice,
      industryWithoutInvoice: grossIncome.industry.withoutInvoice,
      servicesWithInvoice: grossIncome.services.withInvoice,
      servicesWithoutInvoice: grossIncome.services.withoutInvoice,
    })
  }

  const periodFormatted = format.period(report.period)
  const dateFormatted = format.date(report.period)
  const stateName = STATES.find((s) => s.value === authenticatedUser?.data.state)?.label
  const showPrintReportButton =
    checkViewport('tablet') || checkViewport('small-desktop') || checkViewport('desktop')
  const handleToggleReportPeriodData = () => setShowReportPeriodData((prev) => !prev)

  return {
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
  }
}
