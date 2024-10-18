import { Moon02Icon, Notification02Icon, PencilEdit01Icon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import Bahr from '../../../../assets/Bahr.png' 
import { Link } from 'react-router-dom'
import { Switch } from '@nextui-org/react'
import { getSecurityInfo } from '../../api/SecurityAPI/getSecurityInfo'

const HeaderPanel = ({ editingImage, profileInfo }) => {

  return (
    <div className='md:bg-white rounded-2xl flex justify-between flex-row-reverse md:px-3 w-full' style={{height: '80px'}}>
      <div className='md:flex gap-4 h-full w-fit flex-row-reverse items-center hidden'>
        <div className='size-14 flex items-center rounded-full relative'>
            <img src={profileInfo.userImage} className='rounded-full size-14 border bg-red-300' />
            <div onClick={editingImage} className='cursor-pointer size-4 bg-blue-500 rounded-full absolute right-1 bottom-1 flex items-center justify-center'> <PencilEdit01Icon className='size-3 font-semibold text-white' /> </div>
        </div>
        <div className='flex flex-col'>
            <h2 className='font-semibold text-xl text-right'> {profileInfo.fName || profileInfo.lName ? [profileInfo.lName , ' ' , profileInfo.fName] : "نامشخص"}  </h2>
            <span className='text-gray-500 text-right'> ادمین ، دانشجو </span>
        </div>
      </div>
      <Link to='/' className='flex md:hidden flex-row-reverse justify-between gap-3 items-center'>
          <img src={Bahr} className='size-10' />
      </Link>
      <div className='flex h-full w-fit gap-3 items-center'>
        <div className='border bg-white size-14 rounded-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'> <Moon02Icon className='size-6' /> </div>
        <div className='border bg-white size-14 rounded-full flex justify-center items-center cursor-pointer relative hover:text-white hover:bg-yellow-300'> 
            <Notification02Icon className='size-6' />
            <div className='size-4 bg-red-500 text-white flex text-10 justify-center items-center absolute right-0 bottom-0 rounded-full'> 5 </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderPanel
