import { ReactNode } from 'react'
import { SelectRootStyle } from './styles'

type SelectRootProps = {
  children: ReactNode
}

export function SelectRoot({ children }: SelectRootProps) {
  return <SelectRootStyle>{children}</SelectRootStyle>
}
