import React from 'react'
import http from '../../interceptor'

const CourseLike = async(id) => {
    try{
        let response = await http.post(`/Course/AddCourseLike?CourseId=${id}`);
        return response

    }catch(er){
        console.log(er)
    }
}

export default CourseLike
