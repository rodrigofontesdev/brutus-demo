import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Button } from '../../../../components/atoms/Button'
import { InputGroup } from '../../../../components/molecules/InputGroup'
import { useMultiStepControl } from '../../../../hooks/useMultiStepControl'
import { toastify } from '../../../../hooks/useToastify'
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
  const { saveData } = useMultiStepControl()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Step>({
    mode: 'onChange',
    resolver: zodResolver(stepSchema),
    defaultValues: {
      email: '',
    },
  })
  const navigate = useNavigate()

  async function handleStepForm(data: Step) {
    saveData(data)

    try {
      // TODO: fazer chamada para API

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(navigate(`/cadastrar/confirmar?user=${data.email}`))
        }, 1000)
      )
    } catch {
      toastify('Não foi possível criar sua conta, tente novamente em instantes.', 'error')
    }
  }

  return (
    <FormStep onSubmit={handleSubmit(handleStepForm)}>
      <InputGroup.Root>
        <InputGroup.Label inputId="email" text="E-mail" variant="large" />
        <InputGroup.Control
          id="email"
          type="email"
          placeholder="Seu melhor e-mail"
          variant="large"
          {...register('email')}
        />

        {errors.email && <InputGroup.Error message={errors.email.message!} />}
      </InputGroup.Root>

      <Button
        type="submit"
        icon={faAngleRight}
        iconSize={40}
        variant="success"
        aria-label="Próximo"
        disabled={isSubmitting}
      />
    </FormStep>
  )
}
