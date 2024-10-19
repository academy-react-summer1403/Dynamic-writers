import { Button, Input, Switch } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { getSecurityInfo } from '../../../core/services/api/SecurityAPI/getSecurityInfo'
import { ComputerIcon, FileVerifiedIcon, SecurityCheckIcon, SecurityLockIcon } from 'hugeicons-react'

const SecurityCom = () => {

    
  const [securityInfo, setSecurityInfo] = useState([])

  const getSecurity = async () => {
    const response = await getSecurityInfo()
    setSecurityInfo(response)
  }

  useEffect(() => {
    getSecurity()
  }, [])

  // return (
  //   <div className='p-2 bg-white w-[1192px] h-[220px] rounded-2xl my-5 flex flex-col items-start gap-2' dir='rtl'>
  //       <div className='flex flex-col gap-5 w-[500px]'>
  //           <Switch defaultSelected={(securityInfo.twoStepAuth === true) ? true : false} classNames={{
  //               wrapper: 'md:bg-gray-100 bg-white', 
  //               }}>
  //               <div className='bg-blue-300 text-white rounded-full p-1 flex gap-1 text-sm items-center px-2'>
  //                   <SecurityLockIcon className='size-4' />
  //                   حساب دو مرحله
  //               </div>
  //           </Switch>
  //           <div className=' w-full flex flex-col gap-2 my-2'>
  //               <span className='text-base font-[700]'> ایمیل </span>
  //               <Input className='w-full' placeholder=' لطفا ایمیل را وارد فرمایید' startContent={<ComputerIcon className='text-gray-500' />} />
  //           </div>
  //       </div>
  //       <Button className='cursor-pointer items-center text-sm font-[600] w-[500px] max-w-[500px] bg-blue-500 text-white rounded-full px-2 py-1 flex gap-2'> تایید دو مرحله ای <SecurityCheckIcon className='size-5' /> </Button>
  //   </div>
  // )
}

export default SecurityCom
