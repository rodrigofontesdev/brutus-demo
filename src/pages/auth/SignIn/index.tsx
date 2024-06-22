import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/atoms/Button'
import { Divider } from '../../../components/atoms/Divider'
import { InputGroup } from '../../../components/molecules/InputGroup'
import { Container, CreateAccount, SignInForm } from './styles'

export function SignIn() {
  return (
    <Container>
      <header>
        <h1>Acessar Conta</h1>
        <p>Acesse sua conta utilizando o CNPJ da empresa.</p>
      </header>

      <SignInForm>
        <InputGroup.Root>
          <InputGroup.Label inputId="businessCnpj" text="CNPJ" />
          <InputGroup.MaskControl
            mask="00.000.000/0000-00"
            id="businessCnpj"
            placeholder="Número do CNPJ"
          />
          {/* <InputGroup.Error message="O campo CNPJ é obrigatório." /> */}
        </InputGroup.Root>

        <Button type="submit" icon={faAngleRight} variant="success" />
      </SignInForm>

      <Divider />

      <CreateAccount>
        <Link to="/sign-up">Não tem uma conta? Clique aqui.</Link>
      </CreateAccount>
    </Container>
  )
}
