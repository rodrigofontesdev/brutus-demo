import { ButtonHTMLAttributes } from 'react'
import { ButtonStyle } from './styles'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type buttonVariants = 'default' | 'success' | 'error'

type ButtonProps = {
  icon: IconDefinition
  variant?: buttonVariants
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ icon, variant = 'default', ...rest }: ButtonProps) {
  return (
    <ButtonStyle $variant={variant} {...rest}>
      <FontAwesomeIcon icon={icon} fixedWidth />
    </ButtonStyle>
  )
}
