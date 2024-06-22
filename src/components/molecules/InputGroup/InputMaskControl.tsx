import { InputMask, InputMaskProps } from '../../atoms/InputMask'

type InputMaskControlProps = InputMaskProps

export function InputMaskControl({ mask, id, ...rest }: InputMaskControlProps) {
  return <InputMask mask={mask} id={id} {...rest} />
}
