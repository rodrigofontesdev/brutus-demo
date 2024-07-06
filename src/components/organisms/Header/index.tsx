import { faPlus, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { Link, useMatches } from 'react-router-dom'
import { Button } from '../../atoms/Button'
import { ButtonLink } from '../../atoms/ButtonLink'
import { Actions, HeaderStyle } from './styles'

import logoImg from '../../../assets/brutus-logo.svg'

export function Header() {
  const route = useMatches()[1]

  if (route && route.id.includes('report.new')) {
    return (
      <HeaderStyle>
        <Link to="/report">
          <img src={logoImg} alt="Brutus" width={207} height={50} />
        </Link>

        <Actions>
          <Button icon={faUserCog} iconSize={26} />
        </Actions>
      </HeaderStyle>
    )
  }

  if (route && route.id.includes('report.edit')) {
    return (
      <HeaderStyle>
        <Link to="/report">
          <img src={logoImg} alt="Brutus" width={207} height={50} />
        </Link>

        <Actions>
          <ButtonLink to="/report" icon={faPlus} iconSize={36} />
          <Button icon={faUserCog} iconSize={26} />
        </Actions>
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
