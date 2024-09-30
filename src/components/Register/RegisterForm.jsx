import React from 'react'
import RightRegister from './RightLeftRegister/RightRegister'
import LeftRegister from './RightLeftRegister/LeftRegister'

const RegisterForm = () => {
  return (
    <div className='flex'>
      <LeftRegister />
      <RightRegister />
    </div>
  )
}

export default RegisterForm
