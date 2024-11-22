import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik';
import FormGenerate from '../../FormGenerate';
import { postLogin } from '../../../../core/services/api/auth';
import BahrLogo from '../../../../assets/Bahr.png'
import { MailEdit02Icon, PasswordValidationIcon,  } from 'hugeicons-react'
import { json, Link, useNavigate } from 'react-router-dom';
import { getItem, setItem } from '../../../../core/services/common/storage';
import { toast, ToastContainer } from 'react-toastify'
import { Button } from '@nextui-org/react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastError } from '../../../../core/services/common/Toast/ToastError';

const LeftLogin = () => {
    
  const navigate = useNavigate()

  const loginToast = JSON.parse(getItem('loginToast'))

  useEffect(() => {
    if(loginToast === true){
        setItem('loginToast', false)
        toast.dismiss()
        toast.warn(' شما باید ابتدا به حساب کاربری خود وارد شید! ', {
            position: 'bottom-center',
            rtl: true
        })
      }
  }, [])

  const onSubmit = async (values) => {

    const userObj = {
        phoneOrGmail: values.phoneOrGmail, password: values.password, rememberMe: values.rememberMe
    }

    setItem('phoneOrGmail', userObj.phoneOrGmail)
    setItem('password', userObj.password)
    setItem('rememberMe', userObj.rememberMe)

    const user = await postLogin(userObj);
    
    if(user.success === true){
        if(user.message === "ارسال پیامک انجام شد."){
            setItem('expire', true)
            navigate('/verify')
        }
        else{
            setItem('expire', true)
            setItem('token', user.token)
            setItem('apiKey', user.apiKey)
            setItem('userId', user.id)
            const userOb = {
                id: user.id,
                token: user.token,
                phoneNumber: user.phoneNumber,
                apiKey: user.apiKey
              };

              let existingUsers = JSON.parse(JSON.parse(getItem('users'))) || [];

              if (!Array.isArray(existingUsers)) {
                existingUsers = [];
              }

              existingUsers = existingUsers.filter(user => user.id !== userOb.id);

              existingUsers.push(userOb);

              setItem('users', JSON.stringify(existingUsers));
              
            navigate('/layoutPanel/dashboard')
        }
    }
    else if(user.success === false){
        if(user.message != null){
           ToastError(user.message)
        }
        else if(values.phoneOrGmail == ""){
            ToastError(" ایمیل یا شماره همراه خود را وارد کنید ")
        }
        else if(values.password == ""){
            ToastError(" رمزعبور خود را وارد کنید ")
        }
    }

  }

  return (
    <div className='md:w-[70%] w-full h-full bg-white dark:bg-black flex flex-col md:justify-start justify-center items-center my-7'>

        <div className='flex flex-col items-end w-4/6'>
            <div onClick={() => navigate('/')} className='cursor-pointer w-4/6 h-10 my-2 leading-10 overflow-hidden block md:hidden' style={{direction : 'rtl'}}> 
                <img src={BahrLogo} className='w-10 inline' /> 
            </div>
            <h2 className='my-2 md:text-3xl text-2xl font-extrabold iranSansBold whitespace-nowrap'> 👋!خوش برگشتی </h2>
            <span className='my-4 text-gray-500 w-4/6' style={{direction: 'rtl'}}> لطفا برای ورود به پنل خود ایمیل یا شماره همراه و رمزعبور خود را وارد کنید </span>

        </div>

        <Formik
            initialValues={{phoneOrGmail: '', password: '', rememberMe: false}}
            onSubmit={(values) => {onSubmit(values)}}
        >
            <Form className='w-4/6 mt-20 relative' style={{direction: 'rtl'}}>

                <FormGenerate />

                <Button type='submit' color="primary" className='block w-full rounded-full font-semibold relative top-3 w-full'>
                    ورود به حساب کاربری
                </Button>

                <ToastContainer />

            </Form>

        </Formik>

        <div className='my-5'> 
            <span className='sm:text-base text-sm'> حساب کاربری ندارید؟ <Link to='/register' className='underline iranSansBold sm:text-base text-sm'>ایجاد حساب کاربری</Link> </span>
        </div>

        <div className='w-4/6 flex flex-col items-end md:hidden mt-10'>
        <div className='w-full h-16 my-8 flex items-center' style={{direction : 'rtl'}}> 
            <div className='block size-14 min-w-14 min-h-14 bg-blue-600 rounded-full flex items-center'> <MailEdit02Icon className='m-auto text-white'/> </div>
            <span className='inline iranSansBold mr-5 w-full'> وارد کردن شماره همراه یا ایمیل </span>
        </div>
        <div className='flex items-center w-full h-14' style={{direction : 'rtl'}} >
            <div className='block size-12 min-w-14 min-h-14 bg-white rounded-full flex items-center'> <PasswordValidationIcon className='m-auto text-gray-500'/> </div>
            <span className='inline text-sm font-semibold mr-5 text-gray-700 w-56' style={{direction: 'rtl'}} > تایید کد ارسال شده
            ( درصورتی که دو مرحله ای فعال باشد ) </span>
        </div>
        </div>

    </div>
  )
}

export default LeftLogin
