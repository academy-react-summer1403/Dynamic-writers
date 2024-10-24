import React from 'react'
import Bahr from '../../assets/Bahr.png'
import Bahr2 from '../../assets/Bahr2.png'
import '../../output.css'
import { Link, useNavigate } from 'react-router-dom'
import { Menu02Icon, Moon02Icon } from 'hugeicons-react'
import { Button } from '@nextui-org/react'

const Header = () => {

    const navigate = useNavigate()

  return (
    <div className='iranSans h-20 w-dvw flex flex-row-reverse justify-around items-center md:justify-between px-14 font-semibold'>
      <div onClick={() => navigate('')} className='flex gap-3 h-6 w-13'>
        <img src={Bahr2} className='w-full h-full hidden md:inline' />
        <img src={Bahr} className='size-6 inline' />
      </div>

      <div className='items-center gap-10 flex-row-reverse hidden md:flex'>
        <Link to='' className='hover:text-gray-600'> خانه </Link>
        <Link to='' className='hover:text-gray-600'> دوره ها </Link>
        <Link to='' className='hover:text-gray-600'> اخبار و مقالات </Link>
        <Link to='' className='hover:text-gray-600'> ارتباط با ما </Link>
      </div>


      <div className='flex flex-row-reverse items-center gap-2'>
        <div className='border border-slate-300 rounded-full p-2 cursor-pointer hidden md:block'> <Moon02Icon className='text-black size-4' /> </div>
        <Button onClick={() => navigate('')} className='bg-blue-500 rounded-full py-2 px-4 text-center text-white font-semibold cursor-pointer'> ورود یا ثبت نام </Button>
        <Menu02Icon className='md:hidden block cursor-pointer' />
      </div>
    </div>
  )
}

export default Header
