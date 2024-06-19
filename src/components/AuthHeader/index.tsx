import { Header } from './styles'

import logoImg from '../../assets/brutus-logo.svg'

export function AuthHeader() {
  return (
    <Header>
      <img src={logoImg} alt="Brutus" />
    </Header>
  )
}
