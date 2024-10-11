import React from 'react'
import http from '../../interceptor'

const NewsLike = async(id) => {
    try{
        await http.post('/News/NewsLike',id);

    }catch(er){
        console.log(er)
    }
}

export default NewsLike
