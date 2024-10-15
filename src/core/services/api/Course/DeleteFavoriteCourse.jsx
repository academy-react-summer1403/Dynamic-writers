import http from '../../interceptor'
import GetCourseById from './GetCourseById';

const DeleteFavoriteCourse = async(id) => {
    try{
        let Course=await GetCourseById(id);
        const formData = new FormData();
        formData.append('CourseFavoriteId', Course.userFavoriteId);

        let response=await http.delete('/Course/DeleteCourseFavorite',{data: formData})
        console.log(response)
        return response

    }catch(er){
        console.log(er)
    }
}
export default DeleteFavoriteCourse