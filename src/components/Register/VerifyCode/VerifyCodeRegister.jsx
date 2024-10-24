import React from 'react'
import LeftVerifyRegister from './LeftVerifyRegister'
import RightVerifyRegister from './RightVerifyRegister'

const VerifyCodeRegister = () => {
  return (
    <div className='w-dvw flex justify-center'>
      <div className='flex w-[1540px] font-sans iranSans'>
        <LeftVerifyRegister />
        <RightVerifyRegister />
      </div>
    </div>
  )
}

export default VerifyCodeRegister
