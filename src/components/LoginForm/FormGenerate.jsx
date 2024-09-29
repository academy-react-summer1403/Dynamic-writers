import { Button, Checkbox, Input } from '@nextui-org/react'
import { Field, Form } from 'formik'
import React from 'react'
import { MailLock02Icon, SecurityCheckIcon } from 'hugeicons-react'
import BahrLogo from '../../assets/Bahr.png'
import { useNavigate } from 'react-router-dom'

const FormGenerate = () => {
  const navigate = useNavigate()

  return (
    <Form className='w-4/6 mt-20 relative' style={{direction: 'rtl'}}>

      <h2 className='mb-2 font-bold'> شماره یا ایمیل </h2>
      <Field name="phoneOrGmail" type="phone" className='min-w-80 w-full p-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
      focus:border-2 font-semibold' placeholder="شماره همراه یا ایمیل خود را وارد کنید" /> 
      
      <h2 className='mb-2 mt-5 font-bold'> رمز عبور </h2>
      <Field name="password" type="password" className='min-w-80 w-full p-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
      focus:border-2 font-semibold' placeholder="رمزعبور خود را وارد کنید" />

      <div className='w-full my-4 flex items-center relative justify-between'>

        <div className='flex'>
          <Field name='rememberMe' id='rememberMe' type='checkbox' className='rounded-full w-10' /> 
          <label htmlFor='rememberMe' className='whitespace-nowrap'> مرا به خاطر بسپار  </label>

        </div>

        <Button color="primary" className='bg-blue-100 text-blue-400 rounded-full font-semibold h-7 min-w-40'>
        <SecurityCheckIcon /> فراموشی رمز عبور
        </Button>

      </div>

      <Button onClick={() => {setTimeout(() => {navigate('/verify')}, 2000)}} type='submit' color="primary" className='block w-full rounded-full font-semibold relative top-3 min-w-80'>
        ورود به حساب کاربری
      </Button>

    </Form>
  )
}

export default FormGenerate
