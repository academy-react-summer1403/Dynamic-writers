import React from 'react'
import Bahr from '../../assets/Bahr.png'
import Bahr2 from '../../assets/Bahr2.png'
import { InstagramIcon, TelegramIcon } from 'hugeicons-react'
import '../../output.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-dvw'>
    <div className='iranSans font-semibold flex flex-col justify-between p-10 w-11/12 my-10 md:w-11/12 mx-auto pb-24 bg-gray-100 rounded-xl h-fit md:flex-row-reverse'>
      <div className='flex flex-row-reverse justify-center items-center gap-4 h-full px-2 md:flex-col'>
        <div className='flex flex-col-reverse'>
            <img src={Bahr2} className='w-20 h-4 inline' />
            <img src={Bahr} className='size-20 inline' />
        </div>
        <div className='hidden flex-col gap-2 items-end md:flex'>
            <a href='#' className='cursor-pointer flex border border-gray-200 bg-white text-red-500 px-2 py-1 rounded-full text-sm font-semibold gap-2'> اینستاگرام <InstagramIcon className='text-red-500' /> </a>
            <a href='#' className='cursor-pointer w-fit flex border border-gray-200 bg-white text-blue-500 px-2 py-1 rounded-full text-sm font-semibold gap-2'> تلگرام <TelegramIcon className='text-blue-500' /> </a>
        </div>

        <div className='flex flex-col justify-center border h-full md:hidden'>
          <div className='bg-gray-300 size-28 justify-center text-center items-center'> نماد اعتماد الکترونیک  </div>
        </div>
      </div>

      <div className='flex md:flex-row-reverse gap-20 flex-col'>

      <div className='flex flex-col justify-center items-end gap-10 h-full px-2'>
        <h2 className='text-xl iranSansBold'> آکادمی کدنویسی بحر </h2>
        <span style={{direction: 'rtl'}} className='w-72 text-right text-sm text-gray-500'> +13 سال سابقه فعالیت در زمینه آموزش کدنویسی از سنین کودکی تا بزرگسال. هدف ما همیشه این بوده که دانشجویان را با مهارت های لازم برای موفقیت در دنیای فناوری و برنامه نویسی مجهز کنیم. </span>
      </div>

      <div className='flex gap-20'>
        <div className='flex flex-col justify-center items-end gap-3 h-full px-2'>
          <h2 className='text-gray-600 text-base mb-10'> صفحات </h2>
          <Link to='' className='whitespace-nowrap'> خانه </Link> 
          <Link to='' className='whitespace-nowrap'> دوره ها </Link> 
          <Link to='' className='whitespace-nowrap'> اخبار و مقالات </Link> 
        </div>

        <div className='flex flex-col justify-center items-end gap-3 h-full px-2'>
          <h2 className='text-gray-600 text-base mb-10'> ما </h2>
          <Link to='' className='whitespace-nowrap'> اساتید </Link> 
          <Link to='' className='whitespace-nowrap'> درباره ما </Link> 
          <Link to='' className='whitespace-nowrap'> ارتیاط با ما </Link> 
        </div>

      </div>

      </div>

      <div className='flex gap-10'>
        <div className='flex flex-col justify-start items-start h-full'>
          <div className='bg-gray-200 size-28 justify-center'> نماد اعتماد الکترونیک  </div>
        </div>

        <div className='flex flex-col gap-2 items-end md:hidden'>
            <a href='#' className='cursor-pointer flex border border-gray-200 bg-white text-red-500 px-2 py-1 rounded-full text-base font-semibold gap-2'> اینستاگرام <InstagramIcon className='text-red-500' /> </a>
            <a href='#' className='cursor-pointer w-fit flex border border-gray-200 bg-white text-blue-500 px-2 py-1 rounded-full text-base font-semibold gap-2'> تلگرام <TelegramIcon className='text-blue-500' /> </a>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Footer
