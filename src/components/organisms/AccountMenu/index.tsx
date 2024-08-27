import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { useProfile } from '../../../hooks/useProfile'
import { STATES } from '../../../utils/data'
import { Button } from '../../atoms/Button'
import { InputGroup } from '../../molecules/InputGroup'
import { SelectGroup } from '../../molecules/SelectGroup'
import { ConfirmAccountRemoval } from '../ConfirmAccountRemoval'
import { Modal } from '../Modal'
import { AccountForm, AccountMenuStyle, DeleteAccount, DeleteAccountButton } from './styles'

export function AccountMenu() {
  const {
    handleUpdateAccount,
    register,
    control,
    formState: { errors, isDirty, isSubmitting },
  } = useProfile()
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const isSubmitButtonDisabled = isSubmitting || !isDirty

  return (
    <AccountMenuStyle>
      <AccountForm onSubmit={handleUpdateAccount}>
        <h2>Dados do empreendedor</h2>

        <InputGroup.Root>
          <InputGroup.Label inputId="businessCnpj" text="CNPJ" />
          <InputGroup.Control id="businessCnpj" value="48.330.554/0001-37" readOnly />
        </InputGroup.Root>

        <InputGroup.Root>
          <InputGroup.Label inputId="fullName" text="Nome completo" />
          <InputGroup.Control
            id="fullName"
            placeholder="Seu nome completo"
            {...register('fullName')}
          />

          {errors.fullName && <InputGroup.Error message={errors.fullName.message!} />}
        </InputGroup.Root>

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

        <InputGroup.Root>
          <InputGroup.Label inputId="cellPhone" text="Celular" />
          <InputGroup.MaskControl
            mask="(00) 00000-0000"
            prefix="+55"
            id="cellPhone"
            placeholder="Número de celular"
            {...register('cellPhone')}
          />

          {errors.cellPhone && <InputGroup.Error message={errors.cellPhone.message!} />}
        </InputGroup.Root>

        <InputGroup.Root>
          <InputGroup.Label inputId="city" text="Cidade" />
          <InputGroup.Control id="city" placeholder="Sua cidade" {...register('city')} />

          {errors.city && <InputGroup.Error message={errors.city.message!} />}
        </InputGroup.Root>

        <SelectGroup.Root>
          <SelectGroup.Label text="Estado">
            <Controller
              name="state"
              control={control}
              render={({ field: { name, onBlur, onChange, ref, value } }) => (
                <SelectGroup.Control
                  id={name}
                  placeholder="Selecionar estado"
                  options={STATES}
                  defaultValue={value}
                  isSearchable
                  onBlur={onBlur}
                  onChange={onChange}
                  ref={ref}
                />
              )}
            />
          </SelectGroup.Label>

          {errors.state && <InputGroup.Error message={errors.state.message!} />}
        </SelectGroup.Root>

        <Button
          type="submit"
          icon={faFloppyDisk}
          variant="success"
          aria-label="Salvar conta"
          disabled={isSubmitButtonDisabled}
        />
      </AccountForm>

      <DeleteAccount>
        <h2>Remover conta</h2>

        <Dialog.Root open={isConfirmModalOpen} onOpenChange={setIsConfirmModalOpen}>
          <Dialog.Trigger asChild>
            <DeleteAccountButton>Deseja remover sua conta?</DeleteAccountButton>
          </Dialog.Trigger>

          <Modal title="Excluir conta">
            <ConfirmAccountRemoval
              onConfirm={() => setIsConfirmModalOpen(false)}
              onCancel={() => setIsConfirmModalOpen(false)}
            />
          </Modal>
        </Dialog.Root>
      </DeleteAccount>
    </AccountMenuStyle>
  )
}
