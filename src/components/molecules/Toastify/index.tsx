import { Message, TimerBar, ToastifyStyle } from './styles'

export type ToastifyTypes = 'default' | 'success' | 'error'

type ToastifyProps = {
  message: string
  durationInMilliseconds: number
  type?: ToastifyTypes
}

export function Toastify({ message, durationInMilliseconds, type = 'default' }: ToastifyProps) {
  return (
    <ToastifyStyle $type={type}>
      <Message>{message}</Message>
      {durationInMilliseconds !== Infinity && <TimerBar $duration={durationInMilliseconds} />}
    </ToastifyStyle>
  )
}
