import { Link } from 'react-router-dom'
import { Divider } from '../../../components/atoms/Divider'
import { Account, Container, SignUpForm } from './styles'
import { Button } from '../../../components/atoms/Button'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { InputGroup } from '../../../components/molecules/InputGroup'

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

      <SignUpForm>
        <InputGroup.Root>
          <InputGroup.Label inputId="businessCnpj" text="CNPJ" />
          <InputGroup.MaskControl
            mask="S1.S2.S3/S4-N1"
            blocks={{
              S1: {
                mask: /^[0-9a-zA-Z]{0,2}$/,
              },
              S2: {
                mask: /^[0-9a-zA-Z]{0,3}$/,
              },
              S3: {
                mask: /^[0-9a-zA-Z]{0,3}$/,
              },
              S4: {
                mask: /^[0-9a-zA-Z]{0,4}$/,
              },
              N1: {
                mask: /^[0-9]{0,2}$/,
              },
            }}
            prepareChar={(value) => value.toUpperCase()}
            id="businessCnpj"
            placeholder="Número do CNPJ"
          />
        </InputGroup.Root>

        <Button
          type="submit"
          icon={faAngleRight}
          variant="success"
          aria-label="Ir para próxima etapa"
          //disabled={isSubmitting}
        />
      </SignUpForm>

      <Divider />

      <Account>
        <Link to="/sign-in">Já possui uma conta? Clique aqui.</Link>
      </Account>
    </Container>
  )
}
