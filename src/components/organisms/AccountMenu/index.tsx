import { Button } from '@components/atoms/Button'
import { InputGroup } from '@components/molecules/InputGroup'
import { SelectGroup } from '@components/molecules/SelectGroup'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '@hooks/useAuth'
import { useProfile } from '@hooks/useProfile'
import { useSignOut } from '@hooks/useSignOut'
import * as Dialog from '@radix-ui/react-dialog'
import { STATES } from '@utils/data'
import { format } from '@utils/formatter'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { ConfirmAccountRemoval } from '../ConfirmAccountRemoval'
import { Modal } from '../Modal'
import {
  AccountForm,
  AccountMenuStyle,
  DeleteAccount,
  DeleteAccountButton,
  SignOutButton,
} from './styles'

export function AccountMenu() {
  const {
    handleUpdateAccount,
    register,
    control,
    formState: { errors, isDirty, isSubmitting },
  } = useProfile()
  const { authenticatedUser } = useAuth()
  const { handleSignOut } = useSignOut()
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const { cnpj } = authenticatedUser?.data ?? {}
  const isSubmitButtonDisabled = isSubmitting || !isDirty

  return (
    <AccountMenuStyle>
      <AccountForm onSubmit={handleUpdateAccount}>
        <h2>Dados do empreendedor</h2>

        <InputGroup.Root>
          <InputGroup.Label
            inputId="businessCnpj"
            text="CNPJ"
          />
          <InputGroup.Control
            id="businessCnpj"
            defaultValue={cnpj ? format.cnpj(cnpj) : ''}
            readOnly
          />
        </InputGroup.Root>

        <InputGroup.Root>
          <InputGroup.Label
            inputId="fullName"
            text="Nome completo"
          />
          <InputGroup.Control
            id="fullName"
            placeholder="Seu nome completo"
            {...register('fullName')}
          />

          {errors.fullName && <InputGroup.Error message={errors.fullName.message!} />}
        </InputGroup.Root>

        <InputGroup.Root>
          <InputGroup.Label
            inputId="email"
            text="E-mail"
          />
          <InputGroup.Control
            id="email"
            type="email"
            placeholder="Seu melhor e-mail"
            {...register('email')}
          />

          {errors.email && <InputGroup.Error message={errors.email.message!} />}
        </InputGroup.Root>

        <InputGroup.Root>
          <InputGroup.Label
            inputId="mobilePhone"
            text="Celular"
          />
          <InputGroup.MaskControl
            mask="(00) 00000-0000"
            prefix="+55"
            id="mobilePhone"
            placeholder="Número de celular"
            {...register('mobilePhone')}
          />

          {errors.mobilePhone && <InputGroup.Error message={errors.mobilePhone.message!} />}
        </InputGroup.Root>

        <InputGroup.Root>
          <InputGroup.Label
            inputId="city"
            text="Cidade"
          />
          <InputGroup.Control
            id="city"
            placeholder="Sua cidade"
            {...register('city')}
          />

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

        <InputGroup.Root>
          <InputGroup.Label
            inputId="secretWord"
            text="Palavra secreta"
          />
          <InputGroup.Control
            id="secretWord"
            placeholder="Digite uma nova palavra secreta"
            {...register('secretWord')}
          />

          {errors.secretWord && <InputGroup.Error message={errors.secretWord.message!} />}
        </InputGroup.Root>

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

        <Dialog.Root
          open={isConfirmModalOpen}
          onOpenChange={setIsConfirmModalOpen}
        >
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

      <SignOutButton onClick={handleSignOut}>Sair da conta</SignOutButton>
    </AccountMenuStyle>
  )
}
