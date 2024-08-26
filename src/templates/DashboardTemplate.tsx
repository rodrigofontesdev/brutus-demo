import { Outlet } from 'react-router-dom'
import { Header } from '../components/organisms/Header'
import { History } from '../components/organisms/History'
import { MobileMenu } from '../components/organisms/MobileMenu'
import { Timeline } from '../components/organisms/Timeline'
import { DrawerProvider } from '../contexts/DrawerContext'
import { ReportProvider } from '../contexts/ReportContext'
import { TimelineProvider } from '../contexts/TimelineContext'
import { DashboardApp, DashboardInner, DashboardContainer, DashboardGrid } from './styles'
import { HistoryProvider } from '../contexts/HistoryContext'

export function DashboardTemplate() {
  return (
    <DashboardGrid>
      <TimelineProvider>
        <HistoryProvider>
          <DrawerProvider>
            <History />

            <DashboardApp>
              <DashboardContainer>
                <DashboardInner>
                  <Header />
                  <MobileMenu />

                  <ReportProvider>
                    <Outlet />
                  </ReportProvider>
                </DashboardInner>
              </DashboardContainer>
            </DashboardApp>

            <Timeline />
          </DrawerProvider>
        </HistoryProvider>
      </TimelineProvider>
    </DashboardGrid>
  )
}
