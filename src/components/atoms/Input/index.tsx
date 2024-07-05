import { InputHTMLAttributes, forwardRef } from 'react'
import { Container, InputStyle, Prefix } from './styles'

type InputProps = {
  id: string
  prefix?: string
  variant?: 'normal' | 'large'
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'autoComplete'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, prefix, variant, ...rest }: InputProps, ref) => {
    return (
      <Container>
        {prefix && <Prefix $variant={variant}>{prefix}</Prefix>}
        <InputStyle
          id={id}
          name={id}
          prefix={prefix}
          $variant={variant}
          autoComplete="off"
          ref={ref}
          {...rest}
        />
      </Container>
    )
  }
)
