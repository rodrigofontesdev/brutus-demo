import { InputError } from '../../atoms/InputError'
import { Label } from '../../atoms/Label'
import { ComboBox } from '../../atoms/Select'
import { SelectRoot } from './SelectRoot'

export const SelectGroup = {
  Root: SelectRoot,
  Label: Label,
  Control: ComboBox,
  Error: InputError,
}
