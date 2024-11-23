import http from '../../../interceptor'

export const addCommentCourse = async (formData) => {
  try {
  const result = await http.post('/Course/AddCommentCourse', formData);

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