import { Button } from '@nextui-org/react'
import { insert } from 'formik'
import { ArrowUp01Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React, { Fragment, useState } from 'react'
import AddReply from './AddReply'
import { addLikeComment } from '../../core/services/api/Comments/Like&DissLike/likeComment'
import { addDissLikeComment } from '../../core/services/api/Comments/Like&DissLike/disslikeComment'
import { toast, ToastContainer } from 'react-toastify'

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
    dislikeCount,
    likeCount,
    currentUserEmotion,
    pictureAddress,
    currentUserLikeId,
    Oid,
 }) => {

  const [checkAdd, setCheckAdd] = useState(false)

  const [like, setLike] = useState(currentUserEmotion === 'LIKED' ? true : false)
  const [dislike, setDislike] = useState(currentUserEmotion === 'DISSLIKED' ? true : false)
  
  const [likeCounted, setLikeCounted] = useState(likeCount)
  const [dislikeCounted, setDislikeCounted] = useState(window.location.pathname.includes('NewDetail') ? dislikeCount : disslikeCount)

//   const notifySuccess = (message) => { toast.dismiss(), toast.success(message) }
  const notifyError = () => { toast.dismiss(), toast.error(' شما یک بار نظر خود را اعلام کرده اید ') }

  const likeComment = async () => {
    const response = await addLikeComment(id)
    if(response.success) {
        // notifySuccess(response.message)
    }
    else{
        notifyError()
    }
    }

    const dissLikeComment = async () => {
        const response = await addDissLikeComment(id)
        if(response.success) {
            // notifySuccess(response.message)
        }
        else{
            notifyError()
        }
    }
    
    const liking = () => {
        setLike(true)
        setDislike(false)
    }

    const disliking = () => {
        setLike(false)
        setDislike(true)
    }

    const countingLike = () => {
        setLikeCounted(likeCounted + 1) 
        if(dislikeCounted > 0){
         setDislikeCounted(dislikeCounted - 1) 
        }
     }
     
     const countingDislike = () => {
         setDislikeCounted(dislikeCounted + 1)
         if(likeCounted > 0) {
             setLikeCounted(likeCounted - 1)  
         }
      }

  return (
    <Fragment>
        <div className='w-full h-fit flex flex-col gap-4'>
            <div className='w-fit h-[48px] flex gap-2'>
                <img src={pictureAddress} className='size-12 rounded-full bg-[#5865F2]' />
                <div className='flex flex-col justify-center gap-1'>
                    <h2 className='font-[600] text-[14px]'> {author} </h2>
                    <span className='font-[600] text-[12px] text-[#707070]'> {insertDate} </span>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='font-[700] text-[#2F2F2F] text-[18px] dark:text-white'> {title} </span>
                <span className='font-[500] text-[#2F2F2F] text-[16px] dark:text-white'> {describe} </span>
            </div>
            <div className='flex gap-6 md:items-center md:flex-row flex-col justify-start'>
                <div className='flex gap-4'>
                    <div className='flex gap-2 flex-row-reverse font-[500] text-[#2F2F2F] dark:text-white text-[16px]'> {likeCounted} <ThumbsUpIcon className={`${like ? 'text-red-500' : 'text-black dark:text-white' } cursor-pointer`} onClick={() => {likeComment(), liking(), countingLike()}}  /> </div>
                    <div className='flex gap-2 flex-row-reverse font-[500] text-[#2F2F2F] dark:text-white text-[16px]'> {dislikeCounted} <ThumbsDownIcon className={`${dislike ? 'text-red-500' : 'text-black dark:text-white' } cursor-pointer`} onClick={() => {dissLikeComment(), disliking(), countingDislike()}} /> </div>
                </div>
                {!checkAdd && <Button onClick={() => {setCheckAdd(true), console.log(checkAdd)}} className='bg-white dark:bg-slate-700 dark:border-none dark:text-white w-fit text-blue-500 border rounded-full border-blue-500 text-base font-semibold'> جواب دادن </Button>}
                {checkAdd && <AddReply commentId={id} Oid={Oid} />}
            </div>
        </div>
        <ToastContainer />
    </Fragment>
  )
}

export default ReplyCom