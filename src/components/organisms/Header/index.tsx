import { faPlus, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDrawer } from '../../../hooks/useDrawer'
import { useRouter } from '../../../hooks/useRouter'
import { Button } from '../../atoms/Button'
import { ButtonLink } from '../../atoms/ButtonLink'
import { AccountMenu } from '../AccountMenu'
import { Drawer } from '../Drawer'
import { Actions, HeaderStyle } from './styles'

import logoImg from '../../../assets/brutus-logo.svg'

export function Header() {
  const { isRoute } = useRouter()
  const { openDrawer } = useDrawer()

  if (isRoute('dashboard')) {
    return (
      <HeaderStyle>
        <Link to="/">
          <img src={logoImg} alt="Brutus" width={207} height={50} />
        </Link>

        <Actions>
          {isRoute('report.edit') && (
            <ButtonLink to="/" icon={faPlus} iconSize={40} aria-label="Criar novo relatório" />
          )}
          <Button
            icon={faUserCog}
            iconSize={28}
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
