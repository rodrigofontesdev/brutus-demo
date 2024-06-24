import { InputHTMLAttributes, forwardRef } from 'react'
import { Container, InputStyle, Prefix } from './styles'

type InputProps = { prefix?: string } & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ prefix, ...rest }: InputProps, ref) => {
    return (
      <Container>
        {prefix && <Prefix>{prefix}</Prefix>}
        <InputStyle ref={ref} {...rest} />
      </Container>
    )
  }
)
