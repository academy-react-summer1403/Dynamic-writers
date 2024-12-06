import { toast } from 'react-toastify'
import http from '../.././interceptor'

export const GetHomeWorks = async () => {
   try{
    const response = await http.get(`/Session/StudentHomeworkList`)
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