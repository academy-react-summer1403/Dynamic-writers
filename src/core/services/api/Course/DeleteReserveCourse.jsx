import React from 'react'
import http from '../../interceptor'

const DeleteReserveCourse = async(id) => {
    try{
        let response=await http.delete('/CourseReserve',{data:{"id":id}})
        return response

    }catch(er){
        console.log(er)
    }
}

export default DeleteReserveCourse