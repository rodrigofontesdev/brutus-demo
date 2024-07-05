import { InputErrorStyle } from './styles'

export type InputErrorProps = {
  message: string
}

export function InputError({ message }: InputErrorProps) {
  return <InputErrorStyle role="alert">{message}</InputErrorStyle>
}
