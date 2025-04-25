import { Divider } from '@components/atoms/Divider'
import { Link } from 'react-router-dom'
import { SignInForm } from './components/SignInForm'
import { Container, CreateAccount, Heading } from './styles'

export function SignIn() {
  return (
    <Container>
      <Heading>
        <h1>Acessar Conta</h1>
        <p>Acesse sua conta utilizando o CNPJ da empresa.</p>
      </Heading>

      <SignInForm />

      <Divider />

      <CreateAccount>
        <Link to="/cadastrar">Não tem uma conta? Clique aqui.</Link>
      </CreateAccount>
    </Container>
  )
}
