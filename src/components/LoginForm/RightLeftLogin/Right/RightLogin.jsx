import React from 'react'
import BahrLogo from '../../../../assets/Bahr.png' 
import BahrLogo2 from '../../../../assets/Bahr2.png' 
import { MailEdit02Icon, PasswordValidationIcon } from "hugeicons-react";
import { Link } from 'react-router-dom';

const RightLogin = () => {
  return (
    <div className='grow-5 bg-gray-200 dark:bg-slate-800 md:flex justify-start items-end py-7 px-5 flex-col hidden'>
        <Link to='/' className='w-4/6 h-10 my-2 leading-10 overflow-hidden relative' style={{direction : 'rtl'}}> 
            <img src={BahrLogo} className='w-10 inline' /> 
            <img src={BahrLogo2} className='w-30 h-6 inline mr-2' /> 
        </Link>
        <div className='w-5/6 h-16 my-8 flex items-center' style={{direction : 'rtl'}}> 
            <div className='size-12 bg-blue-600 rounded-full flex items-center'> <MailEdit02Icon className='m-auto text-white'/> </div>
            <span className='inline text-xl font-semibold mr-5'> وارد کردن شماره همراه یا ایمیل </span>
        </div>
        <div className='flex items-center w-4/6 h-14' style={{direction : 'rtl'}} >
            <div className='size-12 bg-white rounded-full flex items-center'> <PasswordValidationIcon className='m-auto text-gray-500'/> </div>
            <span className='inline text-sm font-semibold mr-5 text-gray-700 w-52 dark:text-gray-400' style={{direction: 'rtl'}} > تایید کد ارسال شده
            ( درصورتی که دو مرحله ای فعال باشد ) </span>
        </div>
    </div>
  )
}

export default RightLogin
