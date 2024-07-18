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
import { ComboBoxStyle } from './styles'

export type ComboBoxVariants = 'normal' | 'large'

type ComboBoxProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = {
  id: string
  variant?: ComboBoxVariants
} & Omit<
  Props<Option, IsMulti, Group>,
  'instanceId' | 'classNamePrefix' | 'noOptionsMessage' | 'components'
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

export const ComboBox = forwardRef<
  SelectInstance,
  ComboBoxProps<unknown, false, GroupBase<unknown>>
>(({ id, name, variant, ...rest }: ComboBoxProps<unknown, false, GroupBase<unknown>>, ref) => {
  return (
    <ComboBoxStyle $variant={variant ?? 'normal'}>
      <Select
        id={id}
        instanceId={id}
        name={name ?? id}
        classNamePrefix="selectControl"
        noOptionsMessage={() => 'Sem opções'}
        components={{ DropdownIndicator, ClearIndicator }}
        ref={ref}
        {...rest}
      />
    </ComboBoxStyle>
  )
})
