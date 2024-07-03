import { LabelHTMLAttributes } from 'react'
import { LabelStyle } from './styles'

export type LabelProps = {
  text: string
  inputId: string
  size?: 'normal' | 'large'
} & LabelHTMLAttributes<HTMLLabelElement>

export function Label({ text, inputId, size, ...rest }: LabelProps) {
  return (
    <LabelStyle htmlFor={inputId} {...rest} $size={size}>
      {text}
    </LabelStyle>
  )
}
