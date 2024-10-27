    import React from 'react'
    import { Formik, Form, Field } from 'formik';
    import BahrLogo from '../../../assets/Bahr.png'
    import { Mail01Icon, MailEdit02Icon, PasswordValidationIcon, SecurityCheckIcon,  } from 'hugeicons-react'
    import { Link, useNavigate } from 'react-router-dom';
    import { toast, ToastContainer } from 'react-toastify'
    import 'react-toastify/dist/ReactToastify.css';
    import { Button, Spinner } from '@nextui-org/react';
    import { ForgetPass } from '../../../core/services/api/reasetPassword/ForgetPass';
    import { setItem } from '../../../core/services/common/storage';
import { ToastError } from '../../../core/services/common/Toast/ToastError';
import { ToastWarn } from '../../../core/services/common/Toast/ToastWarn';
    
    const LeftResetPass1 = () => {
        
    const navigate = useNavigate()

    const onSubmit = async (values) => {

        const WaitingEmail = () => {
            toast.dismiss()
            toast("ایمیل فرستاده شد لطفا چک کنید", {
                autoClose: 20000,
                isLoading: <Spinner classNames={{wrapper: 'text-blue-500'}} />,
            })
        }

        const respone = await ForgetPass(values.email)

        if(values.email === "") {
            ToastWarn(" ایمیل خود را وارد کنید ")
        }
        else if(respone ? respone.success === true : respone) {
            WaitingEmail()
            setItem('userId', respone.id) 
        }
        else {
            ToastError(" ایمیل وارد شده صحیح نمی باشد ")
        }

    }
    
      return (
        <div className='grow-8 bg-white dark:bg-black flex flex-col justify-start items-center my-7'>
    
            <div className='flex flex-col items-end w-4/6'>
                <Link to='/' className='w-4/6 h-10 my-2 leading-10 overflow-hidden block md:hidden mb-10' style={{direction : 'rtl'}}> 
                    <img src={BahrLogo} className='w-10 inline' /> 
                </Link>
                <h2 className='my-2 font-medium text-3xl font-extrabold iranSansBold'> 🔐فراموشی رمزعبور؟ </h2>
                <span className='my-4 text-gray-500 w-4/6 min-w-60' style={{direction: 'rtl'}}> اگر رمزعبور خود را فراموش کرده‌اید ایمیل خود را وارد کنید تا لینک صفحه تغییر رمزعبور برای شما ارسال شود </span>
    
            </div>
    
            <Formik
                initialValues={{email: ''}}
                onSubmit={(values) => {onSubmit(values)}}
            >
                <Form className='w-8/12 mt-20 relative' style={{direction: 'rtl'}}>
    
                    <h2 className='mb-2 mt-5 font-bold'>  ایمیل </h2>
                    <div className='w-full relative'>
                        <Field name="email" type='email' className='min-w-80 w-full p-3 rounded-md dark:bg-slate-600 dark:border-none dark:text-white bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
                        focus:border-2 font-semibold relative pr-12' placeholder="ایمیل خود را وارد کنید" />

                        <Mail01Icon className='absolute right-3 top-2 text-gray-500 focus:hidden' />    
                    </div>

                    <Button type='submit' color="primary" className='block w-full rounded-full font-semibold relative top-3 min-w-80'>
                        ارسال لینک 
                    </Button>
    
                    <ToastContainer />

                </Form>
    
            </Formik>
    
            <div className='my-5'> 
                <span>  رمزعبور خود فراموش نکردید؟  <Link to='/login' className='underline iranSansBold'>ورود به حساب کاربری</Link> </span>
            </div>
    
            <div className='w-4/6 flex flex-col items-end md:hidden mt-10'>
            <div className='w-5/6 h-16 my-8 flex items-center' style={{direction : 'rtl'}}> 
              <div className='block min-w-14 min-h-14 bg-blue-600 rounded-full flex items-center'> <MailEdit02Icon className='m-auto text-white'/> </div>
              <span className='inline text-xl font-semibold mr-5 whitespace-nowrap'> وارد کردن ایمیل </span>
            </div>
            <div className='flex items-center w-4/6 h-14' style={{direction : 'rtl'}} >
                <div className='block min-w-12 min-h-12 bg-white rounded-full flex items-center'> <PasswordValidationIcon className='m-auto text-gray-500'/> </div>
                <span className='inline text-sm font-semibold mr-5 text-gray-600 min-w-52' style={{direction: 'rtl'}} > وارد کردن رمزعبور جدید </span>
            </div>
            </div>
    
        </div>
      )
    }
    
    export default LeftResetPass1
    