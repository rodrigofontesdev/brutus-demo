import { createContext, type ReactElement, useState } from 'react'

type DrawerContextProps = {
  open: boolean
  openDrawer: () => void
  closeDrawer: () => void
}

type DrawerProviderProps = {
  children: ReactElement
}

export const DrawerContext = createContext({} as DrawerContextProps)

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [open, setOpen] = useState(false)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  return (
    <DrawerContext.Provider value={{ open, openDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}
