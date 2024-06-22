import { Input, InputProps } from '../../atoms/Input'

type InputControlProps = InputProps

export function InputControl({ id, ...rest }: InputControlProps) {
  return <Input id={id} {...rest} />
}
