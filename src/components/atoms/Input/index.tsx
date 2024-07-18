import { InputHTMLAttributes, forwardRef } from 'react'
import { Container, InputStyle, Prefix } from './styles'

export type InputVariants = 'normal' | 'large'

type InputProps = {
  prefix?: string
  variant?: InputVariants
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, autoComplete, prefix, variant, ...rest }: InputProps, ref) => {
    return (
      <Container>
        {!!prefix && <Prefix $variant={variant ?? 'normal'}>{prefix}</Prefix>}
        <InputStyle
          id={id}
          name={name ?? id}
          autoComplete={autoComplete ?? 'off'}
          $variant={variant ?? 'normal'}
          ref={ref}
          {...rest}
        />
      </Container>
    )
  }
)
