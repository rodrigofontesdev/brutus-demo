import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../../../../components/atoms/Button'
import { InputGroup } from '../../../../components/molecules/InputGroup'
import { useMultiStepControl } from '../../../../hooks/useMultiStepControl'
import { FormStep } from '../styles'

const stepSchema = z.object({
  businessCnpj: z
    .string()
    .min(1, { message: 'O campo CNPJ é obrigatório.' })
    .regex(/^[0-9a-z]{2}\.[0-9a-z]{3}\.[0-9a-z]{3}\/[0-9a-z]{4}-[0-9]{2}$/i, {
      message: 'O formato do CNPJ é inválido.',
    }),
})

type Step = z.infer<typeof stepSchema>

export function BusinessCnpjStep() {
  const { jumpToNextStep, saveData } = useMultiStepControl()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Step>({
    mode: 'onChange',
    resolver: zodResolver(stepSchema),
    defaultValues: {
      businessCnpj: '',
    },
  })

  function handleStepForm(data: Step) {
    jumpToNextStep()
    saveData(data)
  }

  return (
    <FormStep onSubmit={handleSubmit(handleStepForm)}>
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

        {errors.businessCnpj && <InputGroup.Error message={errors.businessCnpj.message!} />}
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
