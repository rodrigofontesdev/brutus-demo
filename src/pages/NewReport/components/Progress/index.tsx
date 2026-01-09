import { Steps } from '@components/atoms/Steps'
import { useViewport } from '@hooks/useViewport'
import { Fragment } from 'react/jsx-runtime'
import { ProgressStyle } from './styles'

type ProgressProps = {
  currentStep?: number
}

export function Progress({ currentStep = 0 }: ProgressProps) {
  const { checkViewport } = useViewport()

  return checkViewport('mobile') || checkViewport('tablet') ? (
    <ProgressStyle>
      <Steps.Root>
        <Steps.Step active={currentStep === 0} />
        <Steps.Step active={currentStep === 1} />
        <Steps.Step active={currentStep === 2} />
      </Steps.Root>
    </ProgressStyle>
  ) : (
    <Fragment />
  )
}
