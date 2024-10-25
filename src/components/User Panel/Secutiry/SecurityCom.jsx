import { Button, Input, Switch } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { getSecurityInfo } from '../../../core/services/api/SecurityAPI/getSecurityInfo'
import { ArrowRight01Icon, ArrowRight02Icon, ArrowRight03Icon, ArrowRight05Icon, ComputerIcon, EyeIcon, FileVerifiedIcon, LockPasswordIcon, SecurityCheckIcon, SecurityLockIcon, ViewIcon } from 'hugeicons-react'
import round2 from '../../../assets/round2.png'
import round3 from '../../../assets/round3.png'
import { editSecurity } from '../../../core/services/api/SecurityAPI/EditSecurity'
import { toast, ToastContainer } from 'react-toastify'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router'
import { message } from 'antd'
import { ResetPass } from '../../../core/services/api/reasetPassword/ResetPassAcc'

const SecurityCom = () => {

  const [securityInfo, setSecurityInfo] = useState([])

  const [recoveryEmail, setRecoveryEmail] = useState('')
  const [isSelected, setIsSelected] = useState(false);

  const notifySuccess = (message) => {toast.dismiss() , toast(message, {autoClose: '20000'})}
  const notifyError = (message) => {toast.dismiss() , toast.error(message)}

  const navigate = useNavigate()

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibility2 = () => setIsVisible2(!isVisible2);

  const getSecurity = async () => {
    const response = await getSecurityInfo()
    setSecurityInfo(response)

    setIsSelected(response.twoStepAuth)
  }

  const EditSecurity = async () => {
    if(recoveryEmail === '') {
      notifyError(' لطفا ایمیل خود را وارد کنید ')
    }
    else{
      const response = await editSecurity(recoveryEmail, isSelected)
      if(response.success === true) {
        // notifySuccess(response.message)
        notifySuccess(' عملیات با موفقیت انجام شد! ')
      }
      else{
        notifyError(' خطا ')
      }
    }
  }

  const onSubmitPassword = async (values) => {

    const notifyEmpty = () => {
        toast.error(" رمز عبور خود را وارد کنید ", {
            autoClose: 5000
        })
    }

    const passwordObj = {oldPassword: values.oldPassword, newPassword: values.newPassword}

    console.log(passwordObj)
    const response = await ResetPass(passwordObj)

    if(values.newPassword === "" || values.oldPassword === "") {
        notifyEmpty()
    }
    else if(response ? response.success === true : response) {
        notifySuccess(response.message)
    }
    else{
      notifyError(' رمز شما صحیح نمی باشد ')
    }

    }

  useEffect(() => {
    getSecurity()
  }, [])

  return (
    <div className='p-2 dark:bg-slate-700 bg-white w-full h-full rounded-2xl my-5 flex flex-row-reverse justify-center md:justify-around items-start gap-2' dir='rtl'>
        <div className='flex flex-col w-full h-full justify-around'>
        <div className='md:flex hidden mx-10 flex-row-reverse justify-center items-center gap-16 w-full'>
          <div className='relative flex flex-col justify-center items-center gap-4'>
            <h1 className='text-blue-500 font-[800] text-[30px]'> دو مرحله ای </h1>
            <h2 className='text-[12px] text-center max-w-[200px] text-blue-500 font-600'>  پس از دو مرحله ای کردن اکانت خود می توانید از امنیت بیشتری بهره مند شوید و توسعه ما به شما این است </h2>
            <img className='size-[20px] absolute top-0 -right-5' src={round2} />
            <div className='bg-blue-500 rounded-full size-2 absolute top-0 -left-3'></div>
            <img className='size-[30px] absolute bottom-0 -left-10' src={round3} />
          </div>
          <ArrowRight02Icon className='text-blue-500' />
        </div>
        <div className='md:flex hidden mx-10 flex-row-reverse justify-center items-center gap-16 w-full'>
          <div className='relative flex flex-col justify-center items-center gap-4'>
            <h1 className='text-blue-500 font-[800] text-[30px]'> تغییر رمز عبور </h1>
            <h2 className='text-[12px] text-center max-w-[200px] text-blue-500 font-600'> شما می توانید رمز عبور خود را تغییر دهید و از سخت بودن رمز عبور خود جلوگیری کنید </h2>
            <img className='size-[20px] absolute top-0 -right-5' src={round2} />
            <div className='bg-blue-500 rounded-full size-2 absolute top-0 -left-3'></div>
            <img className='size-[30px] absolute bottom-0 -left-10' src={round3} />
          </div>
          <ArrowRight02Icon className='text-blue-500' />
        </div>
        </div>
        <div className='flex flex-col w-full'>
        <div className='flex flex-col gap-5 w-full border-b-2 dark:border-gray-400 pb-10'>
            <Switch isSelected={isSelected} onValueChange={setIsSelected} classNames={{
                wrapper: 'md:bg-gray-100 bg-white dark:bg-slate-800', 
                }}>
                <div className='truncate bg-blue-300 text-white dark:bg-slate-800 rounded-full p-1 flex gap-1 text-sm items-center px-2'>
                    <SecurityLockIcon className='size-4' />
                   حساب دو مرحله ای
                </div>
            </Switch>
            <div className=' w-full flex flex-col gap-2 my-2'>
                <span className='text-base font-[700]'> ایمیل </span>
                <Input type='email' onChange={(e) => setRecoveryEmail(e.target.value)} classNames={{inputWrapper: 'dark:bg-slate-900'}} className='w-full' placeholder=' لطفا ایمیل را وارد فرمایید' startContent={<ComputerIcon className='text-gray-500' />} />
                <Button onClick={EditSecurity} className='cursor-pointer items-center text-sm font-[600] w-full  bg-blue-500 text-white rounded-xl px-2 py-1 flex gap-2'> تایید تغییرات <SecurityCheckIcon className='size-5' /> </Button>
            </div>
        </div>
        <Formik
            initialValues={{oldPassword: '', NewPassword: ''}}
            onSubmit={(values) => {onSubmitPassword(values)}}
        >
            <Form className='w-full relative' style={{direction: 'rtl'}}>

                <h2 className='mb-2 mt-5 font-bold'>  رمز عبور </h2>
                <div className='min-w-80 flex relative'>
                    <Field name="oldPassword" type={isVisible ? "text" : "password"} className='dark:bg-slate-900 dark:border-none dark:text-white min-w-80 w-full p-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
                    focus:border-2 font-semibold pr-12 relative' placeholder="رمزعبور جدید خود را وارد کنید" />

                    <button className="focus:outline-none absolute left-3 top-2" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                        {isVisible ? (
                            <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <ViewIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>

                    <LockPasswordIcon className='absolute right-3 top-2 text-gray-500 focus:hidden' />
                </div>

                <h2 className='mb-2 mt-5 font-bold'> رمز عبور جدید  </h2>
                <div className='min-w-80 flex relative'>
                    <Field name="newPassword" type={isVisible2 ? "text" : "password"} className='min-w-80 dark:bg-slate-900 w-full p-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
                    focus:border-2 font-semibold pr-12 relative' placeholder="رمزعبور جدید خود را دوباره وارد کنید" />

                    <button className="focus:outline-none absolute left-3 top-2" type="button" onClick={toggleVisibility2} aria-label="toggle password visibility">
                        {isVisible2 ? (
                            <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <ViewIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>

                    <LockPasswordIcon className='absolute right-3 top-2 text-gray-500 focus:hidden' />
                </div>

                <Button type='submit' color="primary" className='block w-full rounded-full font-semibold relative top-3 min-w-80'>
                    تایید رمز عبور
                </Button>

            </Form>

        </Formik>
        </div>
        <ToastContainer />
    </div>
  )
}

export default SecurityCom
