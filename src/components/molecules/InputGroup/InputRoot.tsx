import { ReactNode } from 'react'
import { InputGroupStyle } from './styles'

type InputRootProps = {
  children: ReactNode
}

export function InputRoot({ children }: InputRootProps) {
  return <InputGroupStyle>{children}</InputGroupStyle>
}
