import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../../../../components/atoms/Button'
import { InputGroup } from '../../../../components/molecules/InputGroup'
import { useMultiStepControl } from '../../../../hooks/useMultiStepControl'
import { FormStep } from '../styles'

const stepSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: 'O campo e-mail é obrigatório.' })
    .email({ message: 'O e-mail é inválido.' }),
})

type Step = z.infer<typeof stepSchema>

export function EmailStep() {
  const { jumpToNextStep } = useMultiStepControl()
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Step>({
    mode: 'onChange',
    resolver: zodResolver(stepSchema),
    defaultValues: {
      email: '',
    },
  })

  function handleStepForm(data: Step) {
    if (!isValid) {
      return
    }

    // TODO: salvar dados no estado
    console.log(data)

    jumpToNextStep()
  }

  return (
    <FormStep onSubmit={handleSubmit(handleStepForm)}>
      <InputGroup.Root>
        <InputGroup.Label inputId="email" text="E-mail" />
        <InputGroup.Control
          id="email"
          type="email"
          placeholder="Seu melhor e-mail"
          {...register('email')}
        />

        {errors.email && <InputGroup.Error message={errors.email.message!} />}
      </InputGroup.Root>

      <Button
        type="submit"
        icon={faAngleRight}
        variant="success"
        aria-label="Próximo"
        disabled={isSubmitting}
      />
    </FormStep>
  )
}