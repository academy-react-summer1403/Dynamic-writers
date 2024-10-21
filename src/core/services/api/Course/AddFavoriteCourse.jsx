import http from '../../interceptor'
const AddFavoriteCourse = async(id) => {
    try{
        let response = await http.post('/Course/AddCourseFavorite', { courseId: id });
        console.log(response)
        return response

    }catch(er){
        console.log(er)
    }
}
export default AddFavoriteCourse