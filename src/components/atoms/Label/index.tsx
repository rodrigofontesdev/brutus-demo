import { LabelHTMLAttributes, ReactNode } from 'react'
import { LabelStyle } from './styles'

export type LabelProps = {
  text: string
  inputId?: string
  children?: ReactNode
  variant?: 'normal' | 'large'
} & LabelHTMLAttributes<HTMLLabelElement>

export function Label({ text, inputId, children, variant, ...rest }: LabelProps) {
  return (
    <LabelStyle
      htmlFor={inputId}
      $variant={variant}
      {...rest}
    >
      {text}
      {children}
    </LabelStyle>
  )
}
