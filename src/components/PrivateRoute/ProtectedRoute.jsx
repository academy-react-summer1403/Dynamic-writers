import React from 'react'
import { getItem, setItem } from '../../core/services/common/storage'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProtectedRoute = ({ Children }) => {
  
    const expire = JSON.parse(getItem('expire'))

    if(expire === false) {
        setItem('loginToast', true)
        return <Navigate to='/login' />
    }
    else{
        setItem('loginToast', false)
    }

    return Children
}

export default ProtectedRoute
