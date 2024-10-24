import { Skeleton } from '@nextui-org/react'
import { Calendar02Icon, CircleIcon, StudentIcon, TeacherIcon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CoursesView2 = ({isLoaded ,levelName, id, title, describe, dissLikeCount, likeCount, cost, teacherName, date, currentRegistrants, technologyList, tumbImageAddress, statusName}) => {

  const navigate = useNavigate()

  const callCourse = () => {
    navigate('/')
    setTimeout(() => {
      navigate('/CourseDetail/' + id)
    }, 100)
  }
  
  return (
    <Skeleton className='rounded-3xl' isLoaded={isLoaded}>
      <div onClick={() => callCourse()} className='lg:flex rounded-3xl flex-row-reverse bg-gray-100 font-semibold hidden dark:bg-slate-900 dark:text-white w-full' style={{height: '288px'}}>
          <div className='w-5/12 h-full bg-red-300 rounded-3xl relative border dark:border-none'>
              <img className='w-full h-full rounded-3xl dark:border-none' src={tumbImageAddress} />
              <div className='absolute flex flex-row-reverse gap-3 top-0 right-0 p-2 text-sm font-semibold'>
                <div className='bg-blue-500 text-white rounded-full px-3 shadow-lg py-1'> {technologyList} </div>
                <div className='bg-blue-500 text-white rounded-full px-3 shadow-lg py-1'> {levelName} </div>
              </div>
              <div className={`${statusName === "شروع ثبت نام" ? 'text-blue-500' : 'text-red-500'} bg-stone-50 bg-opacity-80 rounded-xl px-2 py-0.5 text-sm flex items-center gap-2 absolute bottom-2 right-2`}> {statusName} <CircleIcon className={`${statusName === "شروع ثبت نام" ? 'bg-blue-500' : 'bg-red-500'} size-1.5 rounded-full`} /> </div>
          </div>
          <div className='w-7/12 h-full flex flex-col justify-between p-5 gap-2' dir='rtl'>
              <div className='flex flex-col gap-3'>
                  <h2 className='text-2xl'> {title} </h2>
                  <span className='text-gray-500 text-sm h-10 overflow-hidden'> {describe} </span>
              </div>
              <div className='flex flex-col gap-4 text-base font-semibold mt-3'>
                <div className='flex flex-row gap-3'> <TeacherIcon className='text-slate-700'/> <span> {teacherName} </span> </div>
                <div className='flex flex-row gap-3'> <StudentIcon className='text-slate-700'/> <div className='flex flex-row gap-2'> <span> {currentRegistrants} </span> <span> دانشجو </span> </div> </div>
                <div className='flex flex-row gap-3'> <Calendar02Icon className='text-slate-700'/> <div className='flex flex-row gap-2'> <span dir='rtl'> {date} </span> <span className='text-gray-500'> (شروع) </span> </div> </div>
              </div>
              <div className='w-full flex justify-between items-center'>
                  <div className='flex gap-10 text-sm font-semibold items-center'>
                      <div className='flex flex-row-reverse gap-3 items-center'> {dissLikeCount} <ThumbsDownIcon /> </div>
                      <div className='flex flex-row-reverse gap-3 items-center'> {likeCount} <ThumbsUpIcon /> </div>
                  </div>
                  <div className='text-blue-500 flex flex-row-reverse gap-2 items-end my-4'> تومان  <span className='dark:text-white font-semibold text-black text-xl'> {cost} </span> </div>
              </div>
          </div>
      </div>
    </Skeleton>
  )
}

export default CoursesView2
