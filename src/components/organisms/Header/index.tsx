import { faPlus, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { Link, useMatches } from 'react-router-dom'
import { useDrawer } from '../../../hooks/useDrawer'
import { Button } from '../../atoms/Button'
import { ButtonLink } from '../../atoms/ButtonLink'
import { AccountMenu } from '../AccountMenu'
import { Drawer } from '../Drawer'
import { Actions, HeaderStyle } from './styles'

import logoImg from '../../../assets/brutus-logo.svg'

export function Header() {
  const { openDrawer } = useDrawer()
  const route = useMatches()[1]

  if (route && route.id.includes('report.')) {
    return (
      <HeaderStyle>
        <Link to="/report">
          <img src={logoImg} alt="Brutus" width={207} height={50} />
        </Link>

        <Actions>
          {route.id.includes('report.edit') && (
            <ButtonLink
              to="/report"
              icon={faPlus}
              iconSize={36}
              aria-label="Criar novo relatório"
            />
          )}
          <Button
            icon={faUserCog}
            iconSize={26}
            aria-label="Editar minha conta"
            onClick={openDrawer}
          />
        </Actions>

        <Drawer>
          <AccountMenu />
        </Drawer>
      </HeaderStyle>
    )
  }

  return (
    <HeaderStyle>
      <Link to="/">
        <img src={logoImg} alt="Brutus" width={207} height={50} />
      </Link>
    </HeaderStyle>
  )
}
