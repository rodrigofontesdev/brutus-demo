import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../../../../components/atoms/Button'
import { InputGroup } from '../../../../components/molecules/InputGroup'
import { useMultiStepControl } from '../../../../hooks/useMultiStepControl'
import { FormStep } from '../styles'

const stepSchema = z.object({
  fullName: z.string().trim().min(1, { message: 'O campo nome completo é obrigatório.' }),
})

type Step = z.infer<typeof stepSchema>

export function FullNameStep() {
  const { jumpToNextStep, saveData } = useMultiStepControl()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Step>({
    mode: 'onChange',
    resolver: zodResolver(stepSchema),
    defaultValues: {
      fullName: '',
    },
  })

  function handleStepForm(data: Step) {
    jumpToNextStep()
    saveData(data)
  }

  return (
    <FormStep onSubmit={handleSubmit(handleStepForm)}>
      <InputGroup.Root>
        <InputGroup.Label inputId="fullName" text="Nome completo" />
        <InputGroup.Control
          id="fullName"
          placeholder="Seu nome completo"
          {...register('fullName')}
        />

        {errors.fullName && <InputGroup.Error message={errors.fullName.message!} />}
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
