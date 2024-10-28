import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import BahrLogo from '../../../assets/Bahr.png'
import { EyeIcon, LockPasswordIcon, Mail01Icon, MailEdit02Icon, PasswordValidationIcon, SecurityCheckIcon, ViewIcon,  } from 'hugeicons-react'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@nextui-org/react';
import { ResetPassword } from '../../../core/services/api/reasetPassword/ResetPass';
import { ResetConfirmPass } from '../../../core/services/api/reasetPassword/ResetConfirmPass';
import { getItem, setItem } from '../../../core/services/common/storage';
import { ToastWarn } from '../../../core/services/common/Toast/ToastWarn';
import { ToastError } from '../../../core/services/common/Toast/ToastError';

const LeftResetPass2 = () => {
    
  const navigate = useNavigate()

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibility2 = () => setIsVisible2(!isVisible2);

  const onSubmit = async (values) => {

    const passwordObj = {newPassword: values.NewPassword}

    const response = await ResetPassword(passwordObj)

    if(values.NewPassword === "") {
        ToastWarn(" رمز عبور جدید خود را وارد کنید ")
    }
    else if(values.NewPassword !== values.NewPassword2) {
        ToastWarn(" تکرار رمز عبور را به درستی وارد کنید ")
    }
    else if(response ? response.success === true : response) {
        navigate('/login')  
    }

    }

    const configValue = async () => {
        const config = await ResetConfirmPass()

        setItem('resetValue', config.message)
    }

    useEffect(() => {
        configValue()
    }, [])

  return (
    <div className='grow-8 bg-white dark:bg-black flex flex-col justify-start items-center my-7'>

        <div className='flex flex-col items-end w-4/6'>
            <div onClick={() => ToastError('شما باید رمز جدید خود را وارد کنید')} className='w-4/6 h-10 my-2 leading-10 overflow-hidden block md:hidden mb-10' style={{direction : 'rtl'}}> 
                <img src={BahrLogo} className='w-10 inline' /> 
            </div>
            <h2 className='my-2 text-2xl whitespace-nowrap md:text-3xl font-extrabold iranSansBold whitespace-nowrap'> 🔐فراموشی رمزعبور؟ </h2>
            <span className='my-4 text-gray-500 w-4/6' style={{direction: 'rtl'}}> اگر رمزعبور خود را فراموش کرده‌اید ایمیل خود را وارد کنید تا لینک صفحه تغییر رمزعبور برای شما ارسال شود </span>

        </div>

        <Formik
            initialValues={{NewPassord: '', NewPassword2: ''}}
            onSubmit={(values) => {onSubmit(values)}}
        >
            <Form className='w-8/12 mt-20 relative' style={{direction: 'rtl'}}>

                <h2 className='mb-2 mt-5 font-bold'>  رمز عبور جدید </h2>
                <div className='flex relative'>
                    <Field name="NewPassword" type={isVisible ? "text" : "password"} className='dark:bg-slate-600 dark:border-none dark:text-white w-full p-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
                    focus:border-2 font-semibold pr-12 relative' placeholder="رمزعبور جدید خود را وارد کنید" />

                    <button className="focus:outline-none absolute left-3 top-2 fixed" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                        {isVisible ? (
                            <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <ViewIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>

                    <LockPasswordIcon className='absolute right-3 top-2 text-gray-500 focus:hidden' />
                </div>

                <h2 className='mb-2 mt-5 font-bold'> تکرار رمز عبور جدید  </h2>
                <div className='flex relative'>
                    <Field name="NewPassword2" type={isVisible2 ? "text" : "password"} className='w-full p-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
                    focus:border-2 font-semibold pr-12 relative' placeholder="رمزعبور جدید خود را دوباره وارد کنید" />

                    <button className="focus:outline-none absolute left-3 top-2 fixed" type="button" onClick={toggleVisibility2} aria-label="toggle password visibility">
                        {isVisible2 ? (
                            <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <ViewIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>

                    <LockPasswordIcon className='absolute right-3 top-2 text-gray-500 focus:hidden' />
                </div>

                <Button type='submit' color="primary" className='block w-full rounded-full font-semibold relative top-3'>
                    تایید رمز عبور
                </Button>

                <ToastContainer />

            </Form>

        </Formik>

        <div className='w-4/6 flex flex-col items-end md:hidden mt-10'>
        <div className='w-5/6 h-16 my-8 flex items-center' style={{direction : 'rtl'}}> 
            <div className='block size-14 min-w-14 min-h-14 bg-blue-600 rounded-full flex items-center'> <MailEdit02Icon className='m-auto text-white'/> </div>
            <span className='inline text-sm font-semibold text-gray-600 mr-5 whitespace-nowrap'> وارد کردن ایمیل </span>
        </div>
        <div className='flex items-center w-4/6 h-14' style={{direction : 'rtl'}} >
            <div className='block size-14 min-w-14 min-h-14 bg-blue-600 rounded-full flex items-center'> <PasswordValidationIcon className='m-auto text-white'/> </div>
            <span className='inline text-xl font-semibold mr-5 min-w-40' style={{direction: 'rtl'}} > وارد کردن رمزعبور جدید </span>
        </div>
        </div>

    </div>
  )
}

export default LeftResetPass2
