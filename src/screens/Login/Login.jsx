import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { getItem, setItem } from '../../core/services/common/storage'

import LoginForm from '../../components/LoginForm/LoginForm'

const Login = () => {
  
  return (
    <>
        <LoginForm />
    </>
  )
}

export default Login
