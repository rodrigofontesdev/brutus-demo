import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { toastify } from '../../../hooks/useToastify'
import { STATES } from '../../../utils/data'
import { Button } from '../../atoms/Button'
import { InputGroup } from '../../molecules/InputGroup'
import { SelectGroup } from '../../molecules/SelectGroup'
import { ConfirmAccountRemoval } from '../ConfirmAccountRemoval'
import { Modal } from '../Modal'
import { AccountForm, AccountMenuStyle, DeleteAccount, DeleteAccountButton } from './styles'

const accountFormSchema = z.object({
  fullName: z.string().trim().min(1, { message: 'O campo nome completo é obrigatório.' }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: 'O campo e-mail é obrigatório.' })
    .email({ message: 'O e-mail é inválido.' }),
  cellPhone: z
    .string()
    .min(1, { message: 'O campo celular é obrigatório.' })
    .regex(/^\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}$/i, {
      message: 'O formato do celular é inválido.',
    }),
  city: z.string().trim().min(1, { message: 'O campo cidade é obrigatório.' }),
  state: z
    .object({ value: z.string(), label: z.string() })
    .nullable()
    .refine((data) => (data ? 'value' in data : false), {
      message: 'O campo estado é obrigatório.',
    }),
})

type AccountForm = z.infer<typeof accountFormSchema>

export function AccountMenu() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<AccountForm>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      fullName: 'Rodrigo Fontes Santos',
      email: 'oi@rodrigofontes.dev',
      cellPhone: '(11) 99988-1234',
      city: 'Ribeirão Pires',
      state: STATES[24],
    },
  })

  async function handleAccountForm(data: AccountForm) {
    if (isDirty) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            toastify('Os dados da conta foram atualizados.', 'success', {
              position: 'top-center',
            })
          )
        }, 1000)
      })
    }
  }

  const isSubmitButtonDisabled = isSubmitting || !isDirty

  return (
    <AccountMenuStyle>
      <AccountForm onSubmit={handleSubmit(handleAccountForm)}>
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
