import { forwardRef } from 'react'
import Select, { GroupBase, Props, SelectInstance } from 'react-select'
import { ClearIndicator } from './ClearIndicator'
import { DropdownIndicator } from './DropdownIndicator'
import { ComboBoxStyle } from './styles'

export type ComboBoxVariants = 'normal' | 'large'

type ComboBoxProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = {
  id: string
  variant?: ComboBoxVariants
} & Omit<
  Props<Option, IsMulti, Group>,
  'id' | 'instanceId' | 'classNamePrefix' | 'noOptionsMessage' | 'components'
>

export const ComboBox = forwardRef<SelectInstance, ComboBoxProps>(
  ({ id, name, variant = 'normal', ...rest }: ComboBoxProps, ref) => {
    return (
      <ComboBoxStyle $variant={variant}>
        <Select
          inputId={id}
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
  },
)
