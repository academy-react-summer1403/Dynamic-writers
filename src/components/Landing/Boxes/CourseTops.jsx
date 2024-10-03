import React from 'react'
import { Calendar01Icon, Calendar02Icon, StudentCardIcon, StudentIcon, TeacherIcon, ThumbsDownIcon, ThumbsUpDownIcon, ThumbsUpIcon } from 'hugeicons-react'

const CourseTops = ({ courseList }) => {
  return (
    <div>
            <div className=' my-20 w-5/6 mx-auto flex gap-10 justify-between'>
            <div className='rounded-2xl grow bg-gray-200 relative' style={{height: '400px'}}>
                <img src='' className='w-full rounded-xl h-40 bg-red-300 border-none' />
                <div className='absolute flex flex-row-reverse gap-3 top-0 right-0 p-2'>
                    <div className='bg-purple-400 text-white rounded-xl px-2'> طراحی سایت </div>
                    <div className='bg-purple-400 text-white rounded-xl px-2'> پیشرفته </div>
                </div>
                <div className='flex-col flex items-end p-2'>
                    <h2 className='text-2xl font-semibold'> تست </h2>
                    <span className='text-sm font-semibold text-gray-500'> تست </span>
                    <div className='flex flex-row-reverse gap-3 my-2'> <TeacherIcon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <Calendar02Icon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> <span className='text-gray-500'> (شروع) </span> </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <StudentIcon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> </div>
                </div>
                <div className='w-full flex px-3 gap-5'>
                    <div className='flex gap-2'> 1 <ThumbsDownIcon /> </div>
                    <div className='flex gap-2'> 22 <ThumbsUpIcon /> </div>
                    <div className='text-blue-500 flex flex-row gap-2 items-end'> تومان  <span className='text-xl font-semibold text-black'> 1,000,000 </span> </div>
                </div>
            </div>
            <div className='rounded-2xl grow bg-gray-200 relative'>
                <img src='' className='w-full rounded-xl h-40 bg-red-300 border-none' />
                <div className='absolute flex flex-row-reverse gap-3 top-0 right-0 p-2'>
                    <div className='bg-blue-500 text-white rounded-xl px-2'> برنامه‌نویسی </div>
                    <div className='bg-blue-500 text-white rounded-xl px-2'> مبتدی </div>
                </div>
                <div className='flex-col flex items-end p-2'>
                    <h2 className='text-2xl font-semibold'> تست </h2>
                    <span className='text-sm font-semibold text-gray-500'> تست </span>
                    <div className='flex flex-row-reverse gap-3 my-2'> <TeacherIcon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <Calendar02Icon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> <span className='text-gray-500'> (شروع) </span> </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <StudentIcon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> </div>
                </div>
                <div className='w-full flex px-3 gap-5'>
                    <div className='flex gap-2'> 1 <ThumbsDownIcon /> </div>
                    <div className='flex gap-2'> 22 <ThumbsUpIcon /> </div>
                    <div className='text-blue-500 flex flex-row gap-2 items-end'> تومان  <span className='text-xl font-semibold text-black'> 1,000,000 </span> </div>
                </div>

            </div>
            <div className='rounded-2xl grow bg-gray-200 relative'>
                <img src='' className='w-full rounded-xl h-40 bg-red-300 border-none' />
                <div className='absolute flex flex-row-reverse gap-3 top-0 right-0 p-2'>
                    <div className='bg-purple-400 text-white rounded-xl px-2'> طراحی سایت </div>
                    <div className='bg-purple-400 text-white rounded-xl px-2'> پیشرفته </div>
                </div>
                <div className='flex-col flex items-end p-2'>
                    <h2 className='text-2xl font-semibold'> تست </h2>
                    <span className='text-sm font-semibold text-gray-500'> تست </span>
                    <div className='flex flex-row-reverse gap-3 my-2'> <TeacherIcon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <Calendar02Icon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> <span className='text-gray-500'> (شروع) </span> </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <StudentIcon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> </div>
                </div>
                <div className='w-full flex px-3 gap-5'>
                    <div className='flex gap-2'> 1 <ThumbsDownIcon /> </div>
                    <div className='flex gap-2'> 22 <ThumbsUpIcon /> </div>
                    <div className='text-blue-500 flex flex-row gap-2 items-end'> تومان  <span className='text-xl font-semibold text-black'> 1,000,000 </span> </div>
                </div>
            </div>
            <div className='rounded-2xl grow bg-gray-200 relative' >
                <img src='' className='w-full rounded-xl h-40 bg-red-300 border-none' />
                <div className='absolute flex flex-row-reverse gap-3 top-0 right-0 p-2'>
                    <div className='bg-blue-500 text-white rounded-xl px-2'> برنامه‌نویسی </div>
                    <div className='bg-blue-500 text-white rounded-xl px-2'> مبتدی </div>
                </div>
                <div className='flex-col flex items-end p-2'>
                    <h2 className='text-2xl font-semibold'> تست </h2>
                    <span className='text-sm font-semibold text-gray-500'> تست </span>
                    <div className='flex flex-row-reverse gap-3 my-2'> <TeacherIcon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <Calendar02Icon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> <span className='text-gray-500'> (شروع) </span> </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <StudentIcon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> </div>
                </div>
                <div className='w-full flex px-3 gap-5'>
                    <div className='flex gap-2'> 1 <ThumbsDownIcon /> </div>
                    <div className='flex gap-2'> 22 <ThumbsUpIcon /> </div>
                    <div className='text-blue-500 flex flex-row gap-2 items-end'> تومان  <span className='text-xl font-semibold text-black'> 1,000,000 </span> </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default CourseTops
