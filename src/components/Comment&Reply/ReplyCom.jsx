import { Button } from '@nextui-org/react'
import { insert } from 'formik'
import { ArrowUp01Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React, { Fragment } from 'react'

const ReplyCom = ({                 
    id,
    title,
    describe,
    author,
    userId,
    insertDate,
    accept,
    acceptReplysCount,
    disslikeCount,
    likeCount,
    currentUserEmotion,
    pictureAddress,
    currentUserLikeId, }) => {

  return (
    <Fragment>
      <div className='h-full w-[7px] bg-blue-500 rounded-[10px]'> </div>
        <div className='w-full h-fit flex flex-col gap-4'>
            <div className='w-fit h-[48px] flex gap-2'>
                <img src={pictureAddress} className='size-12 rounded-full bg-[#5865F2]' />
                <div className='flex flex-col justify-center gap-1'>
                    <h2 className='font-[600] text-[14px]'> {author} </h2>
                    <span className='font-[600] text-[12px] text-[#707070]'> {insertDate} </span>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='font-[700] text-[#2F2F2F] text-[18px]'> {title} </span>
                <span className='font-[500] text-[#2F2F2F] text-[16px]'> {describe} </span>
            </div>
            <div className='flex gap-6 items-center'>
                <div className='flex gap-4'>
                    <div className='flex gap-2 flex-row-reverse font-[500] text-[#2F2F2F] text-[16px]'> {likeCount} <ThumbsUpIcon className='cursor-pointer' /> </div>
                    <div className='flex gap-2 flex-row-reverse font-[500] text-[#2F2F2F] text-[16px]'> {disslikeCount} <ThumbsDownIcon className='cursor-pointer' /> </div>
                </div>
                <Button className='bg-white text-blue-500 border rounded-full border-blue-500 text-base font-semibold'> جواب دادن </Button>
            </div>
        </div>
    </Fragment>
  )
}

export default ReplyCom