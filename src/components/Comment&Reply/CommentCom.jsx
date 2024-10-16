import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { ArrowDown01Icon, ArrowUp01Icon, Comment01Icon, CommentAdd01Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import jMoment from 'moment-jalaali'
import Reply from './Reply'
import { addLikeComment } from '../../core/services/api/Comments/Like&DissLike/likeComment'
import { addDissLikeComment } from '../../core/services/api/Comments/Like&DissLike/disslikeComment'

const CommentCom = ({ pictureAddress, title, describe, likeCount, disslikeCount, insertDate, author, acceptReplysCount, id, courseId }) => {

    const [replyVisible, setVisibleReply] = useState(false)
    const [likeCheck, setLike] = useState(false)
    const [dissLikeCheck, setDissLike] = useState(false)

    const setVisible = () => {
      if(replyVisible === false){
          setVisibleReply(true)
      }
      else{
          setVisibleReply(false)
      }
    }

    const addLike = async () => {
        const res = await addLikeComment(id)
    }

    const addDissLike = async () => {
        const res2 = await addDissLikeComment(id)
    }

    const handleLike = () => {
        if(!likeCheck){
            setLike(true)
            setDissLike(false)
        }
    }

    const handleDissLike = () => {
        if(!dissLikeCheck){
            setDissLike(true)
            setLike(false)
        }
    }

    useEffect(() => {
        addLike()
    }, [likeCheck])

    useEffect(() => {
        addDissLike()
    }, [dissLikeCheck])

  return (
    <ul className='w-full h-fit flex flex-col gap-4'>
        <div className='w-fit h-[48px] flex gap-2'>
            <img src={pictureAddress} className='size-12 rounded-full bg-[#5865F2]' />
            <div className='flex flex-col justify-center gap-1'>
                <h2 className='font-[600] text-[14px]'> {author.replace('-', ' ')} </h2>
                <span className='font-[600] text-[12px] text-[#707070]'> {jMoment(insertDate).locale('fa').format('jD jMMMM jYYYY')} </span>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-[700] text-[#2F2F2F] text-[18px]'> {title} </span>
            <span className='font-[500] text-[#2F2F2F] text-[16px]'> {describe} </span>
        </div>
        <div className='flex gap-6 items-center'>
            <div className='flex gap-4'>
                <div onClick={() => handleLike()} className='flex gap-2 flex-row-reverse font-[500] text-[#2F2F2F] text-[16px]'> {likeCount} <ThumbsUpIcon style={likeCheck ? {color: 'red'} : {color: 'black'}} className='cursor-pointer' /> </div>
                <div onClick={() => handleDissLike()} className='flex gap-2 flex-row-reverse font-[500] text-[#2F2F2F] text-[16px]'> {disslikeCount} <ThumbsDownIcon style={dissLikeCheck ? {color: 'red'} : {color: 'black'}} className='cursor-pointer' /> </div>
            </div>
            <Button className='bg-white text-blue-500 border rounded-full border-blue-500 text-base font-semibold'> جواب دادن </Button>
            {acceptReplysCount !== 0 && <button onClick={() => setVisible()} className='text-[14px] font-[500] underline flex gap-1 items-center'> مشاهده جواب‌ها ({acceptReplysCount}) {replyVisible ? <ArrowUp01Icon className='size-5' /> : <ArrowDown01Icon className='size-5' />} </button> }
        </div>
        
        {replyVisible && <Reply commentId={id} courseId={courseId} />}
    </ul>
  )
}

export default CommentCom
