import React, { useState } from 'react'
import { Form, Formik } from 'formik';
import BahrLogo from '../../../../assets/Bahr.png'
import { MailEdit02Icon, PasswordValidationIcon, TimeQuarterPassIcon,  } from 'hugeicons-react'
import VerificationInput from 'react-verification-input';
import { Button, Link } from '@nextui-org/react';
import Timer from './Timer';
import { Login2Step } from '../../../../core/services/api/SecurityAPI/login2step';
import { postLogin } from '../../../../core/services/api/auth';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';
import { getItem, setItem } from '../../../../core/services/common/storage';

const LeftVerify = () => {

    const navigate = useNavigate()

  const [verificationCode, setVerificationCode] = useState()

  const handleInputChange = (value) => {
      setVerificationCode(value); 
  };

  const handleSubmit = () => {
      setItem('verifyCode', verificationCode)
  };

    const notify = () => {
        toast.error("کد تایید صحیح نیست یا از زمان کد گذشته", {
        })
    }   

  const onSubmit = async () => {
    handleSubmit()
    
    const user = await Login2Step()

    if(user.success === true) {
        console.log(user)
        navigate('/layoutPanel/dashboard')
        setItem('token', user.token)
        setItem('userId', user.id)
    }
    else{
        notify()
    }
  }

  const verifyAgain = async () => {

    const phone = JSON.parse(getItem('phoneOrGmail'))
    const pass = JSON.parse(getItem('password'))
    const remember = getItem('rememberMe')

    const userObj = {
        phoneOrGmail: phone,
        password: pass,
        rememberMe: remember
      }

    const user = await postLogin(userObj);
    navigate('/layoutPanel/dashboard') 
    setTimeout(() => {navigate('/verify')}, 100)
  }

  return (
    <div className='grow-8 dark:bg-black bg-white flex flex-col justify-start items-center my-7'>

        <div className='flex flex-col items-end w-4/6'>
            <Link to='/' className='w-4/6 h-10 my-2 leading-10 overflow-hidden block md:hidden mb-10' style={{direction : 'rtl'}}> 
                <img src={BahrLogo} className='w-10 inline' /> 
            </Link>
            <h2 className='my-2 font-medium text-3xl font-extrabold iranSansBold'> 👋!خوش برگشتی </h2>
            <span className='my-4 text-gray-500 w-4/6 min-w-60' style={{direction: 'rtl'}}>  لطفا کد ارسال شده     <span className='text-blue-500 font-medium'> {JSON.parse(getItem("phoneNumber"))} </span>  را وارد کنید  </span>

        </div>

        <Formik
            initialValues={{verifyCode: ''}}
            onSubmit={(values) => {onSubmit(values)}}
        >

            <Form className='w-4/6 mt-20 relative' style={{direction: 'rtl'}}>

                <div className='w-full flex flex-col gap-4'>
                    <span className='iranSansBold'> کد تایید </span>
                    <VerificationInput name='verifyCode' length={5} onChange={(value) => handleInputChange(value)} value={verificationCode} classNames={{
                            container: "flex flex-row-reverse gap-5 iranSans w-4/6 min-w-80",
                            character: "rounded-xl border-none outline-none dark:bg-slate-800 dark:text-white bg-gray-100 text-sm p-1 size-12",
                            characterInactive: "bg-gray-100 text-2xl outline-none border-none text-sm",
                            characterSelected: "border-none outline-blue-500 text-black",
                            characterFilled: "text-xl border-none outline-none",
                    }} />
                </div>

                <Button type='submit' className='bg-blue-600 w-4/6 my-5 text-white rounded-full min-w-72'> تایید </Button>

                <div className='w-full flex flex-row-reverse gap-5 justify-end'>
                    <Link onClick={verifyAgain} className='underline iranSansBold cursor-pointer'> ارسال مجدد کد </Link>
                    <div className='flex w-28 bg-blue-100 dark:bg-slate-800 flex-row-reverse justify-center items-center rounded-full
                    h-5 p-3 gap-3'> <Timer /> <TimeQuarterPassIcon className=' text-blue-600 size-5'/> </div>
                </div>

            </Form>

        </Formik>


        <div className='w-4/6 flex flex-col items-end md:hidden mt-10'>
        <div className='w-full h-16 my-8 flex items-center' style={{direction : 'rtl'}}> 
            <div className='block w-16 h-12 bg-blue-600 rounded-full flex items-center'> <MailEdit02Icon className='m-auto text-white'/> </div>
            <span className='inline iranSansBold mr-5 whitespace-nowrap w-full'> وارد کردن شماره همراه یا ایمیل </span>
        </div>
        <div className='flex items-center w-full h-14' style={{direction : 'rtl'}} >
            <div className='block size-12 bg-blue-600 rounded-full flex items-center'> <PasswordValidationIcon className='m-auto text-white'/> </div>
            <span className='inline text-xl font-semibold mr-5 w-52 iranSansBold' style={{direction: 'rtl'}} >  تایید کد ارسال شده  </span>
        </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default LeftVerify
