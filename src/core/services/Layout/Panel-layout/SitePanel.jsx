import React from 'react'
import Bahr from '../../../../assets/Bahr.png' 
import { Book02Icon, Invoice02Icon,Bookmark02Icon, DashboardCircleIcon, FileBookmarkIcon, Logout03Icon, SecurityIcon, TimeSetting03Icon, UserEdit01Icon, UserSettings01Icon, JobLinkIcon, TimeScheduleIcon } from 'hugeicons-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { removeItem } from '../../common/storage'

const SitePanel = () => {

  const navigate = useNavigate()

  return (
    <div className='dark:bg-slate-700 dark:text-white bg-white rounded-2xl gap-5 lg:flex flex-col min-w-[276px] h-dvh py-7 px-6 justify-between hidden'>
      <div className='flex flex-col gap-4'>
        <div onClick={() => navigate('/')} className='flex gap-2 items-center cursor-pointer'>
          <img src={Bahr} className='size-[40px] ' />
          <h1 className='text-blue-400 text-[22px] font-semibold'> Dynamic Writers </h1>
        </div>

        <div className='flex flex-col w-full h-fit gap-6 justify-center' dir='rtl'>
          <div className='flex flex-col w-full h-fit gap-3 font-semibold justify-center'>
              <NavLink to='dashboard' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> داشبورد <DashboardCircleIcon /> </NavLink>
              <NavLink to='myCourse' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> دوره من <Book02Icon /> </NavLink>
              <NavLink to='myReserve' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> رزرو من <TimeSetting03Icon /> </NavLink>
              <NavLink to='myPayment' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> پرداخت های من <Invoice02Icon /> </NavLink>
              <NavLink to='myJobs' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> شغل های من <JobLinkIcon /> </NavLink>
              <NavLink to='favCourse' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> علاقه مندی دوره <Bookmark02Icon /> </NavLink>
              <NavLink to='favNews' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> علاقه مندی مقالات <FileBookmarkIcon /> </NavLink>
              <NavLink to='profile' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> پروفایل <UserEdit01Icon /> </NavLink>
              <NavLink to='security' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> امنیت <SecurityIcon /> </NavLink>
              <NavLink to='schedule' className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }> زمان بندی <TimeScheduleIcon /> </NavLink>
              <NavLink to={'multiAccounts'} className={({isActive}) => isActive ? "bg-blue-500 hover:bg-blue-300 text-white w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" : "bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 text-black w-full h-10 flex items-center px-3 rounded-3xl flex-row-reverse gap-3 justify-end" }>  حساب‌های کابری <UserSettings01Icon /> </NavLink>
              <NavLink to='/' onClick={() => removeItem('token')} className='hover:bg-red-500 dark:bg-red-500 dark:border-none dark:text-white hover:text-white bg-white border text-red-500 w-full p-2 rounded-full flex text-right text-lg justify-end gap-4 font-semibold flex-row-reverse'> خروج از حساب <Logout03Icon /> </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SitePanel
