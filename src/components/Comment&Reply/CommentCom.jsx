import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { ArrowDown01Icon, ArrowUp01Icon, Comment01Icon, CommentAdd01Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import jMoment from 'moment-jalaali'
import Reply from './Reply'
import 'react-toastify/dist/ReactToastify.css';
import { addLikeComment } from '../../core/services/api/Comments/Like&DissLike/likeComment'
import { addDissLikeComment } from '../../core/services/api/Comments/Like&DissLike/disslikeComment'
import { ToastContainer, toast } from 'react-toastify'
import AddReply from './AddReply'
import { useSearchParams } from 'react-router-dom'
import { addLikeCommentNew } from '../../core/services/api/Comments/New/Lile&DissLike/LikeCommentNew'

const CommentCom = ({ pictureAddress, title, describe, likeCount, disslikeCount, dissLikeCount, insertDate, author, acceptReplysCount, id, Oid, currentUserIsLike, currentUserIsDissLike, currentUserEmotion }) => {

    const [replyVisible, setVisibleReply] = useState(false)
    const [checkAdd, setCheckAdd] = useState(false)

    const notifySuccess = (message) => { toast.dismiss(), toast.success(message) }
    const notifyError = () => { toast.dismiss(), toast.error(' شما یک بار نظر خود را اعلام کرده اید ') }

    const setVisible = () => {
      if(replyVisible === false){
          setVisibleReply(true)
      }
      else{
          setVisibleReply(false)
      }
    }

    const likeComment = async () => {
        const response = await addLikeComment(id)
        if(response.success) {
            notifySuccess(response.message)
        }
        else{
            notifyError()
        }
    }

    const dissLikeComment = async () => {
        const response = await addDissLikeComment(id)
        if(response.success) {
            notifySuccess(response.message)
        }
        else{
            notifyError()
        }
    }

    const likeNew = async (likeType) => {
        const response = await addLikeCommentNew(id, likeType)
        if(response.success) {
            notifySuccess(' نظر شما با موفقیت ثبت شد ')
        }
        else{
            notifyError()
        }
    }

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
        <div className='flex gap-6 flex-col items-start'>
            <div className='flex gap-4'>
                <div className='flex gap-2 flex-row-reverse font-[500] text-[#2F2F2F] text-[16px]'> {likeCount} <ThumbsUpIcon style={window.location.pathname.includes('NewDetail') ? currentUserIsLike ? {color: 'red'} : {color: 'black'} : currentUserEmotion === 'LIKED' ? {color: 'red'} : {color: 'black'} } onClick={() => window.location.pathname.includes('NewDetail') ? likeNew(true) : likeComment()}  className='cursor-pointer' /> </div>

                <div className='flex gap-2 flex-row-reverse font-[500] text-[#2F2F2F] text-[16px]'> {window.location.pathname.includes('NewDetail') ? dissLikeCount : disslikeCount} <ThumbsDownIcon style={window.location.pathname.includes('NewDetail') ? currentUserIsDissLike ? {color: 'red'} : {color: 'black'}  : currentUserEmotion === 'DISSLIKED' ? {color: 'red'} : {color: 'black'} } onClick={() => window.location.pathname.includes('NewDetail') ? likeNew(false) : dissLikeComment()} className='cursor-pointer' /> </div>
            </div>
            <div className='flex gap-4'>
                {!checkAdd && <Button onClick={() => {setCheckAdd(true)}} className='bg-white text-blue-500 border rounded-full border-blue-500 text-base font-semibold'> جواب دادن </Button>}
                {acceptReplysCount > 0 && <button onClick={() => setVisible()} className='whitespace-nowrap text-[14px] font-[500] underline flex gap-1 items-center'> مشاهده جواب‌ها ({acceptReplysCount}) {replyVisible ? <ArrowUp01Icon className='size-5' /> : <ArrowDown01Icon className='size-5' />} </button> }
            </div>

            {checkAdd && <AddReply commentId={id} Oid={Oid} setCheckAdd={setCheckAdd} />}

        </div>
        
        {replyVisible && <Reply commentId={id} Oid={Oid} />}
        <ToastContainer/>
    </ul>
  )
}

export default CommentCom
