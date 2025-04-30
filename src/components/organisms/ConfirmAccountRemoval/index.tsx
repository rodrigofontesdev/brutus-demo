import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toastify } from '../../../hooks/useToastify'
import { Button } from '../../atoms/Button'
import { InputGroup } from '../../molecules/InputGroup'
import { Actions, ConfirmAccountRemovalStyle, ConfirmRemovalForm } from './styles'

const confirmRemovalFormSchema = z.object({
  businessCnpj: z
    .string()
    .min(1, { message: 'Digite o CNPJ para confirmar a remoção.' })
    .regex(/^[0-9a-z]{2}\.[0-9a-z]{3}\.[0-9a-z]{3}\/[0-9a-z]{4}-[0-9]{2}$/i, {
      message: 'O formato do CNPJ é inválido.',
    }),
})

type ConfirmAccountRemovalProps = {
  onConfirm: () => void
  onCancel: () => void
}

type ConfirmRemovalForm = z.infer<typeof confirmRemovalFormSchema>

export function ConfirmAccountRemoval({ onConfirm, onCancel }: ConfirmAccountRemovalProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ConfirmRemovalForm>({
    mode: 'onSubmit',
    resolver: zodResolver(confirmRemovalFormSchema),
    defaultValues: {
      businessCnpj: '',
    },
  })

  async function handleConfirmRemovalForm(data: ConfirmRemovalForm) {
    console.log(data)

    if (isValid) {
      // TODO: consume API only if form is valid
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            toastify('Sua conta foi excluida como solicitado.', 'success', {
              position: 'top-center',
            }),
          )
        }, 1000)
      })

      onConfirm()
    }
  }

  return (
    <ConfirmAccountRemovalStyle>
      <p>
        A remoção da conta é um processo irreversível e todos os dados associados a ela serão
        apagados permanentemente.
      </p>

      <ConfirmRemovalForm onSubmit={handleSubmit(handleConfirmRemovalForm)}>
        <InputGroup.Root>
          <InputGroup.Label
            text="Para excluir a conta digite seu CNPJ"
            inputId="businessCnpj"
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
            prepareChar={(value) => value.toUpperCase()}
            id="businessCnpj"
            placeholder="Número do CNPJ"
            variant="large"
            {...register('businessCnpj')}
          />

          {errors.businessCnpj && <InputGroup.Error message={errors.businessCnpj.message!} />}
        </InputGroup.Root>

        <Actions>
          <Button
            icon={faXmark}
            iconSize={36}
            variant="error"
            aria-label="Cancelar"
            onClick={onCancel}
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            icon={faCheck}
            iconSize={36}
            variant="success"
            aria-label="Confirmar"
            disabled={isSubmitting}
          />
        </Actions>
      </ConfirmRemovalForm>
    </ConfirmAccountRemovalStyle>
  )
}
