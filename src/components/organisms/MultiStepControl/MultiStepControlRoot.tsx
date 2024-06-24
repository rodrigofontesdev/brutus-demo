import { ReactNode } from 'react'
import { Steps } from './styles'

type MultiStepControlRootProps = {
  children: ReactNode
}

export function MultiStepControlRoot({ children }: MultiStepControlRootProps) {
  return <Steps>{children}</Steps>
}
