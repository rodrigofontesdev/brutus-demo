import { Button } from '@components/atoms/Button'
import { InputGroup } from '@components/molecules/InputGroup'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDeleteAccount } from '@hooks/useDeleteAccount'
import { Actions, ConfirmAccountRemovalStyle, ConfirmRemovalForm } from './styles'

type ConfirmAccountRemovalProps = {
  onCancel: () => void
}

export function ConfirmAccountRemoval({ onCancel }: ConfirmAccountRemovalProps) {
  const {
    handleDeleteAccount,
    register,
    formState: { errors, isSubmitting },
  } = useDeleteAccount()
  const isActionButtonDisabled = isSubmitting

  return (
    <ConfirmAccountRemovalStyle>
      <p>
        A remoção da conta é um processo irreversível e todos os dados associados a ela serão
        apagados permanentemente.
      </p>

      <ConfirmRemovalForm onSubmit={handleDeleteAccount}>
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
            type="button"
            icon={faXmark}
            iconSize={36}
            variant="error"
            aria-label="Cancelar"
            onClick={onCancel}
            disabled={isActionButtonDisabled}
          />
          <Button
            type="submit"
            icon={faCheck}
            iconSize={36}
            variant="success"
            aria-label="Confirmar"
            disabled={isActionButtonDisabled}
          />
        </Actions>
      </ConfirmRemovalForm>
    </ConfirmAccountRemovalStyle>
  )
}
