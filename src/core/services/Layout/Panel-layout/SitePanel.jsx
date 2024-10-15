import React, { useEffect, useState } from 'react'
import Bahr from '../../../../assets/Bahr.png' 
import Bahr2 from '../../../../assets/Bahr2.png' 
import { Button } from '@nextui-org/react'
import { Book02Icon, BookBookmark02Icon, Bookmark02Icon, DashboardCircleIcon, DashboardCircleSettingsIcon, FileBookmarkIcon, Logout03Icon, MoneySend01Icon, MoneySend02Icon, TimeSetting02Icon, TimeSetting03Icon, UserEdit01Icon, UserSettings01Icon } from 'hugeicons-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { removeItem } from '../../common/storage'

const SitePanel = () => {

  const navigate = useNavigate()

  return (
    <div className='bg-white rounded-2xl md:flex flex-col py-7 px-6 justify-between hidden'>
      <div className='flex flex-col gap-12'>
        <div onClick={() => navigate('/')} className='flex flex-row-reverse justify-between gap-3 items-center'>
          <img src={Bahr} className='size-10' />
          <img src={Bahr2} className='h-8 w-48' />
        </div>

        <div className='flex flex-col w-full h-fit gap-10 justify-center' dir='rtl'>
          <div className='flex flex-col w-full h-fit gap-3 font-semibold justify-center'>
              <h2 className='text-gray-600 font-semibold'> عمومی </h2>
              <NavLink to='dashboard' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> داشبرد <DashboardCircleIcon /> </NavLink>
              <NavLink to='myCourse' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> دوره من <Book02Icon /> </NavLink>
              <NavLink to='myReserve' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> رزرو من <TimeSetting03Icon /> </NavLink>
              <NavLink to='favCourse' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> علاقه مندی دوره <Bookmark02Icon /> </NavLink>
              <NavLink to='favNews' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> علاقه مندی مقالات <FileBookmarkIcon /> </NavLink>
              <NavLink to='profile' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> پروفابل <UserEdit01Icon /> </NavLink>
          </div>
          <div className='flex flex-col w-full h-fit gap-3 justify-center'>
            <h2 className='text-gray-600 font-semibold'> مالی </h2>
            <Button onClick={() => navigate('')} className='hover:bg-blue-700 hover:text-white bg-white w-full p-2 rounded-full flex flex-row-reverse text-right text-lg justify-end gap-4 font-semibold'> پرداخت ها <MoneySend02Icon /> </Button>
          </div>
        </div>
      </div>

      <div className='flex w-full h-fit gap-4 flex-col mt-16'>
        <NavLink onClick={() => navigate('')} className='hover:bg-blue-700 hover:text-white bg-white border w-full p-2 rounded-full flex text-right text-lg justify-end gap-4 font-semibold'>  حساب‌های کابری <UserSettings01Icon /> </NavLink>
        <NavLink to='/login' onClick={() => removeItem('token')} className='hover:bg-red-500 hover:text-white bg-white border text-red-500 w-full p-2 rounded-full flex text-right text-lg justify-end gap-4 font-semibold'> خروج از حساب <Logout03Icon /> </NavLink>
      </div>
    </div>
  )
}

export default SitePanel
