import { Button } from '@nextui-org/react'
import { Calendar02Icon, EyeIcon, QuillWrite01Icon, QuillWrite02Icon, StudentIcon, TeacherIcon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React, { useEffect } from 'react'
import { getNewsList } from '../../../core/services/api/newsTop'

const BoxFifth = () => {
  
    const getNews = async () => {

        const response = await getNewsList()
    
        console.log(response)
    
    }
    
    useEffect(() => {
        getNews()
    }, [])

    return (
       <div className=' my-20 w-5/6 mx-auto flex gap-10 justify-between'>
            <div className='rounded-2xl grow bg-gray-200 relative' style={{height: '400px'}}>
                <img src='' className='w-full rounded-xl h-40 bg-red-300 border-none' />
                <div className='absolute flex flex-row-reverse gap-3 top-0 right-0 p-2'>
                    <div className='bg-blue-500 text-white rounded-xl px-2'> برنامه‌نویسی </div>
                    <div className='bg-blue-500 text-white rounded-xl px-2'> مبتدی </div>
                </div>
                <div className='flex-col flex items-end p-2'>
                    <h2 className='text-2xl font-semibold'> تست </h2>
                    <div className='w-full h-14 overflow-hidden text-right'>
                      <span className='text-sm font-semibold text-gray-500' dir='rtl'> تست </span>
                    </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <QuillWrite02Icon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <EyeIcon className='text-slate-700'/> <span className='text-base font-semibold'> 200 </span> </div>
                </div>
                <div className='w-full flex px-3 gap-5 items-center'>
                    <Button className='bg-blue-500 text-white rounded-full'> بیشتر بخوانید </Button>
                    <div className='flex gap-2'> 1 <ThumbsDownIcon /> </div>
                    <div className='flex gap-2'> 22 <ThumbsUpIcon /> </div>
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
                    <div className='w-full h-14 overflow-hidden text-right'>
                      <span className='text-sm font-semibold text-gray-500' dir='rtl'> تست </span>
                    </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <QuillWrite02Icon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <EyeIcon className='text-slate-700'/> <span className='text-base font-semibold'> 200 </span> </div>
                </div>
                <div className='w-full flex px-3 gap-5 items-center'>
                    <Button className='bg-blue-500 text-white rounded-full'> بیشتر بخوانید </Button>
                    <div className='flex gap-2'> 1 <ThumbsDownIcon /> </div>
                    <div className='flex gap-2'> 22 <ThumbsUpIcon /> </div>
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
                    <div className='w-full h-14 overflow-hidden text-right'>
                      <span className='text-sm font-semibold text-gray-500' dir='rtl'> تست </span>
                    </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <QuillWrite02Icon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <EyeIcon className='text-slate-700'/> <span className='text-base font-semibold'> 200 </span> </div>
                </div>
                <div className='w-full flex px-3 gap-5 items-center'>
                    <Button className='bg-blue-500 text-white rounded-full'> بیشتر بخوانید </Button>
                    <div className='flex gap-2'> 1 <ThumbsDownIcon /> </div>
                    <div className='flex gap-2'> 22 <ThumbsUpIcon /> </div>
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
                    <div className='w-full h-14 overflow-hidden text-right'>
                      <span className='text-sm font-semibold text-gray-500' dir='rtl'> تست </span>
                    </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <QuillWrite02Icon className='text-slate-700'/> <span className='text-base font-semibold'> تست </span> </div>
                    <div className='flex flex-row-reverse gap-3 my-2'> <EyeIcon className='text-slate-700'/> <span className='text-base font-semibold'> 200 </span> </div>
                </div>
                <div className='w-full flex px-3 gap-5 items-center'>
                    <Button className='bg-blue-500 text-white rounded-full'> بیشتر بخوانید </Button>
                    <div className='flex gap-2'> 1 <ThumbsDownIcon /> </div>
                    <div className='flex gap-2'> 22 <ThumbsUpIcon /> </div>
                </div>
            </div>
            </div>
  )
}

export default BoxFifth
