import { Button } from '@components/atoms/Button'
import { InputGroup } from '@components/molecules/InputGroup'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useSignIn } from '@hooks/useSignIn'
import { Form } from './styles'

export function SignInForm() {
  const {
    handleSignIn,
    register,
    formState: { errors, isSubmitting },
  } = useSignIn()

  return (
    <Form onSubmit={handleSignIn}>
      <InputGroup.Root>
        <InputGroup.Label
          inputId="businessCnpj"
          text="CNPJ"
          variant="large"
        />
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
          prepareChar={(char) => char.toUpperCase()}
          id="businessCnpj"
          placeholder="Número do CNPJ"
          variant="large"
          {...register('businessCnpj')}
        />

        <InputGroup.Error message={errors.businessCnpj ? errors.businessCnpj.message! : ''} />
      </InputGroup.Root>

      <Button
        type="submit"
        icon={faAngleRight}
        iconSize={40}
        variant="success"
        aria-label="Fazer login"
        disabled={isSubmitting}
      />
    </Form>
  )
}
