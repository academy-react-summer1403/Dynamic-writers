import React from 'react'
import '../.././output.css'
import '../../index.css'
import RightLogin from './RightLeftLogin/Right/RightLogin';
import LeftLogin from './RightLeftLogin/Left/LeftLogin';

const LoginForm = () => {
  return (
    <div className='w-dvw flex justify-center'>
      <div className='flex w-[1540px] font-sans iranSans'>
        <LeftLogin />
        <RightLogin />
      </div>
    </div>
  )
}

export default LoginForm
