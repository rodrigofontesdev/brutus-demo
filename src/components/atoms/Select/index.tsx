import { forwardRef } from 'react'
import { GroupBase, Props, SelectInstance } from 'react-select'
import { SelectStyle } from './styles'

export type ComboboxProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Props<Option, IsMulti, Group>

export const Combobox = forwardRef<
  SelectInstance,
  ComboboxProps<unknown, false, GroupBase<unknown>>
>(({ ...rest }: ComboboxProps<unknown, false, GroupBase<unknown>>, ref) => {
  return <SelectStyle ref={ref} {...rest} classNamePrefix="selectControl" />
})
