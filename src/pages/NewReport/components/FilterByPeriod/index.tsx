import { SelectGroup } from '@components/molecules/SelectGroup'
import { FilterByPeriodStyle } from './styles'

type SelectOption = {
  value: string
  label: string
}

type FilterByPeriodProps = {
  months: SelectOption[]
  years: SelectOption[]
  onChangeMonth: (month: number) => void
  onChangeYear: (year: number) => void
}

export function FilterByPeriod({
  months,
  years,
  onChangeMonth,
  onChangeYear,
}: FilterByPeriodProps) {
  return (
    <FilterByPeriodStyle>
      <SelectGroup.Root>
        <SelectGroup.Label
          inputId="period[month]"
          text="Período de apuração"
        />
        <SelectGroup.Control
          id="period[month]"
          placeholder="Selecionar mês"
          options={months}
          defaultValue={months[0]}
          isSearchable={false}
          onChange={(option) => onChangeMonth(Number((option as SelectOption).value))}
        />
        <SelectGroup.Control
          id="period[year]"
          placeholder="Selecionar ano"
          options={years}
          defaultValue={years[0]}
          isSearchable={false}
          onChange={(option) => onChangeYear(Number((option as SelectOption).value))}
        />
      </SelectGroup.Root>
    </FilterByPeriodStyle>
  )
}
