import { toast } from "react-toastify"

export const ToastError = async (message) => {
  toast.dismiss()
  toast.error(message)
}