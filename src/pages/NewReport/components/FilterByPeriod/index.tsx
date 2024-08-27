import { SelectGroup } from '../../../../components/molecules/SelectGroup'
import { useFilter } from '../../../../hooks/useFilter'
import { FilterByPeriodStyle } from './styles'

type SelectOption = {
  value: string
  label: string
}

export function FilterByPeriod() {
  const { months, years, onChangeMonth, onChangeYear } = useFilter()

  return (
    <FilterByPeriodStyle>
      <SelectGroup.Root>
        <SelectGroup.Label inputId="period[month]" text="Período de apuração" />
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
