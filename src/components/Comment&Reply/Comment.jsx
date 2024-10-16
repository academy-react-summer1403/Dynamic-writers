import { Button } from '@nextui-org/react'
import { ArrowDown01Icon, ArrowUp01Icon, Comment01Icon, CommentAdd01Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import jMoment from 'moment-jalaali'
import Reply from './Reply'
import { getRepliesCourse } from '../../core/services/api/Comments/getRepliesCourse'

const Comment = ({ comments, courseId }) => {

  const [replyVisible, setVisibleReply] = useState(false)

  const setVisible = () => {
    if(replyVisible === false){
        setVisibleReply(true)
    }
    else{
        setVisibleReply(false)
    }
  }

  return (
    <div className='w-717 h-908 border-4 rounded-3xl gap-2 justify-between flex p-6 flex-col overflow-hidden iranSans' dir='rtl'>
      <Button className='bg-blue-500 text-white rounded-3xl text-base font-semibold'>  نظر شما <Comment01Icon /> </Button>
      <div className='w-full h-770 overflow-hidden flex flex-col gap-8'>
        {comments.map((item) => {

            return <ul className='w-full h-fit flex flex-col gap-4'>
                <div className='w-fit h-[48px] flex gap-2'>
                    <img src={item.pictureAddress} className='size-12 rounded-full bg-[#5865F2]' />
                    <div className='flex flex-col justify-center gap-1'>
                        <h2 className='font-[600] text-[14px]'> {item.author.replace('-', ' ')} </h2>
                        <span className='font-[600] text-[12px] text-[#707070]'> {jMoment(item.insertDate).locale('fa').format('jD jMMMM jYYYY')} </span>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='font-[700] text-[#2F2F2F] text-[18px]'> {item.title} </span>
                    <span className='font-[500] text-[#2F2F2F] text-[16px]'> {item.describe} </span>
                </div>
                <div className='flex gap-6 items-center'>
                    <div className='flex gap-4'>
                        <div className='flex gap-2 flex-row-reverse font-[500] text-[#2F2F2F] text-[16px]'> {item.likeCount} <ThumbsUpIcon className='cursor-pointer' /> </div>
                        <div className='flex gap-2 flex-row-reverse font-[500] text-[#2F2F2F] text-[16px]'> {item.disslikeCount} <ThumbsDownIcon className='cursor-pointer' /> </div>
                    </div>
                    <Button className='bg-white text-blue-500 border rounded-full border-blue-500 text-base font-semibold'> جواب دادن </Button>
                    {item.acceptReplysCount !== 0 && <button onClick={() => setVisible()} className='text-[14px] font-[500] underline flex gap-1 items-center'> مشاهده جواب‌ها ({item.acceptReplysCount}) {replyVisible ? <ArrowUp01Icon className='size-5' /> : <ArrowDown01Icon className='size-5' />} </button> }
                </div>
                
                {replyVisible && <Reply commentId={item.id} courseId={courseId} />}
            </ul>
        })}
      </div>
    </div>
  )
}

export default Comment
