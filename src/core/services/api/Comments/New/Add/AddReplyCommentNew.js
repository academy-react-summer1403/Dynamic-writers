import { toast } from 'react-toastify';
import http from '../../../../interceptor'

export const addReplyNew = async (raw) => {
  try {
  const result = await http.post('/News/CreateNewsReplyComment', raw);

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