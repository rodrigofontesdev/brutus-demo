import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ClearIndicatorProps, components } from 'react-select'

export function ClearIndicator({ ...rest }: ClearIndicatorProps) {
  return (
    <components.ClearIndicator {...rest}>
      <FontAwesomeIcon icon={faXmark} />
    </components.ClearIndicator>
  )
}
