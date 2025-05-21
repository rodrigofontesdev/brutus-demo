import { ReportService } from '@services/ReportService'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toastify } from './useToastify'

type CreateReportProps = {
  tradeWithInvoice: number
  tradeWithoutInvoice: number
  industryWithInvoice: number
  industryWithoutInvoice: number
  servicesWithInvoice: number
  servicesWithoutInvoice: number
  period: Date
}

export function useCreateReport(props: CreateReportProps) {
  const navigate = useNavigate()
  const createReportRequest = useMutation({
    mutationFn: ReportService.create,
    onSuccess(data) {
      navigate(`/relatorio/${data.id}`, { replace: true })
      toastify('O relatório foi criado com sucesso.', 'success')
    },
    onError({ response }) {
      const message =
        response?.data.type === 'INVALID_REQUEST_ERROR'
          ? response.data.errors?.at(0)
          : response?.data.message

      toastify(message ?? 'Ocorreu um erro desconhecido.', 'error')
    },
  })

  async function handleCreateReport() {
    const {
      tradeWithInvoice,
      tradeWithoutInvoice,
      industryWithInvoice,
      industryWithoutInvoice,
      servicesWithInvoice,
      servicesWithoutInvoice,
      period,
    } = props

    const year = period.getFullYear()
    const month = String(period.getMonth()).padStart(2, '0')
    const day = String(period.getDate()).padStart(2, '0')
    const formattedPeriod = `${year}-${month}-${day}`

    await createReportRequest.mutateAsync({
      tradeWithInvoice,
      tradeWithoutInvoice,
      industryWithInvoice,
      industryWithoutInvoice,
      servicesWithInvoice,
      servicesWithoutInvoice,
      period: formattedPeriod,
    })
  }

  return { handleCreateReport }
}
