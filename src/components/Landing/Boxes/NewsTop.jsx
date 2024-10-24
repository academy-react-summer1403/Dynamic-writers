import React from 'react'
import { Button, Skeleton } from '@nextui-org/react'
import { Calendar02Icon, EyeIcon, QuillWrite01Icon, QuillWrite02Icon, StudentIcon, TeacherIcon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import { useNavigate } from 'react-router-dom'

const NewsTop = ({isLoaded ,title, miniDescribe, currentLikeCount, currentDissLikeCount, addUserFullName, currentView, newsCatregoryName, id, currentImageAddressTumb}) => {

  const navigate = useNavigate()

  return (
    <Skeleton className='rounded-3xl' isLoaded={isLoaded}>
    <div className='rounded-2xl min-w-[315px] max-w-[315px] dark:bg-slate-900 dark:text-white bg-gray-200 relative h-fit flex flex-col justify-between' style={{height: '547px'}}>
        <img src={currentImageAddressTumb} className='w-full border rounded-xl h-[225px] bg-red-300' />
        <div className='absolute flex flex-row-reverse gap-3 top-0 right-0 p-2'>
            <div className={`bg-blue-500 text-white rounded-xl px-2`}> {newsCatregoryName} </div>
        </div>
        <div className='flex-col flex h-3/6 items-end p-2'>
            <h2 className='text-base font-semibold' dir='rtl'> {title} </h2>
            <div className='w-full h-2/3 my-1 max-h-fit overflow-hidden text-right'>
                <span className='text-sm font-semibold text-gray-500' dir='rtl'> {miniDescribe} </span>
            </div>
            <div className='flex flex-row-reverse gap-3 my-2'> <QuillWrite02Icon className='text-slate-700'/> <span className='text-base font-semibold'> {(addUserFullName).replace('-', ' ')} </span> </div>
            <div className='flex flex-row-reverse gap-3 my-2'> <EyeIcon className='text-slate-700'/> <span className='text-base font-semibold'> {currentView} </span> </div>
        </div>
        <div className='w-full flex px-3 gap-10 items-center my-3'>
            <Button onClick={() => navigate('/NewDetail/' + id)} className='bg-blue-500 text-white rounded-full'> بیشتر بخوانید </Button>
            <div className='flex gap-2'> {currentDissLikeCount} <ThumbsDownIcon /> </div>
            <div className='flex gap-2'> {currentLikeCount} <ThumbsUpIcon /> </div>
        </div>
    </div>
    </Skeleton>
  )
}

export default NewsTop
