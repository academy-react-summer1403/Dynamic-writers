import React, { useEffect, useState } from 'react'
import Bahr from '../../../../assets/Bahr.png'
import Bahr2 from '../../../../assets/Bahr2.png'
import '../../../../output.css'
import { Link, useNavigate } from 'react-router-dom'
import { Menu02Icon, Moon02Icon, Profile02Icon, ProfileIcon, Sun02Icon, UserIcon } from 'hugeicons-react'
import { Button, useDisclosure, User } from '@nextui-org/react'
import HamberMenu from './HamberMenu'
import { getItem, setItem } from '../storage'
import { motion } from "framer-motion"

const Header = ({ darkMode, setDarkMode }) => {

    const navigate = useNavigate()

    const [hamberMenu, setHamberMenu] = useState(false)
    const [token, setToken] = useState(getItem('token'))

    const closeHamber = () => {
      setHamberMenu(false)
    }

    const {isOpen, onOpen, onOpenChange} = useDisclosure()

  return (
    <div className='grid w-dvw max-w-[3000px]'>
      <div className='iranSans h-20 flex flex-row-reverse justify-between items-center px-3 lg:px-14 font-semibold'>
      <HamberMenu isOpen={isOpen} onOpenChange={onOpenChange} />
      <div className='flex gap-3 h-8 items-center justify-end w-[25%] cursor-pointer' onClick={() => navigate('/')}>
        <h1 className='text-blue-400 text-[20px]'> Dynamic Writers </h1>
        <img src={Bahr} className='size-8 inline' />
      </div>

      <div className='items-center gap-14 flex-row-reverse hidden lg:flex w-[50%] justify-center'>
        <Link to='/' className='hover:text-gray-600'> خانه </Link>
        <Link to='/courseList' className='hover:text-gray-600'> دوره ها </Link>
        <Link to='/newsList' className='hover:text-gray-600'> اخبار و مقالات </Link>
        <Link to='/about' className='hover:text-gray-600'> ارتباط با ما </Link>
      </div>


      <div className='flex flex-row-reverse items-center gap-2 w-[25%] justify-end'>
        <Button onClick={() => setDarkMode(!darkMode)} radius='full' className='border border-slate-300 bg-white rounded-full cursor-pointer hidden size-[50px] lg:flex justify-center items-center dark:bg-gray-800' isIconOnly>  { darkMode ? <Sun02Icon className='size-5 text-gray-300' /> : <Moon02Icon className='text-black size-5' /> } </Button>
        {!token && <Button onClick={() => navigate('/Login')}  className='bg-blue-500 rounded-full py-2 px-4 text-center text-white font-semibold lg:text-base md:text-[14px] text-[10px] cursor-pointer'> ورود یا ثبت نام </Button>}
        {token && <motion.div animate={{
      scale: [1, 1.3, 1.3, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["100%", "20%", "50%", "50%", "100%"],
    }} transition={{duration: 1.2}}> <Button onClick={() => navigate('/layoutPanel/dashboard')} isIconOnly radius='full' className='hover:bg-gray-300 cursor-pointer bg-blue-500 rounded-full text-white flex justify-center items-center size-[50px]'> <UserIcon className='size-5' /> </Button> </motion.div>}
        <Menu02Icon onClick={onOpen} className='lg:hidden block cursor-pointer min-w-[30px]' />
      </div>
    </div>
    </div>
  )
}

export default Header
