import { Book02Icon, DashboardCircleIcon, More01Icon, MoreVerticalCircle01Icon, TimeSetting03Icon } from 'hugeicons-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MoreSitePanel from './MoreSitePanel'

const SitePanelRes = () => {

  const [scrollPosition, setScrollPosition] = useState({x: window.screenX, y: window.scrollY})

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
    <div className={`flex items-center flex-row-reverse justify-between my-5 p-2 gap-4 bg-white shadow-xl rounded-3xl md:hidden fixed w-full bottom-${scrollPosition.y} right-4`} style={{maxWidth: '360px' ,height:'72px'}}>
      <NavLink to='/layoutPanel/dashboard' className={({isActive}) => isActive ? 'bg-blue-500 text-white size-16 rounded-full flex justify-center items-center' : 'bg-white text-black size-12 rounded-full flex justify-center items-center'}> <DashboardCircleIcon className='size-8' /> </NavLink>
      <NavLink to='/layoutPanel/myCourse' className={({isActive}) => isActive ? 'bg-blue-500 text-white size-16 rounded-full flex justify-center items-center' : 'bg-white text-black size-12 rounded-full flex justify-center items-center'}> <Book02Icon className='size-8' /> </NavLink>
      <NavLink to='/layoutPanel/myReserve' className={({isActive}) => isActive ? 'bg-blue-500 text-white size-16 rounded-full flex justify-center items-center' : 'bg-white text-black size-12 rounded-full flex justify-center items-center'}> <TimeSetting03Icon className='size-8' /> </NavLink>
      <div className='active:size-12 rounded-full size-8 bg-red-300'>
        <img className='w-full h-full rounded-full' />
      </div>
      <MoreVerticalCircle01Icon onClick={() => moreOpen()} className='rotate-90 cursor-pointer' dir='rtl'/>
      {more && <MoreSitePanel />}
    </div>
  )
}

export default SitePanelRes
