import React, { useState } from 'react'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from '@nextui-org/react'
import { Cancel01Icon, Comment01Icon } from 'hugeicons-react'
import AddComment from '../../../Comment&Reply/AddComment';
import MyCommentCourseCom from './Comment/MyCommentCourseCom';
import MyCommentNewCom from './Comment/MyCommentNewCom';

const MyCommentModal = ({ isOpen, onOpenChange, comments, commentsNew }) => {

    const [checkAdd, setCheckAdd] = useState(false)

  return (
       <Modal dir='rtl' isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior='outside' placement='top' size='5xl'>
        <ModalContent>
          {(onClose) => (
            <>

                <ModalHeader className="flex flex-row-reverse items-center gap-1 justify-end">

                    <div className='flex gap-7 items-center'>
                        <h2 className='font-[700] text-[24px] flex flex-row-reverse w-full justify-end gap-1'> نظرات شما</h2>
                    </div>

                </ModalHeader>
              
                <ModalBody>
                    <Tabs classNames={{
                        tabList: 'rounded-full p-0',
                        tab: 'rounded-full border-none',
                        tabContent: '',
                        cursor: 'bg-blue-500 rounded-full'
                    }}>
                        <Tab key='courses' title='دوره ها'>
                            <Card>
                                <CardBody>
                                        <div className='w-full h-fit flex flex-col overflow-hidden gap-8 bg-gradient-to-b from-white to-transparent'>
                                            {comments.map((item) => {

                                                return <MyCommentCourseCom
                                                    courseTitle={item.courseTitle}
                                                    insertDate={item.insertDate}
                                                    likeCount={item.likeCount}
                                                    dislikeCount={item.dislikeCount}
                                                    replyCount={item.replyCount}
                                                    id={item.commentId}
                                                    Oid={item.courseId}
                                                    title={item.title}
                                                    describe={item.describe}
                                                    modal={true}
                                                />
                                            })}
                                            {comments[0] == undefined && <span className='mx-auto h-[300px] text-[30px] text-gray-400 font-semibold flex items-center'> نظری ثبت نشده است </span>}
                                        </div>
                                </CardBody>
                            </Card>
                        </Tab>

                        <Tab key='News' title='اخبار و مقالات'>
                            <Card>
                                <CardBody>
                                        <div className='w-full h-fit flex flex-col overflow-hidden gap-8 bg-gradient-to-b from-white to-transparent'>
                                            {commentsNew.map((item) => {

                                                return <MyCommentNewCom
                                                    courseTitle={item.courseTitle}
                                                    insertDate={item.insertDate}
                                                    likeCount={item.likeCount}
                                                    dislikeCount={item.dislikeCount}
                                                    replyCount={item.replyCount}
                                                    id={item.commentId}
                                                    Oid={item.newsId}
                                                    title={item.title}
                                                    describe={item.describe}
                                                    modal={true}
                                                />
                                            })}
                                            {comments[0] == undefined && <span className='mx-auto h-[300px] text-[30px] text-gray-400 font-semibold flex items-center'> نظری ثبت نشده است </span>}
                                        </div>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </ModalBody>

            </>
          )}
        </ModalContent>
     </Modal> 

  )
}

export default MyCommentModal
