import { CodeCircleIcon } from 'hugeicons-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BoxFirst from './Boxes/BoxFirst'
import { Button } from '@nextui-org/react'
import BoxSecond from './Boxes/BoxSecond'
import BoxThird from './Boxes/BoxThird'
import BoxFourth from './Boxes/BoxFourth'
import BoxFifth from './Boxes/BoxFifth'
import { GetTeachersList } from '../../core/services/api/teachersTop'

function LandingCom() {

    const navigate = useNavigate()

    const getTeachers = async () => {

      const response = await GetTeachersList()

      console.log(response)
    }

  return (
    <div className='iranSans my-10 flex flex-col w-dvw dark:bg-black px-16'>
      <div className=' flex text-xl iranSansBold justify-center items-center md:text-3xl text-center flex-col'>
        <span className='tracking-normal md:tracking-wider flex flex-row break-world whitespace-nowrap'> کدنویسی؛  <div className='rounded-full p-1 border border-gray-200 shadow-md mx-2 size-8'> <CodeCircleIcon /> </div>   تجربه‌ای بی‌نظیر در یادگیری  </span>
  
        <div className='flex text-xl iranSansBold flex-row-reverse justify-center gap-2 mt-3 md:text-3xl'>
          <span> از </span> <span className='text-blue-500'> مبتدی </span> <span> تا </span> <span className='text-red-500'> !حرفه ای </span>
        </div>
      </div>

      <div className='items-center gap-5 flex flex-col my-6'>
        <span className='text-gray-400 iranSansBold text-sm text-center'> آکادمی فوق تخصصی کدنویسی و برنامه‌نویسی از سنین کودکی تا بزرگسالی </span>
        <Button onClick={() => navigate('/courseList')} className='cursor-pointer bg-blue-500 text-white rounded-full flex items-baseline items-center text-sm iranSansBold'> شروع یادگیری </Button>
      </div>

      <BoxFirst />

      <div className='bg-blue-500 -translate-x-[400px] w-[150%] justify-center h-10 text-white flex flex-row-reverse items-center gap-10 -rotate-2'>
        <span className='font-semibold text-sm whitespace-nowrap'> خدماتی که ما به شما ارائه میدیم </span>
        <div className='min-w-2 min-h-2 bg-white rounded-full'>  </div>
        <span className='font-semibold text-sm whitespace-nowrap'> خدماتی که ما به شما ارائه میدیم </span>
        <div className='min-w-2 min-h-2 bg-white rounded-full'>  </div>
        <span className='font-semibold text-sm whitespace-nowrap'> خدماتی که ما به شما ارائه میدیم </span>
        <div className='min-w-2 min-h-2 bg-white rounded-full'>  </div>
        <span className='font-semibold text-sm whitespace-nowrap'> خدماتی که ما به شما ارائه میدیم </span>
        <div className='min-w-2 min-h-2 bg-white rounded-full'>  </div>
        <span className='font-semibold text-sm  whitespace-nowrap'> خدماتی که ما به شما ارائه میدیم </span>
        <div className='min-w-2 min-h-2 bg-white rounded-full'>  </div>
        <span className='font-semibold text-sm  whitespace-nowrap'> خدماتی که ما به شما ارائه میدیم </span>
      </div>

      {/* <BoxSecond /> */}

      <div className='mx-auto text-center mt-20'> 
        <h2 className='text-2xl iranSansBold'> محبوب ترین دوره ها </h2>
        <span className='text-gray-400 iranSansBold text-base'> دوره هایی که بین دانشجو های ما محبوبیت بالایی داشتند </span>
      </div>

      <BoxThird />

      <div className='mx-auto text-center'> 
        <h2 className='text-2xl iranSansBold'> برترین اساتید هفته </h2>
        <span className='text-gray-400 iranSansBold text-base'> اساتیدی که با نظرسنجی در دوره ها به انها بیشترین رای مثبت را دادند </span>
      </div>

      <BoxFourth />

      <div className='mx-auto text-center mt-10'> 
        <h2 className='text-2xl iranSansBold'> اخبار و مقالات هفته </h2>
        <span className='text-gray-400 iranSansBold text-base'> خبر ها و مقاله هایی که در این هفته منتشر شدند </span>
      </div>

      <BoxFifth />

    </div>
  )
}

export default LandingCom
