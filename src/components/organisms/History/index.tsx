import { useFilter } from '@hooks/useFilter'
import { TitleWithSeparator } from '@components/atoms/TitleWithSeparator'
import { SelectGroup } from '@components/molecules/SelectGroup'
import { ReportCard } from '@components/organisms/ReportCard'
import { FilterByYear, HistoryInner, HistoryStyle, ScrollableArea } from './styles'
import { ComponentPropsWithoutRef, Fragment, forwardRef } from 'react'
import { Skeleton } from '@components/atoms/Skeleton'
import { FilterByYearOption, useGetReports } from '@hooks/useGetReports'

type HistoryProps = ComponentPropsWithoutRef<typeof HistoryStyle>

export const History = forwardRef<HTMLDivElement, HistoryProps>((_, ref) => {
  const { years } = useFilter()
  const {
    reportsGroupedByYear,
    currentYear,
    handleChangeYear,
    isFetchingReports,
    isFetchingNextPage,
    loadMoreRef,
  } = useGetReports()

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
                onChange={(option) => handleChangeYear(option as FilterByYearOption | null)}
                isSearchable={false}
                isClearable
              />
            </SelectGroup.Label>
          </SelectGroup.Root>
        </FilterByYear>

        <ScrollableArea>
          {isFetchingReports && (
            <Fragment>
              <Skeleton height={22} />
              <Skeleton height={200} />
              <Skeleton height={200} />
              <Skeleton height={200} />
            </Fragment>
          )}

          {!isFetchingReports && reportsGroupedByYear.size === 0 && (
            <Fragment>
              <TitleWithSeparator>
                <h2>{currentYear ?? years[0].value}</h2>
              </TitleWithSeparator>
              <p>Sem relatórios no ano</p>
            </Fragment>
          )}

          {!isFetchingReports && reportsGroupedByYear.size > 0 && (
            <Fragment>
              {Array.from(reportsGroupedByYear.entries()).map(([year, reports]) => (
                <Fragment key={year}>
                  <TitleWithSeparator>
                    <h2>{year}</h2>
                  </TitleWithSeparator>

                  {reports.map((report) => (
                    <ReportCard
                      key={report.id}
                      report={report}
                    />
                  ))}
                </Fragment>
              ))}
            </Fragment>
          )}

          {isFetchingNextPage && <Skeleton height={200} />}

          <div ref={loadMoreRef} />
        </ScrollableArea>
      </HistoryInner>
    </HistoryStyle>
  )
})

History.displayName = 'History'
