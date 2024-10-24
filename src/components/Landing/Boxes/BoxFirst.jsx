import { Button } from '@nextui-org/react'
import { ArrowUpLeft01Icon } from 'hugeicons-react'
import React from 'react'
import Icon1 from '../../../assets/icon1.png'
import Icon2 from '../../../assets/icon2.png'
import Icon3 from '../../../assets/icon3.png'
import Icon4 from '../../../assets/icon4.png'
import Icon5 from '../../../assets/icon5.png'
import ScreenShot from '../../../assets/Screenshot (9).png'
import { Link } from 'react-router-dom'

function BoxFirst() {
  return (
    <div className='flex my-12 justify-center flex-col gap-6 iranSans lg:flex-row w-full mx-auto'>
      
      <div className='border-3 rounded-xl grow h-64 flex flex-col dark:bg-slate-900 dark:text-white dark:border-none'>
        <div className='flex flex-row-reverse justify-between h-2/12 items-center p-2'>
            <h2 className='iranSansBold w-3/6  min-w-40 text-xl' style={{direction: 'rtl'}}> درباره ما بیشتر بخوانید </h2>
            <Link to='/about' className='bg-blue-500 text-white rounded-full min-w-10 min-h-10 flex justify-center items-center cursor-pointer'> <ArrowUpLeft01Icon /> </Link>
        </div>

        <div className='rounded-xl h-8/12 mt-7 flex flex-col pr-3'>
            <div className='flex items-end flex-col'>
                <span className='text-2xl'> 1000+ </span>
                <span className='text-gray-600 iranSansBold text-sm'> دانشجو انلاین در دوره </span>
            </div>
            <div className='flex items-end flex-col my-5'>
                <span className='text-2xl'> 13+ </span>
                <span className='text-gray-600 iranSansBold text-sm'> سال سابقه آموزش تخصصی </span>
            </div>
        </div>
      </div>

      <div className='rounded-xl bg-blue-500 text-white h-64 grow-2'>
        <div className='flex flex-row-reverse justify-between h-2/12 items-center p-4'>
            <div className='flex flex-col items-end'>
                <h2 className='text-xl font-extrabold whitespace-nowrap' style={{direction: 'rtl'}}> دوره‌های جدید تابستانه! </h2>
                <div className='w-40 text-sm' style={{direction: 'rtl'}}> شروع دوره های جدید مبتدی و پیشرفته برای همین تابستان </div>
            </div>
            <Link to='/courseList' className='mb-8 bg-white text-black rounded-full min-w-10 min-h-10 cursor-pointer flex justify-center items-center'> <ArrowUpLeft01Icon /> </Link>
        </div>
        <div className='w-3/6 h-fit flex justify-end relative'>
          <img src={Icon1} className='size-32 -rotate-12 translate-x-16' />
          <img src={Icon2} className='size-32 rotate-12 translate-x-5' />
          <img src={Icon3} className='size-32 -rotate-12 absolute left-0 top-12' />
          <img src={Icon4} className='size-28 rotate-12 absolute left-20 top-12' />
          <img src={Icon5} className='size-20 rotate-12 absolute left-36 top-20' />
        </div>
      </div>
    
      <div className='border-3 rounded-xl grow-3 h-64 overflow-hidden flex flex-col dark:bg-slate-900 dark:text-white dark:border-none'>
        <div className='flex w-full h-fit justify-end flex-col p-4' style={{direction: 'rtl'}}>
          <h2 className='iranSansBold text-2xl tracking-wider whitespace-nowrap'> پنل اختصاصی دانشجو </h2>
          <span className='w-56 text-sm font-semibold mt-1 tracking-wider'> پنل های اختصاصی دانشجویی برای مدیریت دوره ها و تمرین ها </span>
        </div>

        <div className='w-3/6 h-40 dark:hidden'>
          <img src={ScreenShot} className='w-full h-full'></img>
        </div>
      </div>
    
    </div>
  )
}

export default BoxFirst
