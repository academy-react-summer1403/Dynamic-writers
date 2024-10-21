import React from 'react'
import '../.././output.css'
import '../../index.css'
import RightLogin from './RightLeftLogin/Right/RightLogin';
import LeftLogin from './RightLeftLogin/Left/LeftLogin';

const LoginForm = () => {
  return (
    <div className='w-full h-full flex font-sans iranSans'>
        <LeftLogin />
        <RightLogin />
    </div>
  )
}

export default LoginForm
