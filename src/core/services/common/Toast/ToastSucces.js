import { toast } from "react-toastify"

export const ToastSuccess = async (message) => {
  toast.dismiss()
  toast.success(message)
}