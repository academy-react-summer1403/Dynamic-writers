import React, { useEffect } from 'react'
import { FieldArray, Form, Formik } from 'formik';
import { postLogin } from '../../../../core/services/api/auth';
import BahrLogo from '../../../../assets/Bahr.png'
import { MailEdit02Icon, PasswordValidationIcon,  } from 'hugeicons-react'
import VerificationInput from 'react-verification-input';
import { Button, Link } from '@nextui-org/react';

const LeftVerify = () => {

  const onSubmit = async (values) => {

    const verifyCode = {
        verifyCode: values.verifyCode
    }

    const verify = await postLogin(verifyCode);

  }

  return (
    <div className='grow-8 bg-white flex flex-col justify-start items-center my-7'>

        <div className='flex flex-col items-end w-4/6'>
            <div className='w-4/6 h-10 my-2 leading-10 overflow-hidden block md:hidden mb-10' style={{direction : 'rtl'}}> 
                <img src={BahrLogo} className='w-10 inline' /> 
            </div>
            <h2 className='my-2 font-medium text-3xl font-extrabold iranSansBold'> 👋!خوش برگشتی </h2>
            <span className='my-4 text-gray-500 w-4/6 min-w-60' style={{direction: 'rtl'}}>   لطفا کد ارسال شده به شماره  {}  را وارد کنید  </span>

        </div>

        <Formik
            initialValues={{verifyCode: ''}}
            onSubmit={(values) => {onSubmit(values)}}
        >

            <Form className='w-4/6 mt-20 relative' style={{direction: 'rtl'}}>

                <div className='w-full flex flex-col gap-4'>
                    <span className='iranSansBold'> کد تایید </span>
                    <VerificationInput name='verifyCode' classNames={{
                            container: "flex flex-row-reverse gap-5 iranSans w-4/6",
                            character: "rounded-xl border-none outline-none  bg-gray-100 text-sm p-1 size-12",
                            characterInactive: "bg-gray-100 text-2xl outline-none border-none text-sm",
                            characterSelected: "border-none outline-blue-500 text-black",
                            characterFilled: "text-xl border-none outline-none",
                    }} />
                </div>

                <Button type='submit' className='bg-blue-600 w-4/6 my-5 text-white rounded-full'> تایید </Button>

                <div className='w-full'>
                    <Link className='underline iranSansBold cursor-pointer'> ارسال مجدد کد </Link>
                    <div></div>
                </div>

            </Form>

        </Formik>


        <div className='w-4/6 flex flex-col items-end md:hidden mt-10'>
        <div className='w-full h-16 my-8 flex items-center' style={{direction : 'rtl'}}> 
            <div className='block size-12 bg-blue-600 rounded-full flex items-center'> <MailEdit02Icon className='m-auto text-white'/> </div>
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

export default LeftVerify
