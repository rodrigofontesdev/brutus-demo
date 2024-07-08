import { Outlet } from 'react-router-dom'
import { Header } from '../components/organisms/Header'
import { History } from '../components/organisms/History'
import { Timeline } from '../components/organisms/Timeline'
import { PanelContainer, PanelGrid, PanelCentral } from './styles'

export function PanelTemplate() {
  return (
    <>
      <PanelGrid>
        <History />

        <PanelCentral>
          <PanelContainer>
            <Header />
            <Outlet />
          </PanelContainer>
        </PanelCentral>

        <Timeline />
      </PanelGrid>
    </>
  )
}
