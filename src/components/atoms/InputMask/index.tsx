import { forwardRef } from 'react'
import { IMaskInputProps, IMaskMixin } from 'react-imask'
import { Container, InputStyle, Prefix } from './styles'

export type InputMaskVariants = 'normal' | 'large'

type InputMaskProps = {
  prefix?: string
  variant?: InputMaskVariants
} & IMaskInputProps<HTMLInputElement>

type InputProps = Pick<InputMaskProps, 'variant'> & IMaskInputProps<HTMLInputElement>

// eslint-disable-next-line new-cap
const Input = IMaskMixin<HTMLInputElement, InputProps>(({ variant, inputRef, ...rest }) => {
  return (
    <InputStyle
      $variant={variant!}
      ref={inputRef}
      {...rest}
    />
  )
})

export const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
  (
    { id, name, prefix, autoComplete = 'off', variant = 'normal', ...rest }: InputMaskProps,
    ref,
  ) => {
    return (
      <Container>
        {!!prefix && <Prefix $variant={variant}>{prefix}</Prefix>}
        <Input
          id={id}
          name={name ?? id}
          autoComplete={autoComplete}
          variant={variant}
          inputRef={ref}
          {...rest}
        />
      </Container>
    )
  },
)
