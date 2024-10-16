import React from 'react'
import http from '../../interceptor'

const GetNewsById = async(id) => {
    try{
        let response = await http.get(`/News/${id}`);
        return response

    }catch(er){
        console.log(er)
    }
}
export default GetNewsById
