import { toast } from 'react-toastify'
import http from '../.././interceptor'

export const DeleteJob = async (id) => {
   try{
    const response = await http.delete(`/SharePanel/DeleteJobHistory?HistoryId=${id}`)
    return response

   } catch(error){
      if(error.response.data.ErrorMessage){
         toast.error(error.response.data.ErrorMessage)
      }
      else{
         toast.error(' مشکلی پیش آمده است ')
     }
   }
}