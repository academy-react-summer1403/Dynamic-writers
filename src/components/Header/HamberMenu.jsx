import { Book01Icon, FlipPhoneIcon, Home01Icon, InstagramIcon, News01Icon, TelegramIcon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import Bahr from '../../assets/Bahr.png'
import Bahr2 from '../../assets/Bahr2.png'

const HamberMenu = ({ closeHamber }) => {
  const [scrollPosition, setScrollPosition] = useState({x: 0, y: 0})

  const handleScroll = () => {
    setScrollPosition({
        x: window.scrollX,
        y: window.scrollY
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`bg-white absolute rounded-t-3xl bottom-${scrollPosition.y} right-${scrollPosition.x} w-full h-fit font-semibold z-10`}>
    <div className='border-2 w-10 mx-auto cursor-pointer' onClick={closeHamber}></div>
      <div className='w-full flex flex-col gap-6 p-5'>
        <div className='text-sm flex flex-row-reverse justify-between w-full'>
            <div className='flex flex-row-reverse gap-2 items-center'>
                <Home01Icon className='size-4' />
                <span> خانه </span>
            </div>
            <span className='text-gray-400 text-xs w-36 overflow-hidden h-4 text-ellipsis whitespace-nowrap'> صفحه اصلی </span>
        </div>
        <div className='text-sm flex flex-row-reverse justify-between w-full'>
            <div className='flex flex-row-reverse gap-2 items-center'>
                <Book01Icon className='size-4' />
                <span> دوره ها </span>
            </div>
            <span className='text-gray-400 text-xs w-36 overflow-hidden h-4 text-ellipsis whitespace-nowrap' dir='rtl'> تمامی دوره های برگزار شده یا درحال برگزاری </span>
        </div>
        <div className='text-sm flex flex-row-reverse justify-between w-full'>
            <div className='flex flex-row-reverse gap-2 items-center'>
                <News01Icon className='size-4' />
                <span> اخبار و مقالات </span>
            </div>
            <span className='text-gray-400 text-xs w-36 overflow-hidden h-4 text-ellipsis whitespace-nowrap' dir='rtl'> خبر های پژوهشگاه و مقالاتی مرتبط با برنامه نویسی و ... </span>
        </div>
        <div className='text-sm flex flex-row-reverse justify-between w-full'>
            <div className='flex flex-row-reverse gap-2 items-center'>
                <FlipPhoneIcon className='size-4' />
                <span> ارتباط با ما </span>
            </div>
        </div>
      </div>
      <div className='w-full border-t-1 h-fit flex flex-row-reverse justify-between p-5'>
        <div onClick={() => navigate('')} className='flex gap-3 h-5'>
            <img src={Bahr2} className='w-full h-full' />
            <img src={Bahr} className='size-6 inline' />
        </div>
        <div className='flex gap-3 flex-row-reverse'>
            <TelegramIcon className='text-blue-500' />
            <InstagramIcon className='text-red-500' />
        </div>
      </div>
    </div>
  )
}

export default HamberMenu
