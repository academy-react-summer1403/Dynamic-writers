import React from 'react'
import RightRegister from './RightRegister'
import LeftRegister from './LeftRegister'

const RegisterForm = () => {
  return (
    <div className='flex'>
      <LeftRegister />
      <RightRegister />
    </div>
  )
}

export default RegisterForm
