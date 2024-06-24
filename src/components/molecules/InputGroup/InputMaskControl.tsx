import { forwardRef } from 'react'
import { IMaskInputProps } from 'react-imask'
import { InputMask } from '../../atoms/InputMask'

type InputMaskControlProps = {
  mask: any
  id: string
  prefix?: string
} & IMaskInputProps<HTMLInputElement>

export const InputMaskControl = forwardRef<HTMLInputElement, InputMaskControlProps>(
  ({ mask, id, prefix, ...rest }: InputMaskControlProps, ref) => {
    return (
      <InputMask
        mask={mask}
        prefix={prefix}
        id={id}
        name={id}
        autoComplete="off"
        inputRef={ref}
        {...rest}
      />
    )
  }
)
