import { forwardRef } from 'react'
import { IMaskInputProps } from 'react-imask'
import { Container, InputMaskStyle, Prefix } from './styles'

type InputMaskProps = IMaskInputProps<HTMLInputElement> & {
  mask: any
  id: string
  prefix?: string
  variant?: 'normal' | 'large'
}

export const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
  ({ mask, id, prefix, variant, ...rest }: InputMaskProps, ref) => {
    return (
      <Container>
        {prefix && <Prefix $variant={variant}>{prefix}</Prefix>}
        <InputMaskStyle
          mask={mask}
          prefix={prefix}
          $variant={variant}
          id={id}
          name={id}
          autoComplete="off"
          inputRef={ref}
          {...rest}
        />
      </Container>
    )
  }
)
