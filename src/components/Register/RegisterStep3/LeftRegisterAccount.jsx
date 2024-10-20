import React from 'react'
import { Field, Form, Formik } from 'formik';
import BahrLogo from '../../../assets/Bahr.png'
import { EyeIcon, LockPasswordIcon, MailEdit02Icon, MailOpen01Icon, PasswordValidationIcon, UserAccountIcon, ViewIcon } from 'hugeicons-react'
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import '../../../index.css'
import { toast, ToastContainer } from 'react-toastify';
import { RegisterAPI } from '../../../core/services/api/register/registerAPI';
import 'react-toastify/dist/ReactToastify.css';
import { setItem } from '../../../core/services/common/storage';

const LeftRegisterAccount = () => {

  const navigate = useNavigate()

  const onSubmit = async (values) => {

    const registerObg = {
        password: values.password, gmail: values.gmail
    }
    
    const response = await RegisterAPI(registerObg)



    const notify = () => {

    toast.error("اطلاعات وارد شده صحیح نیست", {
        autoClose: 5000,
        })
    }

    const notifyGmail = () => {

    toast.error(" ایمیل را وارد کنید ", {
        autoClose: 5000,
        })
    }

    const notifyPassword = () => {

    toast.error(" رمزعبور خود را وارد کنید ", {
        autoClose: 5000,
        })
    }
    if(response.success === true){
        setItem('token', response.token)
        setItem('userId', response.id)    
        navigate('/layoutPanel/dashboard')
    }
    else if(values.gmail === ""){
        notifyGmail()
    }
    else if(values.password === ""){
        notifyPassword()
    }
    else{
        notify()
    }

  }

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className='grow-8 bg-white dark:bg-black flex flex-col justify-start items-center my-7'>

        <div className='flex flex-col items-end w-4/6 min-w-96'>
            <div className='w-4/6 h-10 my-2 leading-10 overflow-hidden block md:hidden mb-10' style={{direction : 'rtl'}}> 
                <img src={BahrLogo} className='w-10 inline' /> 
            </div>
            <h2 className='my-2 font-medium text-3xl font-extrabold iranSansBold whitespace-nowrap' style={{direction: 'rtl'}}> 😍!به آکادمی بحر خوش اومدی </h2>
            <span className='my-4 text-gray-500 w-4/6 min-w-60' style={{direction: 'rtl'}}> لطفا اطلاعات شخصی حساب کاربری خود را وارد کنید  </span>

        </div>

        <Formik
            initialValues={{gmail: '', password: ''}}
            onSubmit={(values) => {onSubmit(values)}}
        >

            <Form className='w-4/6 mt-20 relative flex flex-col gap-3' style={{direction: 'rtl'}}>
          
                <h2 className='font-bold'>  ایمیل </h2>
                <div className='w-full relative'>
                    <Field name="gmail" type="email" className='min-w-80 w-full p-3 dark:bg-slate-600 dark:text-white dark:border-none rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
                    focus:border-2 font-semibold pr-12' placeholder="ایمیل خود را وارد کنید" /> 
                    <MailOpen01Icon className='absolute right-3 top-2 text-gray-500 focus:hidden' />
                </div>

                <h2 className='mt-2 font-bold'> رمز عبور </h2>
                <div className='w-full relative'>
                    <Field name="password" type={isVisible ? "password" : "text"} className='dark:bg-slate-600 dark:text-white dark:border-none min-w-80 w-full p-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
                    focus:border-2 font-semibold pr-12 relative' placeholder="رمزعبور خود را وارد کنید" />

                    <button className="focus:outline-none absolute left-3 top-2" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                        {isVisible ? (
                            <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <ViewIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>

                    <LockPasswordIcon className='absolute right-3 top-2 text-gray-500 focus:hidden' />
                </div>

                <Button type='submit' className='bg-blue-600 text-white w-full rounded-full min-w-80 font-semibold'>
                    ثبت اطلاعات
                </Button> 

                <ToastContainer />

            </Form>

        </Formik>


        <div className='w-4/6 flex flex-col items-end md:hidden mt-10'>
        <div className='w-5/6 h-16 my-8 flex items-center' style={{direction : 'rtl'}}> 
            <div className='block size-14 min-w-14 min-h-14 bg-blue-600 rounded-full flex items-center'> <MailEdit02Icon className='m-auto text-white'/> </div>
            <span className='inline text-small text-gray-500 font-semibold mr-5 whitespace-nowrap'> وارد کردن شماره همراه   </span>
        </div>
        <div className='flex items-center w-4/6 h-14' style={{direction : 'rtl'}} >
            <div className='block size-14 min-w-14 min-h-14 bg-blue-600 rounded-full flex items-center'> <PasswordValidationIcon className='m-auto text-white'/> </div>
            <span className='inline text-small text-gray-500 font-semibold mr-5 whitespace-nowrap' style={{direction: 'rtl'}} >  تایید کد ارسال شده به شماره هماره </span>
        </div>
        <div className='flex items-center w-4/6 h-14 my-6' style={{direction : 'rtl'}} >
            <div className='block size-14 min-w-14 min-h-14 bg-blue-600 rounded-full flex items-center'> <UserAccountIcon className='m-auto text-white'/> </div>
            <span className='inline text-xl font-semibold mr-5 whitespace-nowrap' style={{direction: 'rtl'}} >  وارد کردن اطلاعات حساب کاربری </span>
        </div>
        </div>

    </div>
  )
}

export default LeftRegisterAccount