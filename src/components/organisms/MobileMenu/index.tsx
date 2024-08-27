import { faChartLine, faFileInvoiceDollar, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Fragment } from 'react/jsx-runtime'
import { HistoryContext } from '../../../contexts/HistoryContext'
import { TimelineContext } from '../../../contexts/TimelineContext'
import { useDrawer } from '../../../hooks/useDrawer'
import { useViewport } from '../../../hooks/useViewport'
import { ActionButton, MobileMenuStyle } from './styles'

export function MobileMenu() {
  const { checkViewport } = useViewport()
  const { toggleVisibility, isOpen } = useDrawer()
  const { toggleTimelineVisibility, isOpen: isTimelineOpen } = useContext(TimelineContext)
  const { toggleHistoryVisibility, isOpen: isHistoryOpen } = useContext(HistoryContext)

  return checkViewport('mobile') ? (
    <MobileMenuStyle>
      <ActionButton
        type="button"
        aria-label="Abrir histórico de relatórios"
        $isActive={isHistoryOpen}
        onClick={toggleHistoryVisibility}
      >
        <FontAwesomeIcon icon={faFileInvoiceDollar} fontSize="2rem" />
      </ActionButton>

      <ActionButton
        type="button"
        aria-label="Abrir linha do tempo"
        $isActive={isTimelineOpen}
        onClick={toggleTimelineVisibility}
      >
        <FontAwesomeIcon icon={faChartLine} fontSize="2rem" />
      </ActionButton>

      <ActionButton
        type="button"
        aria-label="Editar minha conta"
        $isActive={isOpen}
        onClick={toggleVisibility}
      >
        <FontAwesomeIcon icon={faUserCog} fontSize="2rem" />
      </ActionButton>
    </MobileMenuStyle>
  ) : (
    <Fragment />
  )
}
