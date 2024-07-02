import { forwardRef } from 'react'
import Select, { GroupBase, Props, SelectInstance } from 'react-select'

type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Props<Option, IsMulti, Group>

export const Combobox = forwardRef<SelectInstance, SelectProps<unknown, false, GroupBase<unknown>>>(
  ({ ...rest }: SelectProps<unknown, false, GroupBase<unknown>>, ref) => {
    return <Select ref={ref} {...rest} />
  }
)
