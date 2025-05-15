import { Button } from '@components/atoms/Button'
import { InputGroup } from '@components/molecules/InputGroup'
import { SelectGroup } from '@components/molecules/SelectGroup'
import { Modal } from '@components/organisms/Modal'
import { MultiStepControl } from '@components/organisms/MultiStepControl'
import { MultiStepControlProvider } from '@contexts/MultiStepControlContext'
import { faAngleRight, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { useCompleteProfile } from '@hooks/useCompleteProfile'
import { useMultiStepControl } from '@hooks/useMultiStepControl'
import { Mei } from '@models/MeiCategory'
import * as Dialog from '@radix-ui/react-dialog'
import { STATES } from '@utils/data'
import { Controller } from 'react-hook-form'
import { FormStep, FullRow, HalfRow } from './styles'

function CompleteProfile() {
  const { isLastStep } = useMultiStepControl()
  const {
    isModalOpen,
    onModalChange,
    handleStepValidation,
    handleCompleteProfile,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useCompleteProfile()

  return (
    <Dialog.Root
      open={isModalOpen}
      onOpenChange={onModalChange}
      defaultOpen
    >
      <Modal
        title="Completar perfil"
        hideCloseButton
        disableOutsideClick
      >
        <FormStep onSubmit={handleCompleteProfile}>
          <MultiStepControl.Root>
            <MultiStepControl.Step
              step={1}
              disableAnimation
            >
              <p>
                A palavra secreta é um item importante para manter a sua segurança, ela estará em
                todos os e-mails que iremos enviar para você, é sua garantia de que vai estar
                abrindo uma mensagem autêntica. <br />
                <br />A palavra secreta NÃO é sua senha, utilize como palavra algo que apenas você
                saberia, por exemplo, a primeira viagem, brincadeira favorita da infância, etc.
              </p>

              <FullRow>
                <InputGroup.Root>
                  <InputGroup.Label
                    inputId="secretWord"
                    text="Palavra secreta"
                    variant="large"
                  />
                  <InputGroup.Control
                    id="secretWord"
                    placeholder="Digite sua palavra secreta"
                    variant="large"
                    {...register('secretWord')}
                  />

                  {errors.secretWord && <InputGroup.Error message={errors.secretWord.message!} />}
                </InputGroup.Root>
              </FullRow>
            </MultiStepControl.Step>

            <MultiStepControl.Step
              step={2}
              disableAnimation
            >
              <p>Para criar os relatórios mensais precisamos da localização da sua empresa.</p>

              <HalfRow>
                <InputGroup.Root>
                  <InputGroup.Label
                    inputId="city"
                    text="Cidade"
                    variant="large"
                  />
                  <InputGroup.Control
                    id="city"
                    placeholder="Sua cidade"
                    variant="large"
                    {...register('city')}
                  />

                  {errors.city && <InputGroup.Error message={errors.city.message!} />}
                </InputGroup.Root>

                <SelectGroup.Root>
                  <SelectGroup.Label
                    text="Estado"
                    variant="large"
                  >
                    <Controller
                      name="state"
                      control={control}
                      render={({ field: { name, onBlur, onChange, value, ref } }) => (
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
              </HalfRow>
            </MultiStepControl.Step>

            <MultiStepControl.Step
              step={3}
              disableAnimation
            >
              <p>
                Para calcular o limite de faturamento anual é essencial a categoria e data de
                abertura do MEI.
              </p>

              <HalfRow>
                <InputGroup.Root>
                  <InputGroup.Label
                    inputId={Mei.GERAL}
                    text="MEI"
                    variant="large"
                  >
                    <InputGroup.Control
                      type="radio"
                      id={Mei.GERAL}
                      value={Mei.GERAL}
                      variant="large"
                      {...register('mei')}
                    />
                  </InputGroup.Label>

                  {errors.mei && <InputGroup.Error message={errors.mei.message!} />}
                </InputGroup.Root>

                <InputGroup.Root>
                  <InputGroup.Label
                    inputId={Mei.TAC}
                    text="MEI Caminhoneiro"
                    variant="large"
                  >
                    <InputGroup.Control
                      type="radio"
                      id={Mei.TAC}
                      value={Mei.TAC}
                      variant="large"
                      {...register('mei')}
                    />
                  </InputGroup.Label>
                </InputGroup.Root>
              </HalfRow>

              <FullRow>
                <InputGroup.Root>
                  <InputGroup.Label
                    inputId="creationDate"
                    text="Data de criação"
                    variant="large"
                  />
                  <InputGroup.MaskControl
                    mask="00/00/0000"
                    id="creationDate"
                    placeholder="DD/MM/AAAA"
                    variant="large"
                    {...register('creationDate')}
                  />

                  {errors.creationDate && (
                    <InputGroup.Error message={errors.creationDate.message!} />
                  )}
                </InputGroup.Root>
              </FullRow>
            </MultiStepControl.Step>

            {isLastStep ? (
              <Button
                key="submit"
                type="submit"
                icon={faFloppyDisk}
                variant="success"
                aria-label="Salvar perfil"
                disabled={isSubmitting}
              />
            ) : (
              <Button
                key="next"
                type="button"
                icon={faAngleRight}
                iconSize={40}
                variant="success"
                aria-label="Próximo"
                disabled={isSubmitting}
                onClick={handleStepValidation}
              />
            )}
          </MultiStepControl.Root>
        </FormStep>
      </Modal>
    </Dialog.Root>
  )
}

export function CompleteProfileModal() {
  return (
    <MultiStepControlProvider>
      <CompleteProfile />
    </MultiStepControlProvider>
  )
}
