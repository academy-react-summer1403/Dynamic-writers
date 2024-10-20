import React from 'react'
import http from '../../interceptor'

const ChooseProfilePic = async(id) => {
  try{
    const formData=new FormData();
    formData.append("ImageId",id)
    const response=await http.post("/SharePanel/SelectProfileImage",formData)
    return response
  }catch(error){
    return error
  }
}

export default ChooseProfilePic