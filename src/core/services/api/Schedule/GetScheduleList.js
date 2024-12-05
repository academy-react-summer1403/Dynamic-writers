import { toast } from 'react-toastify'
import http from '../.././interceptor'

export const GetScheduleList = async (startDate, endDate, userId) => {
   try{
    console.log(startDate, endDate, userId)
    const response = await http.get(`/Schedual/GetStudentScheduals?startDate=${startDate}&endDate=${endDate}&StudentId=${userId}`)
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