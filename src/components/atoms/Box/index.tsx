import { ReactNode } from 'react'
import { BoxStyle } from './styles'

type BoxProps = {
  children: ReactNode
}

export function Box({ children }: BoxProps) {
  return <BoxStyle>{children}</BoxStyle>
}
