import { Header } from '@components/organisms/Header'
import { History } from '@components/organisms/History'
import { MobileMenu } from '@components/organisms/MobileMenu'
import { Timeline } from '@components/organisms/Timeline'
import { DrawerProvider } from '@contexts/DrawerContext'
import { HistoryProvider } from '@contexts/HistoryContext'
import { ReportProvider } from '@contexts/ReportContext'
import { TimelineProvider } from '@contexts/TimelineContext'
import { useAuth } from '@hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'
import { DashboardApp, DashboardContainer, DashboardGrid, DashboardInner } from './styles'

export function DashboardTemplate() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) return <Navigate to="/entrar" replace />

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
