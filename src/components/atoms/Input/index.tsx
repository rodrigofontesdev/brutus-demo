import { InputHTMLAttributes, forwardRef } from 'react'
import { Container, InputStyle, Prefix } from './styles'

export type InputVariants = 'normal' | 'large'

type InputProps = {
  prefix?: string
  variant?: InputVariants
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, prefix, autoComplete = 'off', variant = 'normal', ...rest }: InputProps, ref) => {
    return (
      <Container>
        {!!prefix && <Prefix $variant={variant}>{prefix}</Prefix>}
        <InputStyle
          id={id}
          name={name ?? id}
          autoComplete={autoComplete}
          $variant={variant}
          ref={ref}
          {...rest}
        />
      </Container>
    )
  }
)
