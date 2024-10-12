import React from 'react'
import http from '../../interceptor'

const NewsDisLike = async(id) => {
    try{
        const data={
            NewsId:id
        }
        let response = await http.post('/News/NewsDissLike',data);
        alert(response)
        return response

    }catch(er){
        console.log(er)
    }
}
export default NewsDisLike
