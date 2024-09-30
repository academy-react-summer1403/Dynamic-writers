import React, { useEffect } from 'react'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import BahrLogo from '../../../assets/Bahr.png'
import { MailEdit02Icon, PasswordValidationIcon, SmartPhone01Icon,  } from 'hugeicons-react'
import VerificationInput from 'react-verification-input';
import { Button, Link } from '@nextui-org/react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../../../index.css'
import { SendVerifyMessage } from '../../../core/services/api/register/sendVerifyMessage';
import { toast, ToastContainer,  } from 'react-toastify';
import { setItem } from '../../../core/services/common/storage';

const LeftRegister = () => {

  const navigate = useNavigate()

  const onSubmit = async (values) => {

    const notifyEmpty = () => {
        toast.error(" موارد خواسته شده را وارد کنید " + '*', {
          autoClose: 3000,
          className: 'text-red-500 my-5',
          icon: false,
        })
    }
    
    if (values.phoneNumber === ''){
        notifyEmpty()
    }
    else {
        setItem('phoneNumber', values.phoneNumber)
        SendVerifyMessage()
        navigate('/verifyRegister')
    }
    



  }

  return (
    <div className='grow-8 bg-white flex flex-col justify-start items-center my-7'>

        <div className='flex flex-col items-end w-4/6 min-w-96'>
            <div className='w-4/6 h-10 my-2 leading-10 overflow-hidden block md:hidden mb-10' style={{direction : 'rtl'}}> 
                <img src={BahrLogo} className='w-10 inline' /> 
            </div>
            <h2 className='my-2 font-medium text-3xl font-extrabold iranSansBold' style={{direction: 'rtl'}}> 😍!به آکادمی بحر خوش اومدی </h2>
            <span className='my-4 text-gray-500 w-4/6 min-w-60' style={{direction: 'rtl'}}> لطفا برای ثبت نام شماره همراه خود را وارد کنید تا برای شما کد تایید ارسال شود </span>

        </div>

        <Formik
            initialValues={{phoneNumber: ''}}
            onSubmit={(values) => {onSubmit(values)}}
        >

            <Form className='w-4/6 mt-20 relative flex flex-col gap-3' style={{direction: 'rtl'}}>
          
                <h2 className='mb-2 font-bold'> شماره همراه </h2>
                <div className='w-full'>
                    <Field name="phoneNumber" type="phone" className='min-w-80 w-full p-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
                    focus:border-2 font-semibold pr-12 relative' placeholder=" شماره همراه یا ایمیل خود را وارد کنید" />
                    <SmartPhone01Icon className='absolute right-3 top-14 text-gray-500 focus:hidden' />
                </div>

                <Button type='submit' className='bg-blue-600 text-white w-full rounded-full min-w-80'>
                    ارسال کد تایید
                </Button> 

                <ToastContainer />
                
                <div className='w-full flex justify-center min-w-80'> 
                    <span> حساب کاربری دارید؟ <Link to='/register' className='underline iranSansBold text-black cursor-pointer' onClick={() => navigate('/login')}> ورود به حساب کاربری </Link> </span>
                </div>

            </Form>

        </Formik>


        <div className='w-4/6 flex flex-col items-end md:hidden mt-10'>
        <div className='w-full h-16 my-8 flex items-center' style={{direction : 'rtl'}}> 
            <div className='block w-14 h-12 bg-blue-600 rounded-full flex items-center'> <MailEdit02Icon className='m-auto text-white'/> </div>
            <span className='inline iranSansBold mr-5 whitespace-nowrap w-full'> وارد کردن شماره همراه یا ایمیل </span>
        </div>
        <div className='flex items-center w-full h-14' style={{direction : 'rtl'}} >
            <div className='block size-12 bg-blue-600 rounded-full flex items-center'> <PasswordValidationIcon className='m-auto text-white'/> </div>
            <span className='inline text-xl font-semibold mr-5 w-52 iranSansBold' style={{direction: 'rtl'}} >  تایید کد ارسال شده  </span>
        </div>
        </div>

    </div>
  )
}

export default LeftRegister
