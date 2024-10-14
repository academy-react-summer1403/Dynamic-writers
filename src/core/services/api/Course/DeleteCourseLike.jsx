import http from '../../interceptor'
import GetCourseById from './GetCourseById';
const DeleteCourseLike = async(id) => {
    try{
        let Course=await GetCourseById(id);
        const formData = new FormData();
        formData.append('CourseLikeId', Course.userLikeId);

        let response=await http.delete('/Course/DeleteCourseLike',{data:formData})
        return response

    }catch(er){
        console.log(er)
    }
}
export default DeleteCourseLike