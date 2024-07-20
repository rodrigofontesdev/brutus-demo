import { createContext, ReactNode, useState } from 'react'

export type ReportCategories = 'trade' | 'industry' | 'services'

type AmountType = {
  withInvoice: number
  withoutInvoice: number
}

type GrossIncomeCategory = {
  category: ReportCategories
  amount: number
  invoice?: boolean
}

type MonthlyGrossIncome = {
  trade: AmountType
  industry: AmountType
  services: AmountType
}

type ReportContextProps = {
  grossIncome: MonthlyGrossIncome
  total: number
  handleAmountChange: ({ category, amount, invoice }: GrossIncomeCategory) => void
}

type ReportProvider = {
  children: ReactNode
}

export const ReportContext = createContext({} as ReportContextProps)

export function ReportProvider({ children }: ReportProvider) {
  const [grossIncome, setGrossIncome] = useState<MonthlyGrossIncome>({
    trade: {
      withInvoice: 0,
      withoutInvoice: 0,
    },
    industry: {
      withInvoice: 0,
      withoutInvoice: 0,
    },
    services: {
      withInvoice: 0,
      withoutInvoice: 0,
    },
  })

  function handleAmountChange({ category, amount, invoice = false }: GrossIncomeCategory) {
    if (category === 'trade') {
      setGrossIncome({
        ...grossIncome,
        trade: {
          withInvoice: invoice ? amount : grossIncome.trade.withInvoice,
          withoutInvoice: invoice ? grossIncome.trade.withoutInvoice : amount,
        },
      })
    }

    if (category === 'industry') {
      setGrossIncome({
        ...grossIncome,
        industry: {
          withInvoice: invoice ? amount : grossIncome.industry.withInvoice,
          withoutInvoice: invoice ? grossIncome.industry.withoutInvoice : amount,
        },
      })
    }

    if (category === 'services') {
      setGrossIncome({
        ...grossIncome,
        services: {
          withInvoice: invoice ? amount : grossIncome.services.withInvoice,
          withoutInvoice: invoice ? grossIncome.services.withoutInvoice : amount,
        },
      })
    }
  }

  const total = Object.values(grossIncome).reduce((acc, amount) => {
    acc += amount.withoutInvoice + amount.withInvoice

    return acc
  }, 0)

  return (
    <ReportContext.Provider value={{ grossIncome, total, handleAmountChange }}>
      {children}
    </ReportContext.Provider>
  )
}
