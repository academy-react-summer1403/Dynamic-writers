import React from 'react'
import http from '../interceptor'

const NewsDisLike = async(id) => {
    try{
        let response = await http.post(`/News/NewsDissLike/eed400fe-4e77-ef11-b6da-8f406465b439`);
        alert(response)
        return response

    }catch(er){
        console.log(er)
    }
}
export default NewsDisLike
