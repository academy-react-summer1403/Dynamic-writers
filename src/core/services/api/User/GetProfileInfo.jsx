import React from 'react'
import http from '../../interceptor'

const GetProfileInfo = async() => {
  try{
    const response=await http.get('/SharePanel/GetProfileInfo')
    return response
  }catch(er){
    return er
  }
}

export default GetProfileInfo