import React from 'react'
import { getItem } from '../../core/services/common/storage'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ element }) => {
  
  const token = getItem('token')

  return token ? element : <Navigate to='/login' />


}

export default PrivateRoute