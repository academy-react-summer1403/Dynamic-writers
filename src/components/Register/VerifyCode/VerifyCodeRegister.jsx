import React from 'react'
import LeftVerifyRegister from './LeftVerifyRegister'
import RightVerifyRegister from './RightVerifyRegister'

const VerifyCodeRegister = () => {
  return (
    <div className='flex'>
      <LeftVerifyRegister />
      <RightVerifyRegister />
    </div>
  )
}

export default VerifyCodeRegister
