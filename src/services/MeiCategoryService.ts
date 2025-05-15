/* eslint-disable camelcase */
import { Mei, MeiCategory } from '@models/MeiCategory'
import { api } from './axios'

type CreateMeiCategoryBody = {
  type: Mei
  creationDate: string
  tableAExcludedAfter032022?: boolean
}

export class MeiCategoryService {
  static async create({ type, creationDate, tableAExcludedAfter032022 }: CreateMeiCategoryBody) {
    return await api.post<MeiCategory>('/mei-categories', {
      type,
      creation_date: creationDate,
      table_a_excluded_after_032022: tableAExcludedAfter032022,
    })
  }
}
