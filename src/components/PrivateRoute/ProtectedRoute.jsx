import React from 'react'
import { getItem } from '../../core/services/common/storage'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ Children }) => {
  
    const token = getItem('token')

    if (!token) {
        return <Navigate to='/login' />
    }

    return Children
}

export default ProtectedRoute
