import { Link } from 'react-router-dom'

import logoImg from '../../../assets/brutus-logo.svg'

export function Logo() {
  return (
    <Link to="/">
      <img src={logoImg} alt="Brutus" width={207} height={50} />
    </Link>
  )
}
