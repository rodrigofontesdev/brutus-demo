import { faChartLine, faPlus, faPrint, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TimelineContext } from '../../../contexts/TimelineContext'
import { useDrawer } from '../../../hooks/useDrawer'
import { useRouter } from '../../../hooks/useRouter'
import { useViewport } from '../../../hooks/useViewport'
import { Button } from '../../atoms/Button'
import { ButtonLink } from '../../atoms/ButtonLink'
import { AccountMenu } from '../AccountMenu'
import { Drawer } from '../Drawer'
import { Actions, HeaderStyle } from './styles'

import logoImg from '../../../assets/brutus-logo.svg'

export function Header() {
  const { isRoute } = useRouter()
  const { checkViewport } = useViewport()
  const { toggleVisibility } = useDrawer()
  const { toggleTimelineVisibility } = useContext(TimelineContext)

  return (
    <HeaderStyle>
      <Link to="/">
        <img src={logoImg} alt="Brutus" width={207} height={50} />
      </Link>

      {isRoute('dashboard') && (
        <Actions>
          {isRoute('report.edit') && (
            <ButtonLink
              to="/"
              icon={faPlus}
              iconSize={40}
              aria-label="Criar novo relatório"
              role="button"
            />
          )}

          {isRoute('report.edit') && checkViewport('mobile') ? (
            <Button icon={faPrint} aria-label="Imprimir relatório" />
          ) : null}

          {(checkViewport('tablet') || checkViewport('small-desktop')) && (
            <Button
              icon={faChartLine}
              iconSize={28}
              aria-label="Abrir linha do tempo"
              onClick={toggleTimelineVisibility}
            />
          )}

          {(checkViewport('tablet') ||
            checkViewport('small-desktop') ||
            checkViewport('desktop')) && (
            <Button
              icon={faUserCog}
              iconSize={28}
              aria-label="Editar minha conta"
              onClick={toggleVisibility}
            />
          )}

          <Drawer>
            <AccountMenu />
          </Drawer>
        </Actions>
      )}
    </HeaderStyle>
  )
}
