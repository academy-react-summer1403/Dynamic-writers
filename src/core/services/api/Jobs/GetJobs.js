import { toast } from 'react-toastify'
import http from '../.././interceptor'

export const GetJobs = async () => {
   try{
    const response = await http.get(`/SharePanel/GetMyJobHistories`)
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