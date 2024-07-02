import { ReactNode } from 'react'
import { Separator, TitleContainer } from './styles'

type TitleWithSeparatorProps = {
  children: ReactNode
}

export function TitleWithSeparator({ children }: TitleWithSeparatorProps) {
  return (
    <TitleContainer>
      <Separator></Separator>
      {children}
      <Separator></Separator>
    </TitleContainer>
  )
}
