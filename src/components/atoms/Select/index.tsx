import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { forwardRef } from 'react'
import Select, {
  ClearIndicatorProps,
  DropdownIndicatorProps,
  GroupBase,
  Props,
  SelectInstance,
  components,
} from 'react-select'
import { ComboboxStyle } from './styles'

type ComboboxProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = {
  id: string
  variant?: 'normal' | 'large'
} & Omit<
  Props<Option, IsMulti, Group>,
  'id' | 'instanceId' | 'classNamePrefix' | 'noOptionsMessage' | 'components'
>

const DropdownIndicator = ({ ...rest }: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...rest}>
      <FontAwesomeIcon icon={faChevronDown} />
    </components.DropdownIndicator>
  )
}

const ClearIndicator = ({ ...rest }: ClearIndicatorProps) => {
  return (
    <components.ClearIndicator {...rest}>
      <FontAwesomeIcon icon={faXmark} />
    </components.ClearIndicator>
  )
}

export const Combobox = forwardRef<
  SelectInstance,
  ComboboxProps<unknown, false, GroupBase<unknown>>
>(({ id, variant, ...rest }: ComboboxProps<unknown, false, GroupBase<unknown>>, ref) => {
  return (
    <ComboboxStyle $variant={variant}>
      <Select
        id={id}
        instanceId={id}
        classNamePrefix="selectControl"
        noOptionsMessage={() => 'Sem opções'}
        components={{ DropdownIndicator, ClearIndicator }}
        ref={ref}
        {...rest}
      />
    </ComboboxStyle>
  )
})
