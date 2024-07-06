import { TitleWithSeparator } from '../../atoms/TitleWithSeparator'
import { SelectGroup } from '../../molecules/SelectGroup'
import { ReportCard } from '../ReportCard'
import { FilterByYear, HistoryStyle, ReportsByYear, ScrollableArea } from './styles'

const years = [
  {
    value: 2024,
    label: 2024,
  },
  {
    value: 2023,
    label: 2023,
  },
  {
    value: 2022,
    label: 2022,
  },
  {
    value: 2021,
    label: 2021,
  },
  {
    value: 2020,
    label: 2020,
  },
]

export function History() {
  return (
    <HistoryStyle>
      <FilterByYear>
        <SelectGroup.Root>
          <SelectGroup.Label inputId="filterByYear" text="Filtrar por ano" />
          <SelectGroup.Control
            id="filterByYear"
            placeholder="Todos anos"
            options={years}
            isSearchable={false}
            isClearable
          />
        </SelectGroup.Root>
      </FilterByYear>

      <ScrollableArea>
        <TitleWithSeparator>
          <h3>2024</h3>
        </TitleWithSeparator>

        <ReportsByYear>
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
        </ReportsByYear>

        <TitleWithSeparator>
          <h3>2023</h3>
        </TitleWithSeparator>

        <ReportsByYear>
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
        </ReportsByYear>
      </ScrollableArea>
    </HistoryStyle>
  )
}
