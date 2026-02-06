import { queryClient } from '@services/react-query'
import { GetReportsResponse, ReportService } from '@services/ReportService'
import { InfiniteData, useMutation } from '@tanstack/react-query'
import { toastify } from './useToastify'
import { Report } from '@models/Report'

type UseDeleteReportProps = {
  report: Report
  onfinish: VoidFunction
}

export function useDeleteReport({ report, onfinish }: UseDeleteReportProps) {
  const removeFromCache = (queryKey: unknown[]) => {
    queryClient.setQueryData<InfiniteData<GetReportsResponse>>(queryKey, (old) => {
      if (!old) return old

      return {
        ...old,
        pages: old.pages.map((page) => ({
          ...page,
          data: page.data.filter((item) => item.id !== report.id),
        })),
      }
    })
  }

  const deleteReportRequest = useMutation({
    mutationFn: ReportService.delete,
    onSuccess() {
      const year = new Date(report.period).getFullYear()

      removeFromCache(['reports', null])
      removeFromCache(['reports', year])
      toastify('O relatório foi removido com sucesso.', 'success')
    },
    onError({ response }) {
      const message =
        response?.data.type === 'INVALID_REQUEST_ERROR'
          ? response.data.errors?.at(0)
          : response?.data.message

      toastify(message ?? 'Ocorreu um erro desconhecido.', 'error')
    },
    onSettled() {
      onfinish()
    },
  })

  const handleDeleteReport = () => deleteReportRequest.mutate(report.id)

  return { handleDeleteReport }
}
