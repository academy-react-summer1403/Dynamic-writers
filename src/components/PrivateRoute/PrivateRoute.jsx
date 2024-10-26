import React, { useEffect, useState } from 'react'
import { getItem } from '../../core/services/common/storage'
import { Navigate } from 'react-router-dom'
import { getProfileInfo } from '../../core/services/api/Panel/GetProfile/getProfileInfo'

const PrivateRoute = ({ element }) => {
  
  const token = getItem('token')
  const [expire, setExpire] = useState()

  const isObject = (variable) => {
    return typeof variable === 'object' && !Array.isArray(variable) && variable !== null
  }

  const getProfile = async () => {
    const response = await getProfileInfo()
    if(isObject(response)){
      setExpire(true)
    }
    else{
      setExpire(false)
    }
  }

  useEffect(() => {
    setExpire(true)
  }, [])

  return token ? element : <Navigate to='/Error401' />


}

export default PrivateRoute