import React from 'react'
import Bahr from '../../assets/Bahr.png'
import Bahr2 from '../../assets/Bahr2.png'
import { InstagramIcon, TelegramIcon } from 'hugeicons-react'
import '../../output.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='iranSans flex justify-start flex-row-reverse gap-32 bg-gray-200 rounded-xl' style={{width: '1300px', height: '300px'}}>
      <div className='flex flex-col justify-center items-center gap-10 h-full px-2'>
        <div className='flex flex-col-reverse'>
            <img src={Bahr2} className='w-20 h-4 inline' />
            <img src={Bahr} className='size-20 inline' />
        </div>
        <div className='flex flex-col gap-2 items-end'>
            <a href='#' className='cursor-pointer flex border border-gray-200 bg-white text-red-500 px-2 py-1 rounded-full text-base font-semibold gap-2'> اینستاگرام <InstagramIcon className='text-red-500' /> </a>
            <a href='#' className='cursor-pointer w-fit flex border border-gray-200 bg-white text-blue-500 px-2 py-1 rounded-full text-base font-semibold gap-2'> تلگرام <TelegramIcon className='text-blue-500' /> </a>
        </div>
      </div>

      <div className='flex flex-col justify-center items-end gap-10 h-full px-2'>
        <h2 className='text-xl iranSansBold'> آکادمی کدنویسی بحر </h2>
        <span style={{direction: 'rtl'}} className='w-72 text-right'> +13 سال سابقه فعالیت در زمینه آموزش کدنویسی از سنین کودکی تا بزرگسال. هدف ما همیشه این بوده که دانشجویان را با مهارت های لازم برای موفقیت در دنیای فناوری و برنامه نویسی مجهز کنیم. </span>
      </div>

      <div className='flex flex-col justify-center items-end gap-3 h-full px-2'>
        <h2 className='text-gray-600 text-base mb-10'> صفحات </h2>
        <Link to='' className=''> خانه </Link> 
        <Link to='' className=''> دوره ها </Link> 
        <Link to='' className=''> اخبار و مقالات </Link> 
      </div>

      <div className='flex flex-col justify-center items-end gap-3 h-full px-2'>
        <h2 className='text-gray-600 text-base mb-10'> ما </h2>
        <Link to='' className=''> اساتید </Link> 
        <Link to='' className=''> درباره ما </Link> 
        <Link to='' className=''> ارتیاط با ما </Link> 
      </div>

      <div className='flex flex-col justify-center items-end gap-3 h-full px-2'>
        <div className='bg-gray-300 size-28 justify-center'> نماد اعتماد الکترونیک  </div>
      </div>
    </div>
  )
}

export default Footer
