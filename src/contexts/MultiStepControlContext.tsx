import { ReactNode, createContext, useState } from 'react'

type MultiStepControlContextProps = {
  currentStep: number
  isLastStep: boolean
  countMaxSteps: (step: number) => void
  jumpToNextStep: () => void
}

type MultiStepControlProviderProps = {
  children: ReactNode
}

export const MultiStepControlContext = createContext({} as MultiStepControlContextProps)

export function MultiStepControlProvider({ children }: MultiStepControlProviderProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [nextStep, setNextStep] = useState(currentStep + 1)
  const [maxStep, setMaxStep] = useState(nextStep)
  const [isLastStep, setIsLastStep] = useState(false)

  const countMaxSteps = (step: number) => {
    setMaxStep(step)
  }

  const jumpToNextStep = () => {
    if (nextStep <= maxStep) {
      setCurrentStep(nextStep)
      setNextStep(nextStep + 1)
      setIsLastStep(false)
    }

    if (currentStep === maxStep) {
      setIsLastStep(true)
    }
  }

  return (
    <MultiStepControlContext.Provider
      value={{
        currentStep,
        isLastStep,
        countMaxSteps,
        jumpToNextStep,
      }}
    >
      {children}
    </MultiStepControlContext.Provider>
  )
}
