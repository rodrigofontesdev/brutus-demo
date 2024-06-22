import { InputHTMLAttributes } from 'react'
import { InputStyle } from './styles'

export type InputProps = { id: string } & InputHTMLAttributes<HTMLInputElement>

export function Input({ id, ...rest }: InputProps) {
  return <InputStyle id={id} name={id} autoComplete="off" {...rest} />
}
