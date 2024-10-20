import { Button } from '@nextui-org/react'
import { News01Icon, Note01Icon, StudentIcon, UserAccountIcon } from 'hugeicons-react'
import React from 'react'

const Teachers = ({id, newsCount, fullName, linkdinProfileLink, courseCounts, pictureAddress}) => {

  return (
    <div className='border-3 w-80 h-72 rounded-2xl'>
        <div className='border h-1/6 w-full flex flex-row-reverse items-center justify-start gap-5 px-3'>
            <img src={pictureAddress} className='size-10 border border-black rounded-full bg-gray-600' />
            <h2 className='text-xl font-semibold'> {fullName.replace('-', ' ')} </h2>
        </div>
        <div className='flex flex-col gap-5 items-end my-5 px-3'>
            <div className='flex flex-row-reverse gap-2 font-semibold text-base'> <Note01Icon />  دارای <span className='text-red-500 text-xl underline'> {courseCounts} </span> دوره   </div>
            <div className='flex flex-row-reverse gap-2 font-semibold text-base'> <StudentIcon />   <span> +20 </span> دانشجو </div>
            <div className='flex flex-row-reverse gap-2 font-semibold text-base'> <News01Icon />   {newsCount === 0 ? " بدون خبر " : <span> خبر {newsCount} </span>} </div>
            
            <Button className='text-white bg-blue-500 rounded-full w-5/6 font-semibold text-sm my-6 mx-auto'>
                <a href={linkdinProfileLink}> مشاهده صفحه استاد </a>
            </Button>
        </div>
    </div>
  )
}

export default Teachers
