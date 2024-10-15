import http from '../../interceptor'
const CourseRate = async(id,rate) => {
    try{
        let response=await http.post(`/Course/SetCourseRating?CourseId=${id}&RateNumber=${rate}`);
        return response

    }catch(er){
        console.log(er)
    }
}
export default CourseRate