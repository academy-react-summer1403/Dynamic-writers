import React from 'react'
import { Field, Form, Formik } from 'formik';
import BahrLogo from '../../../assets/Bahr.png'
import { EyeIcon, LockPasswordIcon, MailEdit02Icon, MailOpen01Icon, PasswordValidationIcon, UserAccountIcon, ViewIcon } from 'hugeicons-react'
import { Button } from '@nextui-org/react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../index.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setItem } from '../../../core/services/common/storage';
import { RegisterAPI } from '../../../core/services/api/register/RegisterAPI';
import { ToastWarn } from '../../../core/services/common/Toast/ToastWarn';

const LeftRegisterAccount = () => {

  const navigate = useNavigate()

  const onSubmit = async (values) => {

    const registerObg = {
        password: values.password, gmail: values.gmail
    }
    
    const response = await RegisterAPI(registerObg)

    if(response.success === true){
        setItem('token', response.token)
        setItem('userId', response.id)    
        navigate('/login')
    }
    else if(values.gmail === ""){
        ToastWarn(" ایمیل را وارد کنید ")
    }
    else if(values.password === ""){
        ToastWarn(" رمزعبور خود را وارد کنید ")
    }
    else{
        ToastWarn("اطلاعات وارد شده صحیح نیست")
    }

  }

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className='md:w-[70%] w-full bg-white dark:bg-black flex flex-col justify-start items-center my-7'>

        <div className='flex flex-col items-end w-4/6'>
            <Link to='/' className='w-4/6 h-10 my-2 leading-10 overflow-hidden block md:hidden mb-10' style={{direction : 'rtl'}}> 
                <img src={BahrLogo} className='w-10 inline' /> 
            </Link>
            <h2 className='my-2 md:text-3xl text-2xl font-extrabold iranSansBold' style={{direction: 'rtl'}}> 😍!به آکادمی بحر خوش اومدی </h2>
            <span className='my-4 text-gray-500 w-4/6' style={{direction: 'rtl'}}> لطفا اطلاعات شخصی حساب کاربری خود را وارد کنید  </span>

        </div>

        <Formik
            initialValues={{gmail: '', password: ''}}
            onSubmit={(values) => {onSubmit(values)}}
        >

            <Form className='w-4/6 mt-20 relative flex flex-col gap-3' style={{direction: 'rtl'}}>
          
                <h2 className='font-bold'>  ایمیل </h2>
                <div className='w-full relative'>
                    <Field name="gmail" type="email" className='w-full p-3 dark:bg-slate-600 dark:text-white dark:border-none rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
                    focus:border-2 font-semibold pr-12' placeholder="ایمیل خود را وارد کنید" /> 
                    <MailOpen01Icon className='absolute right-3 top-2 text-gray-500 focus:hidden' />
                </div>

                <h2 className='mt-2 font-bold'> رمز عبور </h2>
                <div className='w-full relative'>
                    <Field name="password" type={isVisible ? "password" : "text"} className='dark:bg-slate-600 dark:text-white dark:border-non w-full p-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
                    focus:border-2 font-semibold pr-12 relative' placeholder="رمزعبور خود را وارد کنید" />

                    <button className="focus:outline-none absolute left-3 top-2 fixed" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                        {isVisible ? (
                            <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <ViewIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>

                    <LockPasswordIcon className='absolute right-3 top-2 text-gray-500 focus:hidden' />
                </div>

                <Button type='submit' className='bg-blue-600 text-white w-full rounded-full font-semibold'>
                    ثبت اطلاعات
                </Button> 

                <ToastContainer />

            </Form>

        </Formik>


        <div className='w-4/6 flex flex-col items-end md:hidden mt-10'>
        <div className='w-5/6 h-16 my-8 flex items-center' style={{direction : 'rtl'}}> 
            <div className='block size-14 min-w-14 min-h-14 bg-blue-600 rounded-full flex items-center'> <MailEdit02Icon className='m-auto text-white'/> </div>
            <span className='inline text-small text-gray-500 font-semibold mr-5 min-w-40'> وارد کردن شماره همراه   </span>
        </div>
        <div className='flex items-center w-4/6 h-14' style={{direction : 'rtl'}} >
            <div className='block size-14 min-w-14 min-h-14 bg-blue-600 rounded-full flex items-center'> <PasswordValidationIcon className='m-auto text-white'/> </div>
            <span className='inline text-small text-gray-500 font-semibold mr-5 min-w-40' style={{direction: 'rtl'}} >  تایید کد ارسال شده به شماره هماره </span>
        </div>
        <div className='flex items-center w-4/6 h-14 my-6' style={{direction : 'rtl'}} >
            <div className='block size-14 min-w-14 min-h-14 bg-blue-600 rounded-full flex items-center'> <UserAccountIcon className='m-auto text-white'/> </div>
            <span className='inline text-xl font-semibold mr-5 min-w-40' style={{direction: 'rtl'}} >  وارد کردن اطلاعات حساب کاربری </span>
        </div>
        </div>

    </div>
  )
}

export default LeftRegisterAccount