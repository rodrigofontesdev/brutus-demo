import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonHTMLAttributes } from 'react'
import { ButtonStyle } from './styles'

export type buttonVariants = 'default' | 'success' | 'error'

type ButtonProps = {
  icon: IconDefinition
  iconSize?: number
  variant?: buttonVariants
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ icon, iconSize = 32, variant = 'default', ...rest }: ButtonProps) {
  return (
    <ButtonStyle $variant={variant} {...rest}>
      <FontAwesomeIcon icon={icon} fontSize={`${iconSize / 16}rem`} />
    </ButtonStyle>
  )
}
