import React, { useEffect, useState } from 'react'
import Bahr from '../../../../assets/Bahr.png' 
import Bahr2 from '../../../../assets/Bahr2.png' 
import { Button } from '@nextui-org/react'
import { Book02Icon, BookBookmark02Icon, Bookmark02Icon, DashboardCircleIcon, DashboardCircleSettingsIcon, FileBookmarkIcon, Logout03Icon, MoneySend01Icon, MoneySend02Icon, SecurityIcon, TimeSetting02Icon, TimeSetting03Icon, UserEdit01Icon, UserSettings01Icon } from 'hugeicons-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { removeItem } from '../../common/storage'

const SitePanel = () => {

  const navigate = useNavigate()

  return (
    <div className='dark:bg-slate-700 dark:text-white bg-white rounded-2xl gap-5 lg:flex flex-col min-w-[276px] h-dvh py-7 px-6 justify-between hidden'>
      <div className='flex flex-col gap-12'>
        <div onClick={() => navigate('/')} className='flex gap-2 items-end'>
          <img src={Bahr} className='size-[40px] ' />
          <img src={Bahr2} className='h-[28px] w-[149px]' />
        </div>

        <div className='flex flex-col w-full h-fit gap-10 justify-center' dir='rtl'>
          <div className='flex flex-col w-full h-fit gap-3 font-semibold justify-center'>
              <h2 className='text-gray-600 font-semibold dark:text-white'> عمومی </h2>
              <NavLink to='dashboard' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> داشبرد <DashboardCircleIcon /> </NavLink>
              <NavLink to='myCourse' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> دوره من <Book02Icon /> </NavLink>
              <NavLink to='myReserve' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> رزرو من <TimeSetting03Icon /> </NavLink>
              <NavLink to='favCourse' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> علاقه مندی دوره <Bookmark02Icon /> </NavLink>
              <NavLink to='favNews' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> علاقه مندی مقالات <FileBookmarkIcon /> </NavLink>
              <NavLink to='profile' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> پروفایل <UserEdit01Icon /> </NavLink>
              <NavLink to='security' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> امنیت <SecurityIcon /> </NavLink>
          </div>
          {/* <div className='flex flex-col w-full h-fit gap-3 justify-center'>
            <h2 className='text-gray-600 font-semibold dark:text-white'> مالی </h2>
            <Button onClick={() => navigate('')} className='hover:bg-blue-700 hover:text-white dark:bg-slate-900 dark:text-white bg-white w-full p-2 rounded-full flex flex-row-reverse text-right text-lg justify-end gap-4 font-semibold'> پرداخت ها <MoneySend02Icon /> </Button>
          </div> */}
        </div>
      </div>

      <div className='flex w-full h-fit gap-4 flex-col'>
        <NavLink onClick={() => navigate('')} className='hover:bg-blue-700 dark:bg-slate-900 dark:text-white dark:border-none hover:text-white bg-white border w-full p-2 rounded-full flex text-right text-lg justify-end gap-4 font-semibold flex-row-reverse'>  حساب‌های کابری <UserSettings01Icon /> </NavLink>
        <NavLink to='/login' onClick={() => removeItem('token')} className='hover:bg-red-500 dark:bg-red-500 dark:border-none dark:text-white hover:text-white bg-white border text-red-500 w-full p-2 rounded-full flex text-right text-lg justify-end gap-4 font-semibold flex-row-reverse'> خروج از حساب <Logout03Icon /> </NavLink>
      </div>
    </div>
  )
}

export default SitePanel
