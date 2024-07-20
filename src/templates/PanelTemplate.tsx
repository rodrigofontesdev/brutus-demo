import { Outlet } from 'react-router-dom'
import { Header } from '../components/organisms/Header'
import { History } from '../components/organisms/History'
import { Timeline } from '../components/organisms/Timeline'
import { DrawerProvider } from '../contexts/DrawerContext'
import { ReportProvider } from '../contexts/ReportContext'
import { PanelCentral, PanelContainer, PanelGrid } from './styles'

export function PanelTemplate() {
  return (
    <>
      <PanelGrid>
        <History />

        <PanelCentral>
          <PanelContainer>
            <DrawerProvider>
              <Header />
            </DrawerProvider>

            <ReportProvider>
              <Outlet />
            </ReportProvider>
          </PanelContainer>
        </PanelCentral>

        <Timeline />
      </PanelGrid>
    </>
  )
}
