import { animated, easings, useSpring } from '@react-spring/web'
import { ReactNode, useEffect } from 'react'
import { useMultiStepControl } from '../../../hooks/useMultiStepControl'
import { Step } from './styles'

interface MultiStepControlItemProps {
  step: number
  disableAnimation?: boolean
  children: ReactNode
}

export function MultiStepControlItem({
  step,
  disableAnimation = false,
  children
}: MultiStepControlItemProps) {
  const { currentStep, countSteps } = useMultiStepControl()
  const [animations, api] = useSpring(() => ({
    from: { x: !disableAnimation ? '-25%' : '0%' }
  }))

  useEffect(() => {
    if (!disableAnimation) {
      api.start({
        from: { x: '-25%' },
        to: { x: '0%' },
        config: { duration: 800, easing: easings.easeOutCirc }
      })
    }
  }, [currentStep, disableAnimation, api])

  useEffect(() => {
    countSteps(step)
  }, [countSteps, step])

  return (
    <animated.div style={{ ...animations }}>
      <Step $active={currentStep === step}>{children}</Step>
    </animated.div>
  )
}
