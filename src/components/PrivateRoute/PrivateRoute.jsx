import React, { useEffect } from 'react'
import { getItem, setItem } from '../../core/services/common/storage'
import { Navigate } from 'react-router-dom'
import { getProfileInfo } from '../../core/services/api/Panel/GetProfile/getProfileInfo'
import ProtectedRoute from './ProtectedRoute'

const PrivateRoute = ({ element }) => {
  
  const token = getItem('token')

  const getProfile = async () => {
    const response = await getProfileInfo()
  
    if(!response.email){
      setItem('expire', false)
    }
    else{
      setItem('expire', true)
    }

  }

  if(!token) {
    setItem('loginToast', true)
    return <Navigate to='/login' />
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <>
      <ProtectedRoute Children={element} />
    </>
  )

}

export default PrivateRoute