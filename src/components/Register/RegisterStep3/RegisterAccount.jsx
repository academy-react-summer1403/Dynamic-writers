import React from 'react'
import LeftRegisterAccount from './LeftRegisterAccount'
import RightRegisterAccount from './RightRegisterAccount'

const RegisterAccount = () => {
  return (
    <div className='flex'>
      <LeftRegisterAccount />
      <RightRegisterAccount />
    </div>
  )
}

export default RegisterAccount
