import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { ArrowDown01Icon, ArrowUp01Icon, Comment01Icon, CommentAdd01Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import jMoment from 'jalali-moment'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import AddReply from '../../../../Comment&Reply/AddReply';
import AddReplyNew from '../Reply/AddReplyNew';

const MyCommentNewCom = ({                
  courseTitle,
  insertDat,
  likeCount,
  dislikeCount,
  replyCount,
  id,
  Oid,
  title,
  describe,
  modal
}) => {


  const [replyVisible, setVisibleReply] = useState(false)
  const [checkAdd, setCheckAdd] = useState(false)

  const notifySuccess = (message) => { toast.dismiss(), toast.success(message) }
  const notifyError = () => { toast.dismiss(), toast.error(' شما یک بار نظر خود را اعلام کرده اید ') }
  const notifyError2 = () => { toast.dismiss(), toast.warn(' شما نمی توانی نظر خودتون رو لایک کنید ') }

  const setVisible = () => {
    if(replyVisible === false){
        setVisibleReply(true)
    }
    else{
        setVisibleReply(false)
    }
  }

  return (
    <ul className='w-full h-fit flex flex-col gap-4'>
        <div className='w-fit h-[48px] flex gap-2'>
            <img className='size-12 min-w-12 min-h-12 rounded-full bg-[#5865F2]' />
            <div className='flex flex-col justify-center gap-1'>
                <h2 className='font-[600] text-[14px] text-right'> شما </h2>
                <span className='font-[600] text-[12px] text-[#707070] text-right whitespace-nowrap'> {jMoment(insertDat).locale('fa').format('jD jMMMM jYYYY')} </span>
            </div>
        </div>
        <div className='flex flex-col gap-2 text-right'>
            <span className='font-[700] text-[#2F2F2F] text-[18px] text-ellipsis whitespace-nowrap'> {title} </span>
            <span className='font-[500] text-[#2F2F2F] text-[16px] text-ellipsis whitespace-nowrap'> {describe} </span>
        </div>
        <div className='flex gap-6 flex-col md:flex-row items-start'>
            <div className='flex gap-4'>
                <div className='flex gap-2 flex-row-reverse font-[500] text-[#2F2F2F] text-[16px]'> {likeCount} <ThumbsUpIcon onClick={notifyError2} className='cursor-pointer' /> </div>

                <div className='flex gap-2 flex-row-reverse font-[500] text-[#2F2F2F] text-[16px]'> {dislikeCount} <ThumbsDownIcon onClick={notifyError2} className='cursor-pointer' /> </div>
            </div>
            <div className='flex gap-4'>
                {!checkAdd && modal && <Button onClick={() => {setCheckAdd(true)}} className='bg-white text-blue-500 border rounded-full border-blue-500 text-base font-semibold'> جواب دادن </Button>}
                {replyCount > 0 && <button onClick={() => setVisible()} className='whitespace-nowrap text-[14px] font-[500] underline flex gap-1 items-center'> مشاهده جواب‌ها ({replyCount}) {replyVisible ? <ArrowUp01Icon className='size-5' /> : <ArrowDown01Icon className='size-5' />} </button> }
            </div>

            {checkAdd && <AddReplyNew commentId={id} Oid={Oid} setCheckAdd={setCheckAdd} />}

        </div>
        
        {/* {replyVisible && <Reply commentId={id} Oid={Oid} />} */}
        <ToastContainer/>
    </ul>
  )
}

export default MyCommentNewCom
