import React from 'react'
import http from '../../interceptor'

const DeleteImage = async(id) => {
  try{
    const formData=new FormData()
    formData.append('DeleteEntityId',id)
    const response=await http.delete('/SharePanel/DeleteProfileImage',{data:formData})
    return response
  }catch(error){
    return error
  }
}

export default DeleteImage