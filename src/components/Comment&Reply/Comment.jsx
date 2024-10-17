import { Button } from '@nextui-org/react'
import { ArrowDown01Icon, ArrowUp01Icon, Comment01Icon, CommentAdd01Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import CommentCom from './CommentCom'
import AddComment from './AddComment'

const Comment = ({ comments, Oid }) => {

  const [checkAdd, setCheckAdd] = useState(false)

  return (
    <div className='msx-w-717 h-908 border-4 rounded-3xl gap-2 justify-between flex p-6 flex-col iranSans' dir='rtl'>
      <Button onClick={() => setCheckAdd(true)} className='bg-blue-500 h-[40px] text-white md:flex hidden rounded-3xl text-base font-semibold'>  نظر شما <Comment01Icon /> </Button>
      <div className='w-full h-[750px] flex flex-col overflow-y-scroll gap-8 bg-gradient-to-b from-white to-transparent border-b-2'>
        {comments.map((item) => {

            return <CommentCom
                pictureAddress={item.pictureAddress}
                author={(item.author) ? (item.author === null ? 'ناشناس' : item.author) : (item.autor === null ? 'ناشناس' : item.autor)}
                insertDate={item.insertDate}
                likeCount={item.likeCount}
                disslikeCount={item.disslikeCount && item.disslikeCount }
                dissLikeCount={item.dissLikeCount && item.dissLikeCount }
                acceptReplysCount={(item.acceptReplysCount) ? item.acceptReplysCount : item.replyCount}
                id={item.id}
                Oid={Oid}
                title={item.title}
                describe={item.describe}
                currentUserIsLike={(item.currentUserIsLike) ? item.currentUserIsLike : null}
                currentUserIsDissLike={(item.currentUserIsDissLike) ? item.currentUserIsDissLike : null}
                currentUserEmotion={item.currentUserEmotion}
            />
        })}
        {comments[0] == undefined && <span className='mx-auto h-[300px] text-[30px] text-gray-400 font-semibold flex items-center'> نظری ثبت نشده است </span>}
      </div>
      {!checkAdd && <Button onClick={() => setCheckAdd(true)} className='bg-blue-500 h-[40px] text-white md:hidden rounded-3xl text-base font-semibold'>  نظر شما <Comment01Icon /> </Button>}
      {checkAdd && <AddComment Oid={Oid} setCheckAdd={setCheckAdd} />}
    </div>
  )
}

export default Comment
