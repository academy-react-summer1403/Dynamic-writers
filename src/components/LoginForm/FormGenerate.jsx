import { Button, Checkbox, Input } from '@nextui-org/react'
import { ErrorMessage, Field, Form } from 'formik'
import React from 'react'
import { EnergyEllipseIcon, EyeIcon, LockPasswordIcon, MailLock02Icon, MailOpen01Icon, SecurityCheckIcon, ViewIcon } from 'hugeicons-react'
import BahrLogo from '../../assets/Bahr.png'
import { useNavigate } from 'react-router-dom'
import '../../index.css'

const FormGenerate = () => {

  const navigate = useNavigate()

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <h2 className='mb-2 font-bold'> شماره یا ایمیل </h2>
      <div className='w-full'>
        <Field name="phoneOrGmail" type="phone" className='min-w-80 w-full dark:bg-slate-600 dark:border-none p-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
        focus:border-2 font-semibold relative pr-12' placeholder="شماره همراه یا ایمیل خود را وارد کنید" /> 
        <MailOpen01Icon className='absolute right-3 top-10 text-gray-500 focus:hidden' />
      </div>

      <h2 className='mb-2 mt-5 font-bold'> رمز عبور </h2>
      <div className='min-w-80 relative flex'>
        <Field name="password" className='min-w-80 w-full p-3 rounded-md dark:bg-slate-600 dark:border-none bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
        focus:border-2 font-semibold relative pr-12' placeholder="رمزعبور خود را وارد کنید"
                type={isVisible ? "text" : "password"} />


        <button className="focus:outline-none absolute top-2 left-3" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
          {isVisible ? (
            <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <ViewIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
        <LockPasswordIcon className='absolute right-3 top-2 text-gray-500 focus:hidden' />
      </div>

      <div className='w-full my-4 flex items-center relative gap-4 justify-between'>

        <div className='flex'>
          <Field name='rememberMe' id='rememberMe' type='checkbox' className='w-4 mx-2' /> 
          <label htmlFor='rememberMe' className='whitespace-nowrap'> مرا به خاطر بسپار  </label>
        </div>


        <Button color="primary" onClick={() => navigate('/forgetPassword')} className='bg-blue-100 dark:bg-blue-200 dark:border-none text-blue-400 rounded-full font-semibold h-7 min-w-40'>
        <SecurityCheckIcon /> فراموشی رمز عبور 
        </Button>

      </div>
    </>
  )
}

export default FormGenerate
