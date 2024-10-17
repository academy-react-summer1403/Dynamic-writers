import React from 'react'
import http from '../../interceptor'

const CourseDisLike = async(id) => {
    try{
        let response = await http.post(`/Course/AddCourseDissLike?CourseId=${id}`);
        return response

    }catch(er){
        console.log(er)
    }
}
export default CourseDisLike
