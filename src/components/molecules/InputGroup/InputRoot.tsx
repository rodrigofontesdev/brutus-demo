import { ReactNode } from 'react'
import { InputRootStyle } from './styles'

type InputRootProps = {
  children: ReactNode
}

export function InputRoot({ children }: InputRootProps) {
  return <InputRootStyle>{children}</InputRootStyle>
}
