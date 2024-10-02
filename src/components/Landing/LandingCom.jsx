import { CodeCircleIcon } from 'hugeicons-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BoxFirst from './Boxes/BoxFirst'

function LandingCom() {

    const navigate = useNavigate()

  return (
    <div className='iranSans my-10'>
      <div className='flex text-3xl iranSansBold justify-center'>
        <span> کدنویسی؛   </span>
        <div className='rounded-full p-1 border border-gray-200 shadow-md mx-2'> <CodeCircleIcon /> </div>
        <span className='tracking-wider'> تجربه‌ای بی‌نظیر در یادگیری </span> 
      </div>

      <div className='flex text-3xl iranSansBold flex-row-reverse justify-center gap-2 mt-3'>
        <span> از </span> <span className='text-blue-500'> مبتدی </span> <span> تا </span> <spam className='text-red-500'> !حرفه ای </spam>
      </div>

      <div className='items-center gap-5 flex flex-col my-6'>
        <span className='text-gray-400 iranSansBold text-sm'> آکادمی فوق تخصصی کدنویسی و برنامه‌نویسی از سنین کودکی تا بزرگسالی </span>
        <div onClick={() => navigate('')} className='cursor-pointer bg-blue-500 text-white rounded-full flex items-baseline px-3 py-2 text-sm iranSansBold'> شروع یادگیری </div>
      </div>

      <BoxFirst />
    </div>
  )
}

export default LandingCom
