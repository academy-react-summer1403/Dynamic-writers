import { toast } from 'react-toastify';
import http from '../../../interceptor'

export const addReplyComment = async (formData) => {
  try {
  const result = await http.post('/Course/AddReplyCourseComment', formData);

  return result
  
  } catch(error){
    if(error.response.data.ErrorMessage){
       toast.error(error.response.data.ErrorMessage + '  ' + error.response.data.StatusCode)
    }
    else{
       toast.error(' مشکلی پیش آمده است ')
   }
 }
}