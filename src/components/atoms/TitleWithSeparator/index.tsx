import { ReactNode } from 'react'
import { Separator, TitleContainer } from './styles'

type TitleWithSeparatorProps = {
  children: ReactNode
  orientation?: 'horizontal' | 'vertical'
  size?: number
  separator?: 'both' | 'right' | 'left'
}

export function TitleWithSeparator({
  children,
  orientation = 'horizontal',
  size = 16,
  separator = 'both',
}: TitleWithSeparatorProps) {
  return (
    <TitleContainer
      $orientation={orientation}
      $size={size}
    >
      <Separator $disabled={!['both', 'left'].includes(separator)}></Separator>
      {children}
      <Separator $disabled={!['both', 'right'].includes(separator)}></Separator>
    </TitleContainer>
  )
}
