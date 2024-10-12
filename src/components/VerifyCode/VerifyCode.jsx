import React from 'react'
import RightVerify from './RightLeftVerify/Right/RightVerify'
import LeftVerify from './RightLeftVerify/Left/LeftVerify'


const VerifyCode = () => {
  return (
     <div className='w-full h-dvh flex font-sans iranSans'>
        <LeftVerify />
        <RightVerify />
    </div>
  )
}

export default VerifyCode
