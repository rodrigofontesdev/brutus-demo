import { Button } from '@components/atoms/Button'
import { InputGroup } from '@components/molecules/InputGroup'
import { MultiStepControl } from '@components/organisms/MultiStepControl'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useMultiStepControl } from '@hooks/useMultiStepControl'
import { useSignUp } from '@hooks/useSignUp'
import { FormStep } from '../styles'

export function SignUpForm() {
  const { isLastStep } = useMultiStepControl()
  const {
    handleStepValidation,
    handleSignUp,
    register,
    formState: { errors, isSubmitting },
  } = useSignUp()

  return (
    <FormStep onSubmit={handleSignUp}>
      <MultiStepControl.Root>
        <MultiStepControl.Step step={1} disableAnimation>
          <InputGroup.Root>
            <InputGroup.Label inputId="businessCnpj" text="CNPJ" variant="large" />
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
              variant="large"
              {...register('businessCnpj')}
            />

            <InputGroup.Error message={errors.businessCnpj ? errors.businessCnpj.message! : ''} />
          </InputGroup.Root>
        </MultiStepControl.Step>

        <MultiStepControl.Step step={2}>
          <InputGroup.Root>
            <InputGroup.Label inputId="fullName" text="Nome completo" variant="large" />
            <InputGroup.Control
              id="fullName"
              placeholder="Seu nome completo"
              variant="large"
              {...register('fullName')}
            />

            <InputGroup.Error message={errors.fullName ? errors.fullName.message! : ''} />
          </InputGroup.Root>
        </MultiStepControl.Step>

        <MultiStepControl.Step step={3}>
          <InputGroup.Root>
            <InputGroup.Label inputId="mobilePhone" text="Celular" variant="large" />
            <InputGroup.MaskControl
              mask="(00) 00000-0000"
              prefix="+55"
              id="mobilePhone"
              placeholder="Número de celular"
              variant="large"
              {...register('mobilePhone')}
            />

            <InputGroup.Error message={errors.mobilePhone ? errors.mobilePhone.message! : ''} />
          </InputGroup.Root>
        </MultiStepControl.Step>

        <MultiStepControl.Step step={4}>
          <InputGroup.Root>
            <InputGroup.Label inputId="email" text="E-mail" variant="large" />
            <InputGroup.Control
              id="email"
              type="email"
              placeholder="Seu melhor e-mail"
              variant="large"
              {...register('email')}
            />

            <InputGroup.Error message={errors.email ? errors.email.message! : ''} />
          </InputGroup.Root>
        </MultiStepControl.Step>
      </MultiStepControl.Root>

      {isLastStep ? (
        <Button
          key="submit"
          type="submit"
          icon={faAngleRight}
          iconSize={40}
          variant="success"
          aria-label="Criar conta"
          disabled={isSubmitting}
        />
      ) : (
        <Button
          key="next"
          type="button"
          icon={faAngleRight}
          iconSize={40}
          variant="success"
          aria-label="Próximo"
          disabled={isSubmitting}
          onClick={handleStepValidation}
        />
      )}
    </FormStep>
  )
}
