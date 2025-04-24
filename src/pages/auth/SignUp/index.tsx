import { Divider } from '@components/atoms/Divider'
import { MultiStepControlProvider } from '@contexts/MultiStepControlContext'
import { Link } from 'react-router-dom'
import { SignUpForm } from './components/SignUpForm'
import { Account, Container, Heading } from './styles'

export function SignUp() {
  return (
    <Container>
      <Heading>
        <h1>Criar Conta</h1>
        <p>
          Crie sua conta grátis em três minutos, diga adeus à planilha e fique em dia com a Receita
          Federal.
        </p>
      </Heading>

      <MultiStepControlProvider>
        <SignUpForm />
      </MultiStepControlProvider>

      <Divider />

      <Account>
        <Link to="/entrar">Já possui uma conta? Clique aqui.</Link>
      </Account>
    </Container>
  )
}
