import { ReactNode } from 'react'
import { StepsStyle, StepStyle } from './styles'

type StepsProps = {
  children: ReactNode
}

type StepProps = {
  active: boolean
}

export function Root({ children }: StepsProps) {
  return <StepsStyle>{children}</StepsStyle>
}

export function Step({ active }: StepProps) {
  return <StepStyle $active={active} />
}
