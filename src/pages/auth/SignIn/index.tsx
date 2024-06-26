import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { Button } from '../../../components/atoms/Button'
import { Divider } from '../../../components/atoms/Divider'
import { InputGroup } from '../../../components/molecules/InputGroup'
import { toastify } from '../../../hooks/useToastify'
import { Container, CreateAccount, SignInForm } from './styles'

const signInFormSchema = z.object({
  businessCnpj: z
    .string()
    .min(1, { message: 'O campo CNPJ é obrigatório.' })
    .regex(/^[0-9a-z]{2}\.[0-9a-z]{3}\.[0-9a-z]{3}\/[0-9a-z]{4}-[0-9]{2}$/i, {
      message: 'O formato do CNPJ é inválido.',
    }),
})

type SignInForm = z.infer<typeof signInFormSchema>

export function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    mode: 'onChange',
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      businessCnpj: '',
    },
  })

  async function handleSignInForm(data: SignInForm) {
    try {
      // TODO: fazer chamada para API

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(toastify('O link de acesso foi enviado para o seu e-mail.', 'success'))
        }, 1000)
      )
    } catch {
      toastify('Tem certeza que digitou o CNPJ correto?', 'error')
    }
  }

  return (
    <Container>
      <header>
        <h1>Acessar Conta</h1>
        <p>Acesse sua conta utilizando o CNPJ da empresa.</p>
      </header>

      <SignInForm onSubmit={handleSubmit(handleSignInForm)}>
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
            {...register('businessCnpj')}
          />

          {errors.businessCnpj && <InputGroup.Error message={errors.businessCnpj.message!} />}
        </InputGroup.Root>

        <Button
          type="submit"
          icon={faAngleRight}
          iconSize={40}
          variant="success"
          aria-label="Fazer login"
          disabled={isSubmitting}
        />
      </SignInForm>

      <Divider />

      <CreateAccount>
        <Link to="/sign-up">Não tem uma conta? Clique aqui.</Link>
      </CreateAccount>
    </Container>
  )
}
