import { forwardRef } from 'react'
import { IMaskInputProps, IMaskMixin } from 'react-imask'
import { Container, InputStyle, Prefix } from './styles'

export type InputMaskVariants = 'normal' | 'large'

type InputMaskProps = {
  prefix?: string
  variant?: InputMaskVariants
} & IMaskInputProps<HTMLInputElement>

type InputProps = Pick<InputMaskProps, 'variant'> & IMaskInputProps<HTMLInputElement>

const Input = IMaskMixin<HTMLInputElement, InputProps>(({ variant, inputRef, ...rest }) => {
  return <InputStyle $variant={variant!} ref={inputRef} {...rest} />
})

export const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
  ({ id, name, autoComplete, prefix, variant, ...rest }: InputMaskProps, ref) => {
    return (
      <Container>
        {!!prefix && <Prefix $variant={variant ?? 'normal'}>{prefix}</Prefix>}
        <Input
          id={id}
          name={name ?? id}
          autoComplete={autoComplete ?? 'off'}
          variant={variant ?? 'normal'}
          inputRef={ref}
          {...rest}
        />
      </Container>
    )
  }
)
