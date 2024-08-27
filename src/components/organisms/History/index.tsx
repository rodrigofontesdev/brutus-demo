import { useContext } from 'react'
import { HistoryContext } from '../../../contexts/HistoryContext'
import { useFilter } from '../../../hooks/useFilter'
import { TitleWithSeparator } from '../../atoms/TitleWithSeparator'
import { SelectGroup } from '../../molecules/SelectGroup'
import { ReportCard } from '../ReportCard'
import { FilterByYear, HistoryInner, HistoryStyle, ReportsByYear, ScrollableArea } from './styles'

export function History() {
  const { innerRef } = useContext(HistoryContext)
  const { years } = useFilter()

  return (
    <HistoryStyle ref={innerRef}>
      <HistoryInner>
        <FilterByYear>
          <SelectGroup.Root>
            <SelectGroup.Label text="Filtrar por ano">
              <SelectGroup.Control
                id="filterByYear"
                placeholder="Todos anos"
                options={years}
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
      </HistoryInner>
    </HistoryStyle>
  )
}
