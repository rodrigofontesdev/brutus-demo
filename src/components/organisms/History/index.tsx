import { useFilter } from '@hooks/useFilter'
import { TitleWithSeparator } from '@components/atoms/TitleWithSeparator'
import { SelectGroup } from '@components/molecules/SelectGroup'
import { ReportCard } from '@components/organisms/ReportCard'
import { FilterByYear, HistoryInner, HistoryStyle, ReportsByYear, ScrollableArea } from './styles'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

type HistoryProps = ComponentPropsWithoutRef<typeof HistoryStyle>

export const History = forwardRef<HTMLDivElement, HistoryProps>((_, ref) => {
  const { years } = useFilter()

  return (
    <HistoryStyle ref={ref}>
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
})

History.displayName = 'History'
