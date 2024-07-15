import { YEARS } from '../../../utils/data'
import { TitleWithSeparator } from '../../atoms/TitleWithSeparator'
import { SelectGroup } from '../../molecules/SelectGroup'
import { ReportCard } from '../ReportCard'
import { FilterByYear, HistoryStyle, ReportsByYear, ScrollableArea } from './styles'

export function History() {
  return (
    <HistoryStyle>
      <FilterByYear>
        <SelectGroup.Root>
          <SelectGroup.Label text="Filtrar por ano">
            <SelectGroup.Control
              id="filterByYear"
              placeholder="Todos anos"
              options={YEARS}
              isSearchable={false}
              isClearable
            />
          </SelectGroup.Label>
        </SelectGroup.Root>
      </FilterByYear>

      <ScrollableArea>
        <TitleWithSeparator>
          <h2>2024</h2>
        </TitleWithSeparator>

        <ReportsByYear>
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
        </ReportsByYear>

        <TitleWithSeparator>
          <h2>2023</h2>
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
