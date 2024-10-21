import { Moon02Icon, Notification02Icon, PencilEdit01Icon, Sun01Icon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import Bahr from '../../../../assets/Bahr.png' 
import { Link } from 'react-router-dom'
import { Switch } from '@nextui-org/react'
import { getSecurityInfo } from '../../api/SecurityAPI/getSecurityInfo'
import { getItem } from '../../common/storage'
import UserDetailsWithId from '../../api/User/UserDetailsWithId'

const HeaderPanel = ({ editingImage, profileInfo, darkMode, setDarkMode }) => {

  const getRoles = async () => {
  }

  useEffect(() => {
    getRoles()
  }, [])

  return (
    <div className='md:dark:bg-slate-700 dark:bg-slate-950 md:bg-white rounded-2xl flex justify-between flex-row-reverse md:px-3 w-full' style={{height: '80px'}}>
      <div className='md:flex gap-4 h-full w-fit flex-row-reverse items-center hidden'>
        <div className='size-14 flex items-center rounded-full relative'>
            <img src={profileInfo.currentPictureAddress} className='rounded-full size-14 border bg-red-300' />
        </div>
        <div className='flex flex-col'>
            <h2 className='font-semibold text-xl text-right'> {profileInfo.fName || profileInfo.lName ? [profileInfo.lName , ' ' , profileInfo.fName] : "نامشخص"}  </h2>
            <span className='text-gray-500 text-right flex gap-1 flex-row-reverse'>

            </span>
        </div>
      </div>
      <Link to='' className='flex md:hidden flex-row-reverse justify-between gap-3 items-center'>
          <img src={Bahr} className='size-10' />
      </Link>
      <div className='flex h-full w-fit gap-3 items-center'>
        <div className='border bg-white size-14 rounded-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-none'>
          {darkMode ? <Sun01Icon onClick={() => setDarkMode(!darkMode)} className='size-6' /> : <Moon02Icon onClick={() => setDarkMode(!darkMode)} className='size-6' /> }
        </div>
        <div className='border bg-white size-14 rounded-full flex justify-center items-center cursor-pointer relative hover:text-white hover:bg-yellow-300 dark:bg-yellow-300 dark:text-white dark:border-none'> 
            <Notification02Icon className='size-6' />
            <div className='size-4 bg-red-500 text-white flex text-10 justify-center items-center absolute right-0 bottom-0 rounded-full'> 5 </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderPanel
