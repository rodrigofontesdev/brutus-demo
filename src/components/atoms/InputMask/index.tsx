import { IMaskInputProps } from 'react-imask'
import { InputMaskStyle } from './styles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InputMaskProps = { mask: any; id: string } & IMaskInputProps<HTMLInputElement>

export function InputMask({ mask, id, ...rest }: InputMaskProps) {
  return <InputMaskStyle mask={mask} id={id} name={id} autoComplete="off" {...rest} />
}
