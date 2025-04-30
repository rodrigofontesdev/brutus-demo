import { ExternalToast, toast } from 'sonner'
import { Toastify, ToastifyTypes } from '@components/molecules/Toastify'

type Options = ExternalToast

export function toastify(message: string, type?: ToastifyTypes, options?: Options) {
  const duration = options?.duration ?? 5000

  return toast.custom(
    () => (
      <Toastify
        message={message}
        type={type}
        durationInMilliseconds={duration}
      />
    ),
    { ...options },
  )
}
