import React, { useState } from 'react'
import { Form, Formik } from 'formik';
import BahrLogo from '../../../assets/Bahr.png'
import { ArrowMoveUpLeftIcon, MailEdit02Icon, PasswordValidationIcon, TimeQuarterPassIcon, UserAccountIcon,  } from 'hugeicons-react'
import VerificationInput from 'react-verification-input';
import { Button, Link } from '@nextui-org/react';
import Timer from '../../VerifyCode/RightLeftVerify/Left/Timer';
import { useNavigate } from 'react-router-dom';
import { getItem, setItem } from '../../../core/services/common/storage';
import { VerifyMessage } from '../../../core/services/api/register/verifyMessage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SendVerifyMessage } from '../../../core/services/api/register/sendVerifyMessage';
import { ToastSuccess } from '../../../core/services/common/Toast/ToastSucces';
import { ToastError } from '../../../core/services/common/Toast/ToastError';

const LeftVerifyRegister = () => {

    const navigate = useNavigate()

    const [verificationCode, setVerificationCode] = useState()

    const handleInputChange = (value) => {
        setVerificationCode(value); 
    };

    const handleSubmit = () => {
        setItem('verifyMessage', verificationCode)
    };

    const onSubmit = async () => {
        handleSubmit()
    
        const userVerify = await VerifyMessage(verificationCode)

        if(userVerify.success === true) {
            navigate('/registerAccount')
            ToastSuccess(userVerify.message)
        }
        else{
            ToastError("کد تایید صحیح نیست یا از زمان کد گذشته")
        }
    }

    const verifyAgain = async () => {
        const response = await SendVerifyMessage()

        setTimeout(() => {
            navigate('/verifyRegister')
        }, 100)

        navigate('/')
    }


  return (
    <div className='md:w-[70%] w-full bg-white dark:bg-black flex flex-col justify-center md:justify-start items-center my-7'>

        <div className='flex flex-col items-end w-4/6'>
            <Link to='/' className='w-4/6 h-10 my-2 leading-10 overflow-hidden block md:hidden mb-10' style={{direction : 'rtl'}}> 
                <img src={BahrLogo} className='w-10 inline' /> 
            </Link>
            <h2 className='my-2 md:text-3xl text-2xl font-extrabold iranSansBold' style={{direction : 'rtl'}}>  😍!به آکادمی بحر خوش اومدی  </h2>
            <span className='my-4 text-gray-500 w-4/6' style={{direction: 'rtl'}}>   لطفا کد ارسال شده به شماره  <span className='text-blue-500 font-medium'> {JSON.parse(getItem("phoneNumber"))} </span>  را وارد کنید  </span>

        </div>

        <Formik
            initialValues={{verifyCode: ''}}
            onSubmit={(values) => {onSubmit(values)}}
        >

            <Form className='w-4/6 mt-20 relative' style={{direction: 'rtl'}}>

                <div className='flex flex-col gap-4'>
                    <span className='iranSansBold'> کد تایید </span>
                    <VerificationInput name='verifyCode' length={5} onChange={(value) => handleInputChange(value)} value={verificationCode} classNames={{
                            container: "flex flex-row-reverse gap-5 iranSans w-full max-w-[400px]",
                            character: "rounded-xl border-none outline-none dark:bg-slate-600 dark:text-white bg-gray-100 text-sm p-1 size-12",
                            characterInactive: "bg-gray-100 text-2xl outline-none border-none text-sm",
                            characterSelected: "border-none outline-blue-500 text-black",
                            characterFilled: "text-xl border-none outline-none",
                    }} />
                </div>

                <Button type='submit' className='bg-blue-600 w-full my-5 text-white rounded-full max-w-[400px]'> تایید </Button>

                <ToastContainer />

                <div className='w-full max-w-[400px] flex flex-row-reverse gap-5 items-center justify-between'>
                    <div onClick={() => navigate('/register')} className='bg-blue-100 dark:bg-slate-800 flex rounded-full flex-row-reverse p-1 cursor-pointer gap-2 items-center'>
                        <ArrowMoveUpLeftIcon className='text-blue-500 size-4'/>
                        <span className='text-blue-500 text-sm whitespace-nowrap'> تغییر شماره </span>
                    </div>

                    <div className='flex gap-2 items-center flex-row-reverse'>
                        <Link onClick={verifyAgain} className='underline iranSans text-small cursor-pointer ml-4 whitespace-nowrap'> ارسال مجدد کد </Link>
                        <div className='md:flex hidden bg-blue-100 dark:bg-slate-800 flex-row-reverse justify-center items-center rounded-full
                        h-5 p-3 gap-3'> <Timer /> <TimeQuarterPassIcon className='text-blue-600 size-5'/> </div>
                    </div>
                </div>

            </Form>

        </Formik>


        <div className='w-4/6 flex flex-col items-end md:hidden mt-10'>
        <div className='w-5/6 h-16 my-8 flex items-center' style={{direction : 'rtl'}}> 
            <div className='block size-14 min-w-14 min-h-14 bg-blue-600 rounded-full flex items-center'> <MailEdit02Icon className='m-auto text-white'/> </div>
            <span className='inline text-small text-gray-500 font-semibold mr-5 min-w-40'> وارد کردن شماره همراه   </span>
        </div>
        <div className='flex items-center w-4/6 h-14' style={{direction : 'rtl'}} >
            <div className='block size-14 min-w-14 min-h-14 bg-blue-600 rounded-full flex items-center'> <PasswordValidationIcon className='m-auto text-white'/> </div>
            <span className='inline text-xl font-semibold mr-5 min-w-40' style={{direction: 'rtl'}} >  تایید کد ارسال شده به شماره هماره </span>
        </div>
        <div className='flex items-center w-4/6 h-14 my-6' style={{direction : 'rtl'}} >
            <div className='block size-12 min-w-14 min-h-14 bg-gray-200 rounded-full flex items-center'> <UserAccountIcon className='m-auto text-gray-700'/> </div>
            <span className='inline text-small text-gray-500 font-semibold mr-5 min-w-40' style={{direction: 'rtl'}} >  وارد کردن اطلاعات حساب کاربری </span>
        </div>
        </div>

    </div>
  )
}

export default LeftVerifyRegister
