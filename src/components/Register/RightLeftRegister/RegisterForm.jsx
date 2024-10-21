import React from 'react'
import RightRegister from './RightRegister'
import LeftRegister from './LeftRegister'

const RegisterForm = () => {
  return (
    <div className='flex h-full w-full'>
      <LeftRegister />
      <RightRegister />
    </div>
  )
}

export default RegisterForm
