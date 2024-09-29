import React from 'react'
import { Formik } from 'formik';
import FormGenerate from '../../FormGenerate';
import { postLogin } from '../../../../core/services/api/auth';
import BahrLogo from '../../../../assets/Bahr.png'
import { MailEdit02Icon, PasswordValidationIcon,  } from 'hugeicons-react'
import { Link } from 'react-router-dom';
import { setItem } from '../../../../core/services/common/storage';
import { sendVerifyCode } from '../../../../core/services/api/veryfy';

const LeftLogin = () => {

  const onSubmit = async (values) => {

    const userObj = {
        phoneOrGmail: values.phoneOrGmail, password: values.password, rememberMe: values.rememberMe
    }

    const user = await postLogin(userObj);

    sendVerifyCode(userObj.phoneOrGmail)

    setItem('token', user.token)

  }

  return (
    <div className='grow-8 bg-white flex flex-col justify-start items-center my-7'>

        <div className='flex flex-col items-end w-4/6'>
            <div className='w-4/6 h-10 my-2 leading-10 overflow-hidden block md:hidden mb-10' style={{direction : 'rtl'}}> 
                <img src={BahrLogo} className='w-10 inline' /> 
            </div>
            <h2 className='my-2 font-medium text-3xl font-extrabold iranSansBold'> 👋!خوش برگشتی </h2>
            <span className='my-4 text-gray-500 w-4/6 min-w-60' style={{direction: 'rtl'}}> لطفا برای ورود به پنل خود ایمیل یا شماره همراه و رمزعبور خود را وارد کنید </span>

        </div>

        <Formik
            initialValues={{phoneOrGmail: '', password: '', rememberMe: false}}
            onSubmit={(values) => {onSubmit(values)}}
        >

            <FormGenerate />

        </Formik>

        <div className='my-5'> 
            <span> حساب کاربری ندارید؟ <Link to='/register' className='underline iranSansBold'>ایجاد حساب کاربری</Link> </span>
        </div>

        <div className='w-4/6 flex flex-col items-end md:hidden mt-10'>
        <div className='w-full h-16 my-8 flex items-center' style={{direction : 'rtl'}}> 
            <div className='block size-12 bg-blue-600 rounded-full flex items-center'> <MailEdit02Icon className='m-auto text-white'/> </div>
            <span className='inline iranSansBold mr-5 whitespace-nowrap w-full'> وارد کردن شماره همراه یا ایمیل </span>
        </div>
        <div className='flex items-center w-full h-14' style={{direction : 'rtl'}} >
            <div className='block size-12 bg-white rounded-full flex items-center'> <PasswordValidationIcon className='m-auto text-gray-500'/> </div>
            <span className='inline text-sm font-semibold mr-5 text-gray-700 w-56' style={{direction: 'rtl'}} > تایید کد ارسال شده
            ( درصورتی که دو مرحله ای فعال باشد ) </span>
        </div>
        </div>

    </div>
  )
}

export default LeftLogin
