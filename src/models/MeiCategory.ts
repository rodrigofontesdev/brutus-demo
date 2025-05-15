export enum Mei {
  GERAL = 'MEI-GERAL',
  TAC = 'MEI-TAC',
}

export type MeiCategory = {
  id: string
  user: string
  type: Mei
  creation_date: string
  table_a_excluded_after_032022: boolean
}
