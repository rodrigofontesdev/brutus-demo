import { LabelHTMLAttributes } from 'react'
import { LabelStyle } from './styles'

export type LabelProps = {
  text: string
  inputId: string
} & LabelHTMLAttributes<HTMLLabelElement>

export function Label({ text, inputId, ...rest }: LabelProps) {
  return (
    <LabelStyle htmlFor={inputId} {...rest}>
      {text}
    </LabelStyle>
  )
}
