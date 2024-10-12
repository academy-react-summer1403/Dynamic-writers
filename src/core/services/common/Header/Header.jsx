import React, { useState } from 'react'
import Bahr from '../../../../assets/Bahr.png'
import Bahr2 from '../../../../assets/Bahr2.png'
import '../../../../output.css'
import { Link, useNavigate } from 'react-router-dom'
import { Menu02Icon, Moon02Icon, Profile02Icon, ProfileIcon, UserIcon } from 'hugeicons-react'
import { Button, User } from '@nextui-org/react'
import HamberMenu from './HamberMenu'
import { getItem } from '../storage'

const Header = () => {

    const navigate = useNavigate()

    const [hamberMenu, setHamberMenu] = useState(false)
    const [token, setToken] = useState(getItem('token'))

    const closeHamber = () => {
      setHamberMenu(false)
    }

  return (
    <div className='iranSans h-20 w-dvw flex flex-row-reverse justify-between items-center md:justify-between px-3 md:px-14 font-semibold'>
      {hamberMenu === true && <HamberMenu closeHamber={closeHamber}/>}
      <div className='flex gap-3 h-6 w-13'>
        <img src={Bahr2} className='w-full h-full hidden md:inline' />
        <img src={Bahr} className='size-6 inline' />
      </div>

      <div className='items-center gap-14 flex-row-reverse hidden md:flex'>
        <Link to='/' className='hover:text-gray-600'> خانه </Link>
        <Link to='/courseList' className='hover:text-gray-600'> دوره ها </Link>
        <Link to='/newsList' className='hover:text-gray-600'> اخبار و مقالات </Link>
        <Link to='/about' className='hover:text-gray-600'> ارتباط با ما </Link>
      </div>


      <div className='flex flex-row-reverse items-center gap-2'>
        <div className='border border-slate-300 rounded-full p-2 cursor-pointer hidden md:block'> <Moon02Icon className='text-black size-4' /> </div>
        {!token && <Button onClick={() => navigate('/Login')} className='bg-blue-500 rounded-full py-2 px-4 text-center text-white font-semibold cursor-pointer'> ورود یا ثبت نام </Button>}
        {token && <Link to='/layoutPanel/profile' className='hover:bg-gray-300 cursor-pointer bg-blue-500 text-white rounded-full flex justify-center items-center size-8'> <UserIcon className='size-5' /> </Link>}
        <Menu02Icon onClick={() => setHamberMenu(true)} className='md:hidden block cursor-pointer' />
      </div>
    </div>
  )
}

export default Header
