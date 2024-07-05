import { Input } from '../../atoms/Input'
import { InputMask } from '../../atoms/InputMask'
import { InputValidationMessage } from '../../atoms/InputValidationMessage'
import { Label } from '../../atoms/Label'
import { InputRoot } from './InputRoot'

export const InputGroup = {
  Root: InputRoot,
  Label: Label,
  Control: Input,
  MaskControl: InputMask,
  Error: InputValidationMessage,
}
