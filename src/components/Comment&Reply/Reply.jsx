import React, { useEffect, useState } from 'react'
import { getRepliesCourse } from '../../core/services/api/Comments/getRepliesCourse'
import jMoment from 'moment-jalaali'
import { ArrowUp01Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import { Button } from '@nextui-org/react'
import ReplyCom from './ReplyCom'
import { getRepliesNew } from '../../core/services/api/Comments/New/getRepliesNew'

const Reply = ({ commentId, Oid }) => {

    const [replies, setReply] = useState([])

    const getReplies = async () => {
      const params = {
          Oid: Oid,
          commentId: commentId
      }
  
      const response = await getRepliesCourse(params)
      setReply(response)
    }

    const repliesNew = async () => {
  
      const response = await getRepliesNew(commentId)
      setReply(response)
      console.log(response)
      console.log(commentId)
    }
  
    useEffect(() => {
      getReplies()
      repliesNew()
    }, [])

    return <>
        {replies.map((reply, index) => {
            return <li key={index} className='border-r-5 border-blue-500 pr-5 w-full h-fit flex gap-4'>
              <ReplyCom
                id={reply.id}
                title={reply.title}
                describe={reply.describe}
                author={(reply.author) ? (reply.author === null ? 'ناشناس' : reply.author.replace('-', ' ')) : (reply.autor === null ? 'ناشناس' : reply.autor.replace('-', ' '))}
                userId={reply.userId}
                insertDate={jMoment(reply.insertDate).locale('fa').format('jD jMMMM jYYYY')}
                accept={reply.accept}
                acceptReplysCount={reply.acceptReplysCount}
                disslikeCount={reply.disslikeCount}
                likeCount={reply.likeCount}
                currentUserEmotion={reply.currentUserEmotion}
                pictureAddress={reply.pictureAddress}
                currentUserLikeId={reply.currentUserLikeId}
                Oid={Oid}
            />
            </li>
        })}
    </>
}

export default Reply
