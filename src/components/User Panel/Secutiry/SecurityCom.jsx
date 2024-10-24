import { Button, Input, Switch } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { getSecurityInfo } from '../../../core/services/api/SecurityAPI/getSecurityInfo'
import { ArrowRight01Icon, ArrowRight02Icon, ArrowRight03Icon, ArrowRight05Icon, ComputerIcon, FileVerifiedIcon, SecurityCheckIcon, SecurityLockIcon } from 'hugeicons-react'
import round2 from '../../../assets/round2.png'
import round3 from '../../../assets/round3.png'
import { editSecurity } from '../../../core/services/api/SecurityAPI/EditSecurity'
import { toast, ToastContainer } from 'react-toastify'

const SecurityCom = () => {

  const [securityInfo, setSecurityInfo] = useState([])

  const [recoveryEmail, setRecoveryEmail] = useState('')
  const [isSelected, setIsSelected] = useState(false);

  const notifySuccess = (message) => {toast.dismiss() , toast(message, {autoClose: '20000'})}
  const notifyError = (message) => {toast.dismiss() , toast.error(message)}

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

  useEffect(() => {
    getSecurity()
  }, [])

  return (
    <div className='p-2 dark:bg-slate-700 bg-white w-full h-[220px] rounded-2xl my-5 flex flex-row-reverse justify-between items-start gap-2' dir='rtl'>
        <div className='md:flex w-[692px] hidden flex-row-reverse justify-center h-full items-center gap-16'>
          <div className='relative flex flex-col justify-center items-center gap-4'>
            <h1 className='text-blue-500 font-[800] text-[30px]'> دو مرحله ای </h1>
            <h2 className='text-[12px] text-center w-[200px] text-blue-500 font-600'>  پس از دو مرحله ای کردن اکانت خود می توانید از امنیت بیشتری بهره مند شوید و توسعه ما به شما این است </h2>
            <img className='size-[20px] absolute top-0 -right-5' src={round2} />
            <div className='bg-blue-500 rounded-full size-2 absolute top-0 -left-3'></div>
            <img className='size-[30px] absolute bottom-0 -left-10' src={round3} />
          </div>
          <ArrowRight02Icon className='text-blue-500' />
        </div>
        <div className='flex flex-col gap-5 w-[500px]'>
            <Switch isSelected={isSelected} onValueChange={setIsSelected} classNames={{
                wrapper: 'md:bg-gray-100 bg-white dark:bg-slate-800', 
                }}>
                <div className='bg-blue-300 text-white dark:bg-slate-800 rounded-full p-1 flex gap-1 text-sm items-center px-2'>
                    <SecurityLockIcon className='size-4' />
                   حساب دو مرحله ای
                </div>
            </Switch>
            <div className=' w-full flex flex-col gap-2 my-2'>
                <span className='text-base font-[700]'> ایمیل </span>
                <Input type='email' onChange={(e) => setRecoveryEmail(e.target.value)} className='w-full' placeholder=' لطفا ایمیل را وارد فرمایید' startContent={<ComputerIcon className='text-gray-500' />} />
                <Button onClick={EditSecurity} className='cursor-pointer items-center text-sm font-[600] w-full max-w-[500px] bg-blue-500 text-white rounded-xl px-2 py-1 flex gap-2'> تایید تغییرات <SecurityCheckIcon className='size-5' /> </Button>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default SecurityCom
