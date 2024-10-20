import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from '@nextui-org/react'
import { Cancel01Icon, Comment01Icon } from 'hugeicons-react'
import React, { useState } from 'react'
import CommentCom from './CommentCom'
import AddComment from './AddComment'

const CommentModal = ({onOpen, isOpen, onOpenChange, Oid, title, comments }) => {
  
  const [checkAdd, setCheckAdd] = useState(false)

  return (
     <Modal dir='rtl' isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior='outside' placement='top' size='5xl'>
     <ModalContent>
          {(onClose) => (
            <>

                <ModalHeader className="flex justify-between flex-row-reverse items-center gap-1">


                <h2 className='font-[700] text-[24px] flex flex-row-reverse w-full justify-end gap-1'> <h3 className='text-gray-500 text-[18px]'> ( دوره {title} ) </h3> نظرات </h2>

                </ModalHeader>
              <ModalBody>
              {!checkAdd && <Button onClick={() => setCheckAdd(true)} className='bg-blue-500 h-[40px] w-fit text-white md:flex hidden rounded-3xl text-base font-semibold'>  نظر شما <Comment01Icon /> </Button>}
              {checkAdd && <AddComment Oid={Oid} setCheckAdd={setCheckAdd} />}
                <div className='w-full h-fit flex flex-col overflow-hidden gap-8 bg-gradient-to-b from-white to-transparent'>
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
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
     </Modal> 
  )
}

export default CommentModal
