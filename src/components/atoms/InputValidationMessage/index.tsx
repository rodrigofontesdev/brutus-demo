import { Message } from './styles'

export type InputValidationProps = {
  message: string
}

export function InputValidationMessage({ message }: InputValidationProps) {
  return <Message role="alert">{message}</Message>
}
