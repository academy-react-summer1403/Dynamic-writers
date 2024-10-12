import React from 'react'
import BahrLogo from '../../../../assets/Bahr.png' 
import BahrLogo2 from '../../../../assets/Bahr2.png' 
import { MailEdit02Icon, PasswordValidationIcon } from "hugeicons-react";
import '../../../../index.css'

const RightVerify = () => {
  return (
    <div className='grow-5 bg-gray-200 md:flex justify-start items-end h-dvh py-7 flex-col hidden'>
        <div className='w-4/6 h-10 my-2 leading-10 overflow-hidden relative' style={{direction : 'rtl'}}> 
            <img src={BahrLogo} className='w-10 inline' /> 
            <img src={BahrLogo2} className='w-30 h-6 inline mr-2' /> 
        </div>
        <div className='w-5/6 h-16 my-8 flex items-center' style={{direction : 'rtl'}}> 
            <div className='block size-12 bg-blue-600 rounded-full flex items-center'> <MailEdit02Icon className='m-auto text-white'/> </div>
            <span className='inline text-medium font-semibold mr-5 text-gray-500'> وارد کردن شماره همراه یا ایمیل </span>
        </div>
        <div className='flex items-center w-4/6 h-14' style={{direction : 'rtl'}} >
            <div className='block size-12 bg-blue-600 rounded-full flex items-center'> <PasswordValidationIcon className='m-auto text-white'/> </div>
            <span className='inline text-xl font-semibold mr-5 w-52 iranSansBold' style={{direction: 'rtl'}} > تایید کد ارسال شده </span>
        </div>
    </div>
  )
}

export default RightVerify
