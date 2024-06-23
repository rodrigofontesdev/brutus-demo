import { forwardRef } from 'react'
import { IMaskInputProps } from 'react-imask'
import { InputMask } from '../../atoms/InputMask'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type InputMaskControlProps = { mask: any; id: string } & IMaskInputProps<HTMLInputElement>

export const InputMaskControl = forwardRef<HTMLInputElement, InputMaskControlProps>(
  ({ mask, id, ...rest }: InputMaskControlProps, ref) => {
    return <InputMask mask={mask} id={id} name={id} autoComplete="off" inputRef={ref} {...rest} />
  }
)

InputMaskControl.displayName = 'InputMaskControl'
