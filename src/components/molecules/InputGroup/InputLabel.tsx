import { Label, LabelProps } from '../../atoms/Label'

type InputLabelProps = LabelProps

export function InputLabel({ text, inputId, ...rest }: InputLabelProps) {
  return <Label inputId={inputId} text={text} {...rest} />
}
