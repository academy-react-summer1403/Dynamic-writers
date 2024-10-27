import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { Calendar01Icon, StudentsIcon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getDetailIdTeacher } from '../../../../core/services/api/Teacher/getDetailTeacherWithId'
import jMoment from 'jalali-moment'
import CourseLike from '../../../../core/services/api/Course/CourseLike'
import CourseDisLike from '../../../../core/services/api/Course/CourseDisLike'
import { toast, ToastContainer } from 'react-toastify'
import GetCourseById from '../../../../core/services/api/Course/GetCourseById'
import { AddReserve } from '../../../../core/services/api/Reserve/addReserve'
import CourseReserve from '../../../CourseReserve/CourseReserve'
import ReserveModal from '../../../../core/services/common/Modal/ReserveModal'
import { getMyReserves } from '../../../../core/services/api/Panel/MyReserve/getMyReserves'
import { ToastSuccess } from '../../../../core/services/common/Toast/ToastSucces'

const FavCourseModal = ({ 
    courseId,
    isOpenD, 
    onOpenChangeD,   
}) => {

    const [course, setCourse] = useState([])
    const [Flags, setFlags] = useState(false)
    const [like, setLike] = useState()
    const [dislike, setDislike] = useState()

    const[Flag,setFlag]=useState(course.isCourseReseve)

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const navigate = useNavigate()
  
    const NotifySuccess = (message) => {
        toast.dismiss()

        toast.success(message)
    }

    const NotifyError = (message) => {
        toast.dismiss()

        toast.error(message)
    }

    const Like = async () => {
        const like = await CourseLike(courseId)

        if(like.success === true) {
            // NotifySuccess(like.message)
            setLike(true)
            setDislike(false)
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

        if(dislike.success === true) {
            // NotifySuccess(dislike.message)
            setDislike(true)
            setLike(false)
        }
        else if(dislike.success === false){
            NotifyError(' دوره ای یافت نشد ')
        }
        else{
            NotifyError(' شما نظر خود را ثبت کرده اید ')
        }
    }

    const getCourse = async () => {
        const response = await GetCourseById(courseId)
        setCourse(response)
    }

    const addReserve = async () => {
      const response = await AddReserve(courseId)

      if(response.success === true) {
        setFlags(true)
        onOpenChange(false)
        onOpenChangeD(false)
        navigate('/layoutPanel/myReserve')
      }
      else {
        NotifyError('شما قبلا این دوره را رزرو کرده اید ')
        onOpenChange(false)
      }
    }

    const onOpening = () => {
        if(Flag == 0){
            onOpen(true)
        }
        else{
            toast.error(' شما نمی توانید این دوره را برای دومین بار رزرو کنید ')
        }
    }
    
    useEffect(() => {
        getCourse()
    }, [])

    useEffect(() => {
        setDislike(course.currentUserDissLike == 1 ? true : false)
        setLike(course.currentUserLike == 1 ? true : false)

        setFlag(course.isCourseReseve)
    }, [course])

        
  return (
    <Modal dir='rtl' isOpen={isOpenD} onOpenChange={onOpenChangeD} scrollBehavior='outside' placement='top' size={'lg'}>
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
                {Flags && <CourseReserve Flags={setFlags} />}
                <div className='w-full h-[287px] bg-[#E8E8E8] rounded-[16px] relative'>
                    <img src={course.imageAddress} className='w-full h-full rounded-[16px]' />
                                        <div className='bg-[#5A7EFF] rounded-full px-3 py-0.5 text-sm font-semibold text-white absolute top-3 right-3'> {course.courseLevelName} </div>
                    <div className='px-3 text-sm py-0.5 bg-red-200 text-[#FF5454] rounded-full absolute bottom-3 right-3 flex flex-row-reverse gap-2 items-center'> {course.courseStatusName} <div className='bg-[#FF5454] rounded-full size-2'></div> </div>
                </div>
                <div className='w-full h-fit flex justify-between items-center'>
                    <Button className='bg-blue-500 text-white rounded-full'> <Link to={`/CourseDetail/${courseId}`}> صفحه دوره  </Link> </Button>
                    <div className='flex gap-2 items-center h-full w-fit'>
                        <button className='border-2 flex justify-center items-center dark:bg-slate-600 dark:text-white dark:border-none bg-white rounded-full size-14 min-w-14 min-h-14 hover:bg-blue-300'> <ThumbsDownIcon onClick={Dislike}  className={`${dislike ? 'text-red-500' : 'text-black dark:text-white'} size-6`} /> </button>
                        <button className='border-2 flex justify-center items-center dark:bg-slate-600 dark:text-white dark:border-none bg-white rounded-full size-14 min-w-14 min-h-14 hover:bg-blue-300'> <ThumbsUpIcon onClick={Like}  className={`${like ? 'text-red-500' : 'text-black dark:text-white'} size-6`} /> </button>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-base text-[#787878]'> نام دوره </h2>
                    <span className='text-[24px] font-bold'> {course.title} </span>
                </div>
                <div className='flex flex-col gap-4 my-5'>
                    <Button className={`${Flag==0 ? 'bg-blue-500 cursor-pointer' : 'bg-red-500 cursor-auto'} text-white font-semibold text-sm rounded-full w-fit`} onClick={onOpening}> {Flag == 0 ? ' رزرو دوره ' : 'این دوره رزرو شده است' } </Button>
                    <ReserveModal addReserve={addReserve} isOpen={isOpen} onOpenChange={onOpenChange} />
                </div>
                <div className='flex flex-col gap-4 my-2'>
                    <h2 className='text-base text-[#787878]'> توضیح مختصر </h2>
                    <span className='text-[16px] text-[#272727] h-[46px] overflow-hidden dark:text-white' dir='rtl'> {course.describe} </span>
                </div>
                <div className='my-2'>
                    <div className='flex gap-2'>
                        <StudentsIcon />
                        <div className='flex gap-2'>
                            <span>{course.currentRegistrants}</span>
                            /
                            <span>{course.capacity}</span>
                            دانشجو
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-4 my-2'>
                        <div className='flex gap-4'> <Calendar01Icon /> <span className='flex flex-row-reverse gap-1'> <span className='text-gray-400'> (شروع) </span> {jMoment(course.startTime).locale('fa').format('jD jMMMM jYYYY')} </span> </div>
                        <div className='flex gap-4'> <Calendar01Icon /> <span className='flex flex-row-reverse gap-1'> <span className='text-gray-400'> (پایان) </span> {jMoment(course.endTime).locale('fa').format('jD jMMMM jYYYY')} </span> </div>
                    </div>
                    <h2 className='text-2xl text-bold flex items-center gap-2'> {Number(course.cost).toLocaleString('en-US')} <span className='text-[#3772FF] text-base font-semibold'> تومان </span> </h2>
                </div>

        </ModalBody>

        </>
      )}
      
      </ModalContent>
    </Modal>
  )
}

export default FavCourseModal
