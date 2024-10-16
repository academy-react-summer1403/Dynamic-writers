import React from 'react'
import http from '../../interceptor'

const AllCourse = async() => {
  try{
    const response= await http.get('/Home/GetCoursesWithPagination')
    return response.courseFilterDtos
  }catch(er){
    console.log(er)
}
}

export default AllCourse