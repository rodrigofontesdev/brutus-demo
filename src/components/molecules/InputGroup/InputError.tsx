import { InputValidationMessage, InputValidationProps } from '../../atoms/InputValidationMessage'

type InputErrorProps = InputValidationProps

export function InputError({ message }: InputErrorProps) {
  return <InputValidationMessage message={message} />
}
