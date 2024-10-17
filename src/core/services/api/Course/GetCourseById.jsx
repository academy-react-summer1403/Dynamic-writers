import React from 'react'
import http from '../../interceptor'

const GetCourseById = async(id) => {
    try{
        let response = await http.get(`/Home/GetCourseDetails?CourseId=${id}`);
        return response

    }catch(er){
        console.log(er)
    }
}
export default GetCourseById
