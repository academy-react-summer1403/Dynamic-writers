import { Calendar02Icon, StudentIcon, TeacherIcon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React from 'react'

const CoursesView1 = ({levelName, id, title, describe, dissLikeCount, likeCount, cost, teacherName, date, courseRate}) => {
  return (
    <div className='rounded-2xl max-w-72 min-w-72 bg-gray-200 relative h-fit'>
        <img src='' className='w-full rounded-xl h-40 bg-red-300 border-none' />
        <div className='absolute flex flex-row-reverse gap-3 top-0 right-0 p-2'>
            <div className='bg-blue-500 text-white rounded-xl px-2'> طراحی سایت </div>
            <div className='bg-blue-500 text-white rounded-xl px-2'> {levelName} </div>
        </div>
        <div className='flex-col flex items-end p-2'>
            <h2 className='text-base font-semibold'> {title} </h2>
            <span className='text-sm font-semibold text-gray-500'> {describe} </span>
            <div className='flex flex-row-reverse gap-3 my-2'> <TeacherIcon className='text-slate-700'/> <span className='text-base'> {teacherName} </span> </div>
            <div className='flex flex-row-reverse gap-3 my-2'> <Calendar02Icon className='text-slate-700'/> <span className='text-base'> {date} </span> <span className='text-gray-500'> (شروع) </span> </div>
            <div className='flex flex-row-reverse gap-3 my-2'> <StudentIcon className='text-slate-700'/> <span className='text-base'> {courseRate} </span> <span className=''> دانشجو </span> </div>
        </div>
        <div className='w-full flex px-3 justify-between items-center'>
            <div className='flex gap-2'> {dissLikeCount} <ThumbsDownIcon /> </div>
            <div className='flex gap-2'> {likeCount} <ThumbsUpIcon /> </div>
            <div className='text-blue-500 flex flex-row gap-2 items-end my-4 font-bold'> تومان  <span className='font-semibold text-black'> {cost} </span> </div>
        </div>
    </div>
  )
}

export default CoursesView1
