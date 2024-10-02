import { ArrowUpLeft01Icon } from 'hugeicons-react'
import React from 'react'

function BoxFirst() {
  return (
    <div className='flex my-12 w-dvw justify-center gap-6 iranSans'>
      
      <div className='border-3 rounded-xl w-1/6 h-64 flex flex-col'>
        <div className='flex flex-row-reverse justify-between h-2/12 items-center p-2'>
            <h2 className='iranSansBold w-3/6 text-xl' style={{direction: 'rtl'}}> درباره ما بیشتر بخوانید </h2>
            <div className='bg-blue-500 text-white rounded-full w-10 h-10 flex justify-center items-center'> <ArrowUpLeft01Icon /> </div>
        </div>

        <div className='rounded-xl h-8/12 gap-10 flex flex-col'>
            <div className='flex items-end flex-col'>
                <span className='text-2xl'> 1000+ </span>
                <span className='text-gray-600 iranSansBold text-sm'> دانشجو انلاین در دوره </span>
            </div>
        </div>
      </div>

      <div className='rounded-xl bg-blue-500 text-white w-3/12 h-64'>
        <div className='flex flex-row-reverse justify-between h-2/12 items-center p-2'>
            <h2 className='text-xl font-extrabold' style={{direction: 'rtl'}}> دوره‌های جدید تابستانه! </h2>
            <div className='bg-white text-black rounded-full w-10 h-10 flex justify-center items-center'> <ArrowUpLeft01Icon /> </div>
        </div>
      </div>
    
      <div className='border-3 rounded-xl w-4/12 h-64'></div>
    
    </div>
  )
}

export default BoxFirst
