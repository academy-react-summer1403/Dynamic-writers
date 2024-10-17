import React, { useEffect, useState } from 'react'
import { getRepliesCourse } from '../../core/services/api/Comments/getRepliesCourse'
import jMoment from 'moment-jalaali'
import { ArrowUp01Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import { Button } from '@nextui-org/react'
import ReplyCom from './ReplyCom'

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
  
    useEffect(() => {
      getReplies()
    }, [])

    return <>
        {replies.map(reply => {
            return <li className='w-full h-fit flex gap-4'>
              <ReplyCom
                id={reply.id}
                title={reply.title}
                describe={reply.describe}
                author={reply.author.replace('-', ' ')}
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
