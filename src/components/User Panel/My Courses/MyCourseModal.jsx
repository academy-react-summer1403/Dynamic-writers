import { Button, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import { Calendar01Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { Link } from 'react-router-dom'
import { getDetailIdTeacher } from '../../../core/services/api/Teacher/getDetailTeacherWithId'
import jMoment from 'jalali-moment'
import CourseLike from '../../../core/services/api/Course/CourseLike'
import CourseDisLike from '../../../core/services/api/Course/CourseDisLike'
import { toast, ToastContainer } from 'react-toastify'

const MyCourseModal = ({ 
    isOpen, 
    onOpenChange,                
    tumbImageAddress,
    levelName,
    statusName,
    fullName,
    courseTitle,
    courseId,
    describe,
    cost,
    lastUpdate,
    paymentStatus,
    teacherId,}) => {
  
    const [teacher, setTeacher] = useState([])
    const NotifySuccess = (message) => {
        toast.dismiss()

        toast.success(message)
    }

    const NotifyError = (message) => {
        toast.dismiss()

        toast.error(message)
    }

    const DetailTeacher = async () => {
        const response = await getDetailIdTeacher(teacherId)
        setTeacher(response)
    }

    const Like = async () => {
        const like = await CourseLike(courseId)

        if(like.success === true) {
            NotifySuccess(like.message)
        }
        else if(like.success === false){
            NotifyError(' دوره ای یافت نشد ')
        }
        else{
            NotifyError(' شما نظر خود را ثبت کرده اید ')
        }
    }

    const Dislike = async () => {
        const dislike = await CourseDisLike(courseId)
        console.log(courseId)

        if(dislike.success === true) {
            NotifySuccess(dislike.message)
        }
        else if(dislike.success === false){
            NotifyError(' دوره ای یافت نشد ')
        }
        else{
            NotifyError(' شما نظر خود را ثبت کرده اید ')
        }
    }
    

    useEffect(() => {
        DetailTeacher()
    }, [])
        
  return (
    <Modal dir='rtl' isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior='outside' placement='top' size={'lg'}>
      <ModalContent>
      {(onClose) => (
        <>

        <ModalHeader className="flex flex-row-reverse items-center gap-1 justify-end">

            <div className='flex gap-7 items-center'>
                <h2 className='font-[700] text-[24px] flex flex-row-reverse w-full justify-end gap-1'> دوره </h2>
            </div>

            <ToastContainer />

        </ModalHeader>

        <ModalBody>

                <div className='w-full h-[287px] bg-[#E8E8E8] rounded-[16px] relative'>
                    <img src={tumbImageAddress} className='w-full h-full rounded-[16px]' />
                    <div className='bg-[#5A7EFF] rounded-full px-3 py-0.5 text-sm font-semibold text-white absolute top-3 right-3'> {levelName} </div>
                    <div className='px-3 text-sm py-0.5 bg-red-200 text-[#FF5454] rounded-full absolute bottom-3 right-3 flex flex-row-reverse gap-2 items-center'> {statusName} <div className='bg-[#FF5454] rounded-full size-2'></div> </div>
                </div>
                <div className='w-full h-fit flex justify-between items-center'>
                    <Button className='bg-blue-500 text-white rounded-full'> <Link to={`/CourseDetail/${courseId}`}> صفحه دوره  </Link> </Button>
                    <div className='flex gap-2 items-center h-full w-fit'>
                        <button className='border-2 flex justify-center items-center bg-white rounded-full size-14 min-w-14 min-h-14 hover:bg-blue-300'> <ThumbsDownIcon onClick={Dislike} className='size-6' /> </button>
                        <button className='border-2 flex justify-center items-center bg-white rounded-full size-14 min-w-14 min-h-14 hover:bg-blue-300'> <ThumbsUpIcon onClick={Like} className='size-6' /> </button>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-base text-[#787878]'> نام دوره </h2>
                    <span className='text-[24px] font-bold'> {courseTitle} </span>
                </div>
                <div className='flex flex-col gap-4 my-5'>
                    <h2 className='text-base text-[#787878]'> وضعیت پرداختی </h2>
                    <div className='flex justify-between w-full items-center'>
                        <div className='flex items-center w-fit whitespace-nowrap gap-2'>
                        <CircularProgressbar className="size-12" value='70' text={70 + '%'} styles={buildStyles({
                            textColor: `orange`,
                            textSize: '25px',
                            display: 'flex',
                            pathColor: `orange`,
                            trailColor: 'transparent'
                        })} /> 
                        <span> {paymentStatus} </span>
                        </div>
                        <h2 className='text-2xl text-bold flex items-center gap-2'> {Number(cost).toLocaleString('en-US')} <span className='text-[#3772FF] text-base font-semibold'> تومان </span> </h2>
                    </div>
                </div>
                <div className='flex flex-col gap-4 my-2'>
                    <h2 className='text-base text-[#787878]'> توضیح مختصر </h2>
                    <span className='text-[16px] text-[#272727] h-[46px] overflow-hidden' dir='rtl'> {describe} </span>
                </div>
                <div className='flex flex-col gap-4 my-2'>
                    <h2 className='text-base text-[#787878]'> مدرس دوره </h2>
                    <div className='flex gap-4'>
                        <img src={teacher.pictureAddress} className='size-14 min-w-14 min-h-14 bg-[#D9D9D9] rounded-full' />
                        <div className='flex flex-col'>
                            <h2 className='text-[20px] font-[700] text-[#272727]'> {fullName.replace('-' ,' ')} </h2>
                            <span className='text-base text-[#787878]'> سنیور دوره </span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 my-2'>
                    <div className='flex gap-4'> <Calendar01Icon /> <span className='flex flex-row-reverse gap-1'> <span className='text-gray-400'> (شروع) </span> {jMoment(lastUpdate).locale('fa').format('jD jMMMM jYYYY')} </span> </div>
                </div>

        </ModalBody>

        </>
      )}
      
      </ModalContent>
    </Modal>
  )
}

export default MyCourseModal
