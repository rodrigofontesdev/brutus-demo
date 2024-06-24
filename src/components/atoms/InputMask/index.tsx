import { IMaskInputProps } from 'react-imask'
import { Container, InputMaskStyle, Prefix } from './styles'

type InputMaskProps = { prefix?: string } & IMaskInputProps<HTMLInputElement>

export function InputMask({ prefix, ...rest }: InputMaskProps) {
  return (
    <Container>
      {prefix && <Prefix>{prefix}</Prefix>}
      <InputMaskStyle {...rest} />
    </Container>
  )
}
