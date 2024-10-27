import { toast } from "react-toastify"

export const ToastWarn = async (message) => {
  toast.dismiss()
  toast.warn(message)
}