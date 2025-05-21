/* eslint-disable camelcase */
import { Report } from '@models/Report'
import { api } from './axios'

type CreateReportBody = {
  tradeWithInvoice: number
  tradeWithoutInvoice: number
  industryWithInvoice: number
  industryWithoutInvoice: number
  servicesWithInvoice: number
  servicesWithoutInvoice: number
  period: string
}

export class ReportService {
  static async create(body: CreateReportBody) {
    const {
      tradeWithInvoice,
      tradeWithoutInvoice,
      industryWithInvoice,
      industryWithoutInvoice,
      servicesWithInvoice,
      servicesWithoutInvoice,
      period,
    } = body

    const { data } = await api.post<Report>('/reports', {
      period,
      trade_with_invoice: tradeWithInvoice,
      trade_without_invoice: tradeWithoutInvoice,
      industry_with_invoice: industryWithInvoice,
      industry_without_invoice: industryWithoutInvoice,
      services_with_invoice: servicesWithInvoice,
      services_without_invoice: servicesWithoutInvoice,
    })

    return data
  }
}
