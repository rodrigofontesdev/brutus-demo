import { useContext } from 'react'
import { MultiStepControlContext } from '../contexts/MultiStepControlContext'

export function useMultiStepControl() {
  return useContext(MultiStepControlContext)
}
