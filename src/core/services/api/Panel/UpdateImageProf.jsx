import React from 'react'
import http from '../../interceptor'

const UpdateImageProf =async (image) => {
  try{
    const formData=new FormData();
    formData.append('formFile',image);
    const response=await http.post('/SharePanel/AddProfileImage',formData)
    return response
  }catch(error){
    return error
  }
}

export default UpdateImageProf