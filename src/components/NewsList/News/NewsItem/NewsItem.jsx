import { Button } from '@nextui-org/react'
import { Calendar01Icon, QuillWrite01Icon, QuillWrite02Icon, ThumbsDownIcon, ThumbsUpIcon, ViewIcon } from 'hugeicons-react'
import React from 'react'

const NewsItem = ({ id, title, miniDescribe, currentImageAddressTumb, currentView, addUserFullName, insertDate, currentDissLikeCount, currentLikeCount, keyword, newsCatregoryName }) => {
  return (
    <div className='flex bg-gray-100 rounded-3xl h-72 flex-row-reverse' style={{width: '985px'}}>
      <div className='bg-red-300 h-full w-5/12 rounded-3xl relative'>
        <img src={currentImageAddressTumb} className='w-full h-full rounded-3xl' />
        <div className='h-fit w-fit absolute top-2 right-2 flex gap-2 flex-row-reverse'>
            <div className='bg-blue-500 w-fit text-white rounded-full px-3 py-1 shadow-lg text-sm font-bold whitespace-nowrap max-w-40 overflow-hidden text-ellipsis'> {keyword} </div>
            <div className='bg-blue-500 w-fit text-white rounded-full px-3 py-1 shadow-lg text-sm font-bold whitespace-nowrap max-w-40 overflow-hidden text-ellipsis'> {newsCatregoryName} </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 p-3 w-7/12 items-end justify-between'>
        <h2 className='text-2xl iranSansBold w-full overflow-hidden' dir='rtl'> {title} </h2>
        <span className='w-full text-ellipsis overflow-hidden text-right text-gray-600 text-sm font-semibold'> {miniDescribe} </span>
      
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
                <span className='font-semibold text-sm'> {insertDate} </span>
            </div>
        </div>

        <div className='w-full flex justify-between items-center'>
            <Button className='bg-blue-500 text-white rounded-full font-semibold'> بیشتر بخوانید </Button>
            <div className='flex w-fit h-fit gap-8 flex-row-reverse items-center'>
                <div className='flex gap-4 flex-row-reverse font-semibold text-sm items-center'> <ThumbsUpIcon /> {currentLikeCount} </div>
                <div className='flex gap-4 flex-row-reverse font-semibold text-sm items-center'> <ThumbsDownIcon /> {currentDissLikeCount} </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
