import { type ReactNode, createContext, useState } from 'react'

type FormData = {
  [key: string]: string | number
}

type MultiStepControlContextProps = {
  currentStep: number
  isLastStep: boolean
  formData: FormData[]
  countSteps: (step: number) => void
  jumpToNextStep: () => void
  saveData: (data: FormData) => void
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
  const [formData, setFormData] = useState<FormData[]>([])

  const countSteps = (step: number) => {
    setMaxStep(step)
  }

  const jumpToNextStep = () => {
    if (nextStep === maxStep) {
      setIsLastStep(true)
    }

    if (!isLastStep) {
      setCurrentStep(nextStep)
      setNextStep((state) => state + 1)
    }
  }

  const saveData = (data: FormData) => {
    setFormData((state) => [...state, data])
  }

  return (
    <MultiStepControlContext.Provider
      value={{
        currentStep,
        isLastStep,
        countSteps,
        jumpToNextStep,
        formData,
        saveData
      }}
    >
      {children}
    </MultiStepControlContext.Provider>
  )
}
