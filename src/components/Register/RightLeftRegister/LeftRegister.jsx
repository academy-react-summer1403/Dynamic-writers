import React, { useEffect, useState } from 'react'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import BahrLogo from '../../../assets/Bahr.png'
import { MailEdit02Icon, PasswordValidationIcon, SmartPhone01Icon, UserAccountIcon,  } from 'hugeicons-react'
import VerificationInput from 'react-verification-input';
import { Button, Link } from '@nextui-org/react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../../../index.css'
import { SendVerifyMessage } from '../../../core/services/api/register/sendVerifyMessage';
import { toast, ToastContainer,  } from 'react-toastify';
import { setItem } from '../../../core/services/common/storage';
import 'react-toastify/dist/ReactToastify.css'
import { ToastError } from '../../../core/services/common/Toast/ToastError';
import { ToastWarn } from '../../../core/services/common/Toast/ToastWarn';

const LeftRegister = () => {

  const navigate = useNavigate()

  const [phone, setPhone] = useState("");

  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, '');

    const match = cleaned.match(/^(\d{0,4})(\d{0,3})(\d{0,4})$/);

    if (match) {
      const part1 = match[1];
      const part2 = match[2] ? `-${match[2]}` : '';
      const part3 = match[3] ? `-${match[3]}` : '';

      return `${part1}${part2}${part3}`;
    }

    return value;
  };

  const handleChange = (e) => {
    const formattedPhone = formatPhone(e.target.value);
    setPhone(formattedPhone);
  };

  const onSubmit = async (values) => {

    const phoneNumber = (JSON.stringify(phone)).replace(/-/g, "")
    
    if (phone === ''){
        ToastWarn(" موارد خواسته شده را وارد کنید ")
    }
    else {
        setItem('phoneNumber', JSON.parse(phoneNumber))
        const response = await SendVerifyMessage()
        console.log(response)
        if(response.message === 'درخواست نامعتبر') {
            ToastError(' درخواست نامعتبر است ')
        }
        else if(response.message === 'لطفا  کد تایید را وارد نمایید') {
            navigate('/verifyRegister')
        }
        else{
            ToastError(' درخواست نامعتبر است ')
        }
    }
    
  }

  return (
    <div className='md:w-[70%] w-full bg-white dark:bg-black flex flex-col justify-center md:justify-start items-center my-7'>

        <div className='flex flex-col items-end w-4/6'>
            <Link to='/' div className='w-4/6 h-10 my-2 leading-10 overflow-hidden block md:hidden mb-10' style={{direction : 'rtl'}}> 
                <img src={BahrLogo} className='w-10 inline' /> 
            </Link>
            <h2 className='my-2 md:text-3xl text-2xl font-extrabold iranSansBold' style={{direction: 'rtl'}}> 😍!به آکادمی بحر خوش اومدی </h2>
            <span className='my-4 text-gray-500 w-4/6' style={{direction: 'rtl'}}> لطفا برای ثبت نام شماره همراه خود را وارد کنید تا برای شما کد تایید ارسال شود </span>

        </div>

        <Formik
            initialValues={{phone: ''}}
            onSubmit={(values) => {onSubmit(values)}}
        >

            <Form className='w-4/6 mt-20 relative flex flex-col gap-3' style={{direction: 'rtl'}}>
          
                <h2 className='mb-2 font-bold'> شماره همراه </h2>
                <div className='w-full'>
                    <Field name="phoneNumber" onChange={(e) => handleChange(e)} value={phone} type="phone" className='w-full p-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
                    focus:border-2 dark:bg-slate-600 dark:border-none font-semibold pr-12 relative' placeholder=" شماره همراه خود را وارد کنید" />
                    <SmartPhone01Icon className='absolute right-3 top-14 text-gray-500 focus:hidden' />
                </div>

                <Button type='submit' className='bg-blue-600 text-white w-full rounded-full'>
                    ارسال کد تایید
                </Button> 

                <ToastContainer />
                
                <div className='w-full flex justify-center whitespace-nowrap'> 
                    <span className='sm:text-base text-sm'> حساب کاربری دارید؟ <Link to='/register' className='sm:text-base text-sm underline iranSansBold text-black cursor-pointer dark:text-white' onClick={() => navigate('/login')}> ورود به حساب کاربری </Link> </span>
                </div>

            </Form>

        </Formik>


        <div className='w-4/6 flex flex-col items-end md:hidden mt-10'>
        <div className='w-5/6 h-16 my-8 flex items-center' style={{direction : 'rtl'}}> 
            <div className='block size-14 min-w-14 min-h-14 bg-blue-600 rounded-full flex items-center'> <MailEdit02Icon className='m-auto text-white'/> </div>
            <span className='inline text-xl font-semibold mr-5 min-w-40'> وارد کردن شماره همراه   </span>
        </div>
        <div className='flex items-center w-4/6 h-14' style={{direction : 'rtl'}} >
            <div className='block size-12 min-w-14 min-h-14 bg-gray-200 rounded-full flex items-center'> <PasswordValidationIcon className='m-auto text-gray-700'/> </div>
            <span className='inline text-small text-gray-500 font-semibold mr-5 min-w-40' style={{direction: 'rtl'}} >  تایید کد ارسال شده به شماره هماره </span>
        </div>
        <div className='flex items-center w-4/6 h-14 my-6' style={{direction : 'rtl'}} >
            <div className='block size-12 min-w-14 min-h-14 bg-gray-200 rounded-full flex items-center'> <UserAccountIcon className='m-auto text-gray-700'/> </div>
            <span className='inline text-small text-gray-500 font-semibold mr-5 min-w-40' style={{direction: 'rtl'}} >  وارد کردن اطلاعات حساب کاربری </span>
        </div>
        </div>

    </div>
  )
}

export default LeftRegister
