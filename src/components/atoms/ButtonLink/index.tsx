import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkProps } from 'react-router-dom'
import { ButtonLinkStyle } from './styles'

export type buttonVariants = 'default' | 'success' | 'error'

type ButtonLinkProps = {
  icon: IconDefinition
  iconSize?: number
  variant?: buttonVariants
} & LinkProps

export function ButtonLink({ icon, iconSize = 32, variant = 'default', ...rest }: ButtonLinkProps) {
  return (
    <ButtonLinkStyle
      $variant={variant}
      {...rest}
    >
      <FontAwesomeIcon
        icon={icon}
        fontSize={`${iconSize / 16}rem`}
      />
    </ButtonLinkStyle>
  )
}
