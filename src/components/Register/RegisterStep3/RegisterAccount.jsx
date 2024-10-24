import React from 'react'
import LeftRegisterAccount from './LeftRegisterAccount'
import RightRegisterAccount from './RightRegisterAccount'

const RegisterAccount = () => {
  return (
    <div className='w-dvw flex justify-center'>
      <div className='flex w-[1540px] font-sans iranSans'>
        <LeftRegisterAccount />
        <RightRegisterAccount />
      </div>
    </div>
  )
}

export default RegisterAccount
