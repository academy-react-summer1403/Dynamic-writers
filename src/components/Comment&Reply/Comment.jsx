import { Button } from '@nextui-org/react'
import { ArrowDown01Icon, ArrowUp01Icon, Comment01Icon, CommentAdd01Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import CommentCom from './CommentCom'

const Comment = ({ comments, courseId }) => {

  return (
    <div className='w-717 h-908 border-4 rounded-3xl gap-2 justify-between flex p-6 flex-col overflow-hidden iranSans bg-gradient-to-b from-white to-transparent' dir='rtl'>
      <Button className='bg-blue-500 text-white rounded-3xl text-base font-semibold'>  نظر شما <Comment01Icon /> </Button>
      <div className='w-full h-770 overflow-hidden flex flex-col gap-8'>
        {comments.map((item) => {

            return <CommentCom
                pictureAddress={item.pictureAddress}
                author={item.author}
                insertDate={item.insertDate}
                likeCount={item.likeCount}
                disslikeCount={item.disslikeCount}
                acceptReplysCount={item.acceptReplysCount}
                id={item.id}
                courseId={courseId}
                title={item.title}
                describe={item.describe}
            />
        })}
      </div>
    </div>
  )
}

export default Comment
