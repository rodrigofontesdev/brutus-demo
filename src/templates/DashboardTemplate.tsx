import { Outlet } from 'react-router-dom'
import { Header } from '../components/organisms/Header'
import { History } from '../components/organisms/History'
import { Timeline } from '../components/organisms/Timeline'
import { DrawerProvider } from '../contexts/DrawerContext'
import { ReportProvider } from '../contexts/ReportContext'
import { DashboardApp, DashboardContainer, DashboardGrid } from './styles'

export function DashboardTemplate() {
  return (
    <>
      <DashboardGrid>
        <History />

        <DashboardApp>
          <DashboardContainer>
            <DrawerProvider>
              <Header />
            </DrawerProvider>

            <ReportProvider>
              <Outlet />
            </ReportProvider>
          </DashboardContainer>
        </DashboardApp>

        <Timeline />
      </DashboardGrid>
    </>
  )
}
