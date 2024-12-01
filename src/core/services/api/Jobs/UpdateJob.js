import { toast } from 'react-toastify'
import http from '../.././interceptor'

export const UpdateJob = async (data) => {
   try{
    const response = await http.post(`/SharePanel/UpdateJobHistory`, data)
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