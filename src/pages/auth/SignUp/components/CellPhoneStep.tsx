import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../../../../components/atoms/Button'
import { InputGroup } from '../../../../components/molecules/InputGroup'
import { useMultiStepControl } from '../../../../hooks/useMultiStepControl'
import { FormStep } from '../styles'

const stepSchema = z.object({
  cellPhone: z
    .string()
    .min(1, { message: 'O campo celular é obrigatório.' })
    .regex(/^\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}$/i, {
      message: 'O formato do celular é inválido.',
    }),
})

type Step = z.infer<typeof stepSchema>

export function CellPhoneStep() {
  const { jumpToNextStep, saveData } = useMultiStepControl()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Step>({
    mode: 'onChange',
    resolver: zodResolver(stepSchema),
    defaultValues: {
      cellPhone: '',
    },
  })

  function handleStepForm(data: Step) {
    jumpToNextStep()
    saveData(data)
  }

  return (
    <FormStep onSubmit={handleSubmit(handleStepForm)}>
      <InputGroup.Root>
        <InputGroup.Label inputId="cellPhone" text="Celular" variant="large" />
        <InputGroup.MaskControl
          mask="(00) 00000-0000"
          prefix="+55"
          id="cellPhone"
          placeholder="Número de celular"
          variant="large"
          {...register('cellPhone')}
        />

        {errors.cellPhone && <InputGroup.Error message={errors.cellPhone.message!} />}
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
