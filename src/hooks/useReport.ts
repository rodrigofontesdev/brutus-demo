import { useState } from 'react'

type AmountType = {
  withInvoice: number
  withoutInvoice: number
}

export type ReportCategories = 'trade' | 'industry' | 'services'

export type MonthlyGrossIncome = {
  trade: AmountType
  industry: AmountType
  services: AmountType
}

export type GrossIncomeCategory = {
  category: ReportCategories
  amount: number
  invoice?: boolean
}

export function useReport(initialValues?: MonthlyGrossIncome) {
  const [grossIncome, setGrossIncome] = useState<MonthlyGrossIncome>(
    initialValues ?? {
      trade: { withInvoice: 0, withoutInvoice: 0 },
      industry: { withInvoice: 0, withoutInvoice: 0 },
      services: { withInvoice: 0, withoutInvoice: 0 },
    },
  )

  function handleAmountChange({ category, amount, invoice = false }: GrossIncomeCategory) {
    setGrossIncome((current) => {
      if (category === 'trade') {
        return {
          ...current,
          trade: {
            withInvoice: invoice ? amount : current.trade.withInvoice,
            withoutInvoice: !invoice ? amount : current.trade.withoutInvoice,
          },
        }
      }

      if (category === 'industry') {
        return {
          ...current,
          industry: {
            withInvoice: invoice ? amount : current.industry.withInvoice,
            withoutInvoice: !invoice ? amount : current.industry.withoutInvoice,
          },
        }
      }

      return {
        ...current,
        services: {
          withInvoice: invoice ? amount : current.services.withInvoice,
          withoutInvoice: !invoice ? amount : current.services.withoutInvoice,
        },
      }
    })
  }

  const total = Object.values(grossIncome).reduce((acc, amount) => {
    acc += amount.withoutInvoice + amount.withInvoice
    return acc
  }, 0)

  return { grossIncome, total, handleAmountChange }
}
