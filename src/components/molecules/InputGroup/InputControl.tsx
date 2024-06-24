import { InputHTMLAttributes, forwardRef } from 'react'
import { Input } from '../../atoms/Input'

type InputControlProps = { id: string; prefix?: string } & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'id' | 'name' | 'autoComplete'
>

export const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
  ({ id, prefix, ...rest }: InputControlProps, ref) => {
    return <Input id={id} name={id} prefix={prefix} autoComplete="off" ref={ref} {...rest} />
  }
)
