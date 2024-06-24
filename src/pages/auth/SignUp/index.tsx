import { Link } from 'react-router-dom'
import { Divider } from '../../../components/atoms/Divider'
import { MultiStepControl } from '../../../components/organisms/MultiStepControl'
import { MultiStepControlProvider } from '../../../contexts/MultiStepControlContext'
import { BusinessCnpjStep } from './components/BusinessCnpjStep'
import { CellPhoneStep } from './components/CellPhoneStep'
import { EmailStep } from './components/EmailStep'
import { FullNameStep } from './components/FullNameStep'
import { Account, Container } from './styles'

export function SignUp() {
  return (
    <Container>
      <header>
        <h1>Criar Conta</h1>
        <p>
          Crie sua conta grátis em três minutos, diga adeus à planilha e fique em dia com a Receita
          Federal.
        </p>
      </header>

      <MultiStepControlProvider>
        <MultiStepControl.Root>
          <MultiStepControl.Step step={1} disableAnimation>
            <BusinessCnpjStep />
          </MultiStepControl.Step>

          <MultiStepControl.Step step={2}>
            <FullNameStep />
          </MultiStepControl.Step>

          <MultiStepControl.Step step={3}>
            <CellPhoneStep />
          </MultiStepControl.Step>

          <MultiStepControl.Step step={4}>
            <EmailStep />
          </MultiStepControl.Step>
        </MultiStepControl.Root>
      </MultiStepControlProvider>

      <Divider />

      <Account>
        <Link to="/sign-in">Já possui uma conta? Clique aqui.</Link>
      </Account>
    </Container>
  )
}
