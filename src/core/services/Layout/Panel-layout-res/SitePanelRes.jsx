import { Book02Icon, DashboardCircleIcon, More01Icon, MoreVerticalCircle01Icon, TimeSetting03Icon } from 'hugeicons-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MoreSitePanel from './MoreSitePanel'

const SitePanelRes = () => {

  const [more, setMore] = useState(false)

  const moreOpen = () => {
    if(more === false) {
        setMore(true)
    }
    else {
        setMore(false)
    }
  }

  return (

    <div dir='ltr' className={`flex items-center flex-row-reverse justify-between p-2 mt-10 dark:bg-slate-600 gap-4 bg-white shadow-2xl rounded-3xl lg:hidden z-40 fixed w-11/12 bottom-1 right-4`}>
      <NavLink to='/layoutPanel/dashboard' className={({isActive}) => isActive ? 'bg-blue-500 text-white size-14 rounded-full flex justify-center items-center' : 'bg-white text-black dark:bg-slate-600 dark:text-white size-12 rounded-full flex justify-center items-center'}> <DashboardCircleIcon className='size-8' /> </NavLink>
      <NavLink to='/layoutPanel/myCourse' className={({isActive}) => isActive ? 'bg-blue-500 text-white size-14 rounded-full flex justify-center items-center' : 'bg-white text-black dark:bg-slate-600 dark:text-white size-12 rounded-full flex justify-center items-center'}> <Book02Icon className='size-8' /> </NavLink>
      <NavLink to='/layoutPanel/myReserve' className={({isActive}) => isActive ? 'bg-blue-500 text-white size-14 rounded-full flex justify-center items-center' : 'bg-white text-black dark:bg-slate-600 dark:text-white size-12 rounded-full flex justify-center items-center'}> <TimeSetting03Icon className='size-8' /> </NavLink>
      <div className='active:size-12 rounded-full size-8 bg-red-300'>
        <img className='w-full h-full rounded-full' />
      </div>
      <label htmlFor='more' className='has-[:checked]:bg-blue-500 has-[:checked]:text-white size-14 rounded-full flex justify-center items-center'> <MoreVerticalCircle01Icon onClick={() => moreOpen()} className='rotate-90 cursor-pointer' dir='rtl'/> <input type='checkbox' className='hidden' id='more' /> </label>
      {more && <MoreSitePanel />}
    </div>
  )
}

export default SitePanelRes
