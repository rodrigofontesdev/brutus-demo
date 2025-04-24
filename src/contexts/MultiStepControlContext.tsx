import { type ReactNode, createContext, useState } from 'react'

type MultiStepControlContextProps = {
  currentStep: number
  isLastStep: boolean
  countSteps: (step: number) => void
  jumpToStep: (step: number) => void
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

  const countSteps = (step: number) => {
    setMaxStep(step)
  }

  const jumpToNextStep = () => {
    setIsLastStep(nextStep === maxStep)

    if (!isLastStep) {
      setNextStep((state) => state + 1)
      setCurrentStep(nextStep)
    }
  }

  const jumpToStep = (step: number) => {
    setIsLastStep(nextStep === maxStep)

    if (step <= maxStep) {
      setNextStep(step + 1)
      setCurrentStep(step)
    }
  }

  return (
    <MultiStepControlContext.Provider
      value={{
        currentStep,
        isLastStep,
        countSteps,
        jumpToStep,
        jumpToNextStep,
      }}
    >
      {children}
    </MultiStepControlContext.Provider>
  )
}
