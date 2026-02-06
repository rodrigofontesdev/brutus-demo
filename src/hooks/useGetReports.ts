import { useEffect, useRef, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { ReportService } from '@services/ReportService'
import { Report } from '@models/Report'

export type FilterByYearOption = {
  value: string
  label: string
}

export function useGetReports() {
  const [currentYear, setCurrentYear] = useState<number | null>(null)
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  const getReportsRequest = useInfiniteQuery({
    queryKey: ['reports', currentYear],
    queryFn: ({ pageParam }: { pageParam?: string }) =>
      ReportService.getAll({
        year: currentYear ?? undefined,
        cursor: pageParam,
      }),
    getNextPageParam: ({ meta }) => meta.next_cursor ?? undefined,
    initialPageParam: undefined,
  })

  const { hasNextPage, isFetchingNextPage, isPending, fetchNextPage } = getReportsRequest

  const reports = getReportsRequest.data?.pages.flatMap((page) => page.data) ?? []
  const reportsGroupedByYear = reports.reduce<Map<string, Report[]>>((acc, report) => {
    const year = report.period.slice(0, 4)
    const reportsByYear = acc.get(year)

    if (reportsByYear) {
      reportsByYear.push(report)
    } else {
      acc.set(year, [report])
    }

    return acc
  }, new Map())

  const handleChangeYear = (option: FilterByYearOption | null) => {
    setCurrentYear(option ? Number(option.value) : null)
  }

  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { rootMargin: '100px' },
    )

    observer.observe(loadMoreRef.current)

    return () => observer.disconnect()
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return {
    reportsGroupedByYear,
    currentYear,
    handleChangeYear,
    loadMoreRef,
    isFetchingNextPage,
    isFetchingReports: isPending,
  }
}
