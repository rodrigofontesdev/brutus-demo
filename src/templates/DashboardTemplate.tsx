import { Header } from '@components/organisms/Header'
import { History } from '@components/organisms/History'
import { MobileMenu } from '@components/organisms/MobileMenu'
import { Timeline } from '@components/organisms/Timeline'
import { DrawerProvider } from '@contexts/DrawerContext'
import { TimelineProvider } from '@contexts/TimelineContext'
import { useAuth } from '@hooks/useAuth'
import { useHistory } from '@hooks/useHistory'
import { Navigate, Outlet } from 'react-router-dom'
import { DashboardApp, DashboardContainer, DashboardGrid, DashboardInner } from './styles'

export function DashboardTemplate() {
  const { isAuthenticated } = useAuth()
  const { innerRef, isOpen, toggleVisibility: toggleHistory } = useHistory()

  return !isAuthenticated ? (
    <Navigate
      to="/entrar"
      replace
    />
  ) : (
    <DashboardGrid>
      <TimelineProvider>
        <DrawerProvider>
          <History ref={innerRef} />

          <DashboardApp>
            <DashboardContainer>
              <DashboardInner>
                <Header />
                <MobileMenu
                  isHistoryOpen={isOpen}
                  onToggleHistory={toggleHistory}
                />

                <Outlet />
              </DashboardInner>
            </DashboardContainer>
          </DashboardApp>

          <Timeline />
        </DrawerProvider>
      </TimelineProvider>
    </DashboardGrid>
  )
}
