import React from 'react'
import { Button, Skeleton } from '@nextui-org/react'
import { Calendar01Icon, QuillWrite01Icon, QuillWrite02Icon, ThumbsDownIcon, ThumbsUpIcon, ViewIcon } from 'hugeicons-react'
import { Link } from 'react-router-dom'

const NewsItemsRes = ({isLoaded ,id, title, miniDescribe, currentImageAddressTumb, addUserProfileImage, currentView, addUserFullName, insertDate, currentDissLikeCount, currentLikeCount, keyword, newsCatregoryName }) => {
  return (
    <Skeleton className='rounded-3xl' isLoaded={isLoaded}>
      <div className='flex bg-gray-100 rounded-3xl h-72 flex-col dark:text-white dark:bg-slate-900' style={{width: '315px', height: '520px'}}>
      <div className='bg-red-300 w-full rounded-3xl relative' style={{height: "225px"}}>
        <img src={currentImageAddressTumb} className='w-full h-full rounded-3xl' />
        <div className='h-fit w-fit absolute top-2 right-2 flex gap-2 flex-row-reverse'>
            <div className='bg-blue-500 w-fit text-white rounded-full px-3 py-1 shadow-lg text-sm font-bold whitespace-nowrap max-w-40 overflow-hidden text-ellipsis'> {keyword} </div>
            <div className='bg-blue-500 w-fit text-white rounded-full px-3 py-1 shadow-lg text-sm font-bold whitespace-nowrap max-w-40 overflow-hidden text-ellipsis'> {newsCatregoryName} </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 p-3 w-full items-end justify-between overflow-hidden' style={{height: '280px'}}>
        <h2 className='text-xl iranSansBold w-full text-right text-ellipsis'> {title} </h2>
        <span className='w-full h-[42px] text-ellipsis break-all overflow-hidden text-gray-600 text-sm font-semibold text-right'> {miniDescribe} </span>
      
        <div className='flex flex-col gap-4 items-end'>
            <div className='flex gap-4 flex-row-reverse items-center'>
                <QuillWrite02Icon />
                <span className='font-semibold text-sm'> {addUserFullName} </span>
            </div>
            <div className='flex gap-4 flex-row-reverse items-center'>
                <ViewIcon />
                <span className='font-semibold text-sm'> {currentView} </span>
            </div>
            <div className='flex gap-4 flex-row-reverse items-center'>
                <Calendar01Icon />
                <span className='font-semibold text-sm' dir='rtl'> {insertDate} </span>
            </div>
        </div>

        <div className='w-full flex justify-between items-center'>
            <Button className='bg-blue-500 text-white rounded-full font-semibold' > <Link to={`/NewDetail/${id}`}> بیشتر بخوانید </Link> </Button>
            <div className='flex w-fit h-fit gap-8 flex-row-reverse items-center'>
                <div className='flex gap-4 flex-row-reverse font-semibold text-sm items-center'> <ThumbsUpIcon /> {currentLikeCount} </div>
                <div className='flex gap-4 flex-row-reverse font-semibold text-sm items-center'> <ThumbsDownIcon /> {currentDissLikeCount} </div>
            </div>
        </div>
      </div>
    </div>
    </Skeleton>
  )
}

export default NewsItemsRes