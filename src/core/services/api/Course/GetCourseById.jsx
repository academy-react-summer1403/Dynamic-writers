import http from '../../interceptor'
import { toast } from 'react-toastify';

const GetCourseById = async(id) => {
    try{
        let response = await http.get(`/Home/GetCourseDetails?CourseId=${id}`);
        
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
export default GetCourseById
