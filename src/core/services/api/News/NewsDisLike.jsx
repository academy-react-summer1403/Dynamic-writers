import React from 'react'
import http from '../../interceptor'

const NewsDisLike = async(id) => {
    try{
        let response = await http.post(`/News/NewsDissLike/${id}`);
        return response

    }catch(er){
        console.log(er)
    }
}
export default NewsDisLike
