import { LabelHTMLAttributes } from 'react'
import { LabelStyle } from './styles'

export type LabelProps = {
  text: string
  inputId: string
  variant?: 'normal' | 'large'
} & LabelHTMLAttributes<HTMLLabelElement>

export function Label({ text, inputId, variant, ...rest }: LabelProps) {
  return (
    <LabelStyle htmlFor={inputId} {...rest} $variant={variant}>
      {text}
    </LabelStyle>
  )
}
