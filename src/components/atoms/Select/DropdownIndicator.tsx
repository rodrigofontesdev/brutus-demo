import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DropdownIndicatorProps, components } from 'react-select'

export function DropdownIndicator({ ...rest }: DropdownIndicatorProps) {
  return (
    <components.DropdownIndicator {...rest}>
      <FontAwesomeIcon icon={faChevronDown} />
    </components.DropdownIndicator>
  )
}
