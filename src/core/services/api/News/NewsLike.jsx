import React from 'react'
import http from '../../interceptor'

const NewsLike = async(id) => {
    try{
        let response = await http.post(`/News/NewsLike/${id}`);
        return response

    }catch(er){
        console.log(er)
    }
}

export default NewsLike
