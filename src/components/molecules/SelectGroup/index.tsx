import { InputValidationMessage } from '../../atoms/InputValidationMessage'
import { Label } from '../../atoms/Label'
import { Combobox } from '../../atoms/Select'
import { SelectRoot } from './SelectRoot'

export const SelectGroup = {
  Root: SelectRoot,
  Label: Label,
  Control: Combobox,
  Error: InputValidationMessage,
}
