import React from 'react'
import RightRegister from './RightRegister'
import LeftRegister from './LeftRegister'

const RegisterForm = () => {
  return (
    <div className='w-dvw flex justify-center'>
      <div className='flex w-[1540px] font-sans iranSans'>
        <LeftRegister />
        <RightRegister />
      </div>
    </div>
  )
}

export default RegisterForm
