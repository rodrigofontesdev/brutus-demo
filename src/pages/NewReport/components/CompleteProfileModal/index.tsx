import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../../../../components/atoms/Button'
import { InputGroup } from '../../../../components/molecules/InputGroup'
import { SelectGroup } from '../../../../components/molecules/SelectGroup'
import { Modal } from '../../../../components/organisms/Modal'
import { toastify } from '../../../../hooks/useToastify'
import { STATES } from '../../../../utils/data'
import { CompleteProfileForm } from './styles'

const completeProfileFormSchema = z.object({
  secret: z
    .string()
    .trim()
    .min(1, { message: 'O campo palavra secreta é obrigatório.' })
    .max(25, { message: 'A palavra secreta é muito grande. Limite de 25 caracteres.' }),
  city: z.string().trim().min(1, { message: 'O campo cidade é obrigatório.' }),
  state: z
    .object({ value: z.string(), label: z.string() })
    .nullable()
    .refine((data) => (data ? 'value' in data : false), {
      message: 'O campo estado é obrigatório.',
    }),
})

type CompleteProfileForm = z.infer<typeof completeProfileFormSchema>

export function CompleteProfileModal() {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CompleteProfileForm>({
    mode: 'onTouched',
    resolver: zodResolver(completeProfileFormSchema),
    defaultValues: {
      secret: '',
      city: '',
      state: null,
    },
  })

  async function handleCompleteProfile(data: CompleteProfileForm) {
    console.log(data)

    if (isValid) {
      // TODO: consume API only if form is valid
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            toastify('Seu perfil foi salvo com sucesso.', 'success', {
              position: 'top-center',
            })
          )
        }, 1000)
      })

      setIsModalOpen(false)
    }
  }

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen} defaultOpen>
      <Modal title="Completar perfil" hideCloseButton disableOutsideClick>
        <CompleteProfileForm onSubmit={handleSubmit(handleCompleteProfile)}>
          <p>
            A palavra secreta é um item importante para manter a sua segurança, ela estará em todos
            os e-mails que iremos enviar para você, é sua garantia de que vai estar abrindo uma
            mensagem autêntica. <br />
            <br />A palavra secreta NÃO é sua senha, utilize como palavra algo que apenas você
            saberia, por exemplo, a primeira viagem, brincadeira favorita da infância, etc.
          </p>

          <InputGroup.Root>
            <InputGroup.Label inputId="secret" text="Palavra secreta" variant="large" />
            <InputGroup.Control
              id="secret"
              placeholder="Digite sua palavra secreta"
              variant="large"
              {...register('secret')}
            />

            {errors.secret && <InputGroup.Error message={errors.secret.message!} />}
          </InputGroup.Root>

          <p>Para criar seu relatório mensal preencha a localidade onde você mora.</p>

          <InputGroup.Root>
            <InputGroup.Label inputId="city" text="Cidade" variant="large" />
            <InputGroup.Control
              id="city"
              placeholder="Sua cidade"
              variant="large"
              {...register('city')}
            />

            {errors.city && <InputGroup.Error message={errors.city.message!} />}
          </InputGroup.Root>

          <SelectGroup.Root>
            <SelectGroup.Label text="Estado" variant="large">
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
                    variant="large"
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
            aria-label="Salvar alterações"
            disabled={isSubmitting}
          />
        </CompleteProfileForm>
      </Modal>
    </Dialog.Root>
  )
}
