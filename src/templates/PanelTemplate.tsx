import { Outlet } from 'react-router-dom'
import { Header } from '../components/organisms/Header'
import { History } from '../components/organisms/History'
import { Timeline } from '../components/organisms/Timeline'
import { PanelContainer, PanelGrid } from './styles'

export function PanelTemplate() {
  return (
    <>
      <PanelGrid>
        <History />

        <PanelContainer>
          <Header />
          <Outlet />
        </PanelContainer>

        <Timeline />
      </PanelGrid>
    </>
  )
}
