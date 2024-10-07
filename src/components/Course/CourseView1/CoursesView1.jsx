import { Calendar02Icon, CircleIcon, StudentIcon, TeacherIcon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CoursesView1 = ({levelName, id, title, describe, dissLikeCount, likeCount, cost, teacherName, date, currentRegistrants, technologyList, tumbImageAddress, statusName}) => {

  const navigate = useNavigate()
  
  return (
    <div onClick={() => navigate('')} className='rounded-3xl bg-gray-200 iranSans flex flex-col justify-between font-semibold min-w-72' style={{height: '512px', width: '315px'}}>
        <div className='relative w-full rounded-xl h-56 bg-red-300 border-none'>
         <img src={tumbImageAddress} className='w-full h-full border-none rounded-xl' />
          <div className='absolute flex flex-row-reverse gap-3 top-0 right-0 p-2 text-sm font-semibold'>
              <div className='bg-blue-500 text-white rounded-full px-3 shadow-lg py-1'> {technologyList} </div>
              <div className='bg-blue-500 text-white rounded-full px-3 shadow-lg py-1'> {levelName} </div>
          </div>
          <div className='bg-stone-100 bg-opacity-80 text-red-500 rounded-xl px-2 py-0.5 text-xs flex items-center gap-2 absolute bottom-2 right-2'> {statusName} <CircleIcon className='size-1.5 bg-red-500 rounded-full' /> </div>
        </div>

        <div className='flex-col flex items-end p-2 gap-2'>
          <h2 className='text-xl font-semibold'> {title} </h2>
          <span className='text-sm font-semibold text-gray-500 h-10 overflow-hidden' dir='rtl'> {describe} </span>
        </div>
        <div className='p-2 flex flex-col gap-4 text-base font-semibold'>
              <div className='flex flex-row-reverse gap-3'> <TeacherIcon className='text-slate-700'/> <span> {teacherName} </span> </div>
              <div className='flex flex-row-reverse gap-3'> <Calendar02Icon className='text-slate-700'/> <div className='flex flex-row-reverse gap-1'> <span> {date} </span> <span className='text-gray-500'> (شروع) </span> </div> </div>
              <div className='flex flex-row-reverse gap-3'> <StudentIcon className='text-slate-700'/> <div className='flex flex-row-reverse gap-2'> <span> {currentRegistrants} </span> <span> دانشجو </span> </div> </div>
        </div>
        <div className='w-full flex justify-around items-center'>
            <div className='flex gap-2 text-sm font-semibold items-center'>
              <div className='flex gap-2 items-center text-gray-700'> {dissLikeCount} <ThumbsDownIcon /> </div>
              <div className='flex gap-2 items-center text-gray-700'> {likeCount} <ThumbsUpIcon /> </div>
            </div>
            <div className='text-blue-500 flex flex-row gap-2 items-end my-4'> تومان  <span className='font-semibold text-black text-xl'> {cost} </span> </div>
        </div>
    </div>
  )
}

export default CoursesView1
