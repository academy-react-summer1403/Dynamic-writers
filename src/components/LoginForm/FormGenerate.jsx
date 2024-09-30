import { Button, Checkbox, Input } from '@nextui-org/react'
import { ErrorMessage, Field, Form } from 'formik'
import React from 'react'
import { LockPasswordIcon, MailLock02Icon, MailOpen01Icon, SecurityCheckIcon } from 'hugeicons-react'
import BahrLogo from '../../assets/Bahr.png'
import { useNavigate } from 'react-router-dom'
import '../../index.css'

const FormGenerate = () => {


  return (
    <>
      <h2 className='mb-2 font-bold'> شماره یا ایمیل </h2>
      <div className='w-full'>
        <Field name="phoneOrGmail" type="phone" className='min-w-80 w-full p-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
        focus:border-2 font-semibold relative pr-12' placeholder="شماره همراه یا ایمیل خود را وارد کنید" /> 
        <MailOpen01Icon className='absolute right-3 top-10 text-gray-500 focus:hidden' />
      </div>

      <h2 className='mb-2 mt-5 font-bold'> رمز عبور </h2>
      <div className='w-full relative'>
        <Field name="password" type="password" className='min-w-80 w-full p-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
        focus:border-2 font-semibold pr-12 relative' placeholder="رمزعبور خود را وارد کنید" />
        <LockPasswordIcon className='absolute right-3 top-2 text-gray-500 focus:hidden' />
      </div>

      <div className='w-full my-4 flex items-center relative justify-between'>

        <div className='flex'>
          <Field name='rememberMe' id='rememberMe' type='checkbox' className='w-4 mx-2' /> 
          <label htmlFor='rememberMe' className='whitespace-nowrap'> مرا به خاطر بسپار  </label>

        </div>


        <Button color="primary" className='bg-blue-100 text-blue-400 rounded-full font-semibold h-7 min-w-40'>
        <SecurityCheckIcon /> فراموشی رمز عبور 
        </Button>

      </div>
    </>
  )
}

export default FormGenerate
