import { Calendar02Icon, CircleIcon, StudentIcon, TeacherIcon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CoursesView2 = ({levelName, id, title, describe, dissLikeCount, likeCount, cost, teacherName, date, currentRegistrants, technologyList, tumbImageAddress, statusName}) => {

  const navigate = useNavigate()
  
  return (
    <div className='flex rounded-3xl flex-row-reverse bg-gray-100 font-semibold' style={{height: '288px', width: '985px'}}>
        <div className='w-5/12 h-full bg-red-300 rounded-3xl relative border'>
            <img className='w-full h-full rounded-3xl' src={tumbImageAddress} />
            <div className='absolute flex flex-row-reverse gap-3 top-0 right-0 p-2 text-sm font-semibold'>
              <div className='bg-blue-500 text-white rounded-full px-3 shadow-lg py-1'> {technologyList} </div>
              <div className='bg-blue-500 text-white rounded-full px-3 shadow-lg py-1'> {levelName} </div>
            </div>
            <div className='bg-stone-100 bg-opacity-80 text-red-500 rounded-xl px-2 py-0.5 text-xs flex items-center gap-2 absolute bottom-2 right-2'> {statusName} <CircleIcon className='size-1.5 bg-red-500 rounded-full' /> </div>
        </div>
        <div className='w-7/12 h-full flex flex-col justify-between p-5 gap-2' dir='rtl'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-2xl'> {title} </h2>
                <span className='text-gray-500 text-sm h-10 overflow-hidden'> {describe} </span>
            </div>
            <div className='flex flex-col gap-4 text-base font-semibold mt-3'>
              <div className='flex flex-row gap-3'> <TeacherIcon className='text-slate-700'/> <span> {teacherName} </span> </div>
              <div className='flex flex-row gap-3'> <StudentIcon className='text-slate-700'/> <div className='flex flex-row gap-2'> <span> {currentRegistrants} </span> <span> دانشجو </span> </div> </div>
              <div className='flex flex-row gap-3'> <Calendar02Icon className='text-slate-700'/> <div className='flex flex-row gap-1'> <span dir='ltr'> {date} </span> <span className='text-gray-500'> (شروع) </span> </div> </div>
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='flex gap-10 text-sm font-semibold items-center'>
                    <div className='flex flex-row-reverse gap-3 items-center'> {dissLikeCount} <ThumbsDownIcon /> </div>
                    <div className='flex flex-row-reverse gap-3 items-center'> {likeCount} <ThumbsUpIcon /> </div>
                </div>
                <div className='text-blue-500 flex flex-row-reverse gap-2 items-end my-4'> تومان  <span className='font-semibold text-black text-xl'> {cost} </span> </div>
            </div>
        </div>
    </div>
  )
}

export default CoursesView2
