import { MONTHS, YEARS } from '@utils/data'
import { useState } from 'react'

type ReportingPeriod = {
  month: number
  year: number
}

const currentMonthIndex = new Date().getMonth()
const currentYear = new Date().getFullYear()

export function useFilter() {
  const [reportingPeriod, setReportingPeriod] = useState<ReportingPeriod>({
    month: currentMonthIndex,
    year: currentYear,
  })

  const years = getAvailableYears()
  const months = getAvailableMonths(reportingPeriod.year)

  function onChangeMonth(month: number) {
    setReportingPeriod({ ...reportingPeriod, month })
  }

  function onChangeYear(year: number) {
    setReportingPeriod({ ...reportingPeriod, year })
  }

  return {
    reportingPeriod,
    months,
    years,
    onChangeMonth,
    onChangeYear,
  }
}

function getAvailableMonths(year: number) {
  const yearOfPeriod = year
  const isYearOfPeriodEqualsCurrentYear = yearOfPeriod === currentYear
  const isCurrentMonthDifferentFromJanuary = currentMonthIndex > 0

  if (isYearOfPeriodEqualsCurrentYear && isCurrentMonthDifferentFromJanuary) {
    const pastMonths = MONTHS.filter((_, index) => index < currentMonthIndex).reverse()

    return pastMonths
  }

  return [...MONTHS].reverse()
}

function getAvailableYears() {
  const isCurrentMonthJanuary = currentMonthIndex === 0
  const pastYears = YEARS.filter((_, index) => index > 0)

  return isCurrentMonthJanuary ? pastYears : YEARS
}
