import { faChartLine, faFileInvoiceDollar, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Fragment } from 'react/jsx-runtime'
import { TimelineContext } from '../../../contexts/TimelineContext'
import { useDrawer } from '../../../hooks/useDrawer'
import { useViewport } from '../../../hooks/useViewport'
import { ActionButton, MobileMenuStyle } from './styles'

type MobileMenuProps = {
  isHistoryOpen: boolean
  onToggleHistory: VoidFunction
}

export function MobileMenu({ isHistoryOpen, onToggleHistory }: MobileMenuProps) {
  const { checkViewport } = useViewport()
  const { toggleVisibility, isOpen } = useDrawer()
  const { toggleTimelineVisibility, isOpen: isTimelineOpen } = useContext(TimelineContext)

  return checkViewport('mobile') ? (
    <MobileMenuStyle>
      <ActionButton
        type="button"
        aria-label="Abrir histórico de relatórios"
        $isActive={isHistoryOpen}
        onClick={onToggleHistory}
      >
        <FontAwesomeIcon
          icon={faFileInvoiceDollar}
          fontSize="2rem"
        />
      </ActionButton>

      <ActionButton
        type="button"
        aria-label="Abrir linha do tempo"
        $isActive={isTimelineOpen}
        onClick={toggleTimelineVisibility}
      >
        <FontAwesomeIcon
          icon={faChartLine}
          fontSize="2rem"
        />
      </ActionButton>

      <ActionButton
        type="button"
        aria-label="Editar minha conta"
        $isActive={isOpen}
        onClick={toggleVisibility}
      >
        <FontAwesomeIcon
          icon={faUserCog}
          fontSize="2rem"
        />
      </ActionButton>
    </MobileMenuStyle>
  ) : (
    <Fragment />
  )
}
