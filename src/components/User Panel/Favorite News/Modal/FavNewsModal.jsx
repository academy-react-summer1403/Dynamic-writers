import { Button, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import { Calendar01Icon, StudentsIcon, ThumbsDownIcon, ThumbsUpIcon, ViewIcon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { Link } from 'react-router-dom'
import { getDetailIdTeacher } from '../../../../core/services/api/Teacher/getDetailTeacherWithId'
import jMoment from 'jalali-moment'
import CourseLike from '../../../../core/services/api/Course/CourseLike'
import CourseDisLike from '../../../../core/services/api/Course/CourseDisLike'
import { toast, ToastContainer } from 'react-toastify'
import GetCourseById from '../../../../core/services/api/Course/GetCourseById'
import { AddReserve } from '../../../../core/services/api/Reserve/addReserve'
import CourseReserve from '../../../CourseReserve/CourseReserve'
import GetNewsById from '../../../../core/services/api/News/GetNewsById'
import NewsDisLike from '../../../../core/services/api/News/NewsDisLike'
import NewsLike from '../../../../core/services/api/News/NewsLike'

const FavNewsModal = ({ 
    newsId,
    isOpen, 
    onOpenChange,   
}) => {

    const [News, setNews] = useState([])
    const [like, setLike] = useState(false)
    const [dislike, setDislike] = useState(false)

    const NotifySuccess = (message) => {
        toast.dismiss()

        toast.success(message)
    }

    const NotifyError = (message) => {
        toast.dismiss()

        toast.error(message)
    }

    const Like = async () => {
        const like = await NewsLike(newsId)
        if(like.success === true) {
            NotifySuccess(like.message)
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
        const dislike = await NewsDisLike(newsId)

        if(dislike.success === true) {
            NotifySuccess(dislike.message)
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

    const getNews = async () => {
        const response = await GetNewsById(newsId)
        setNews(response.detailsNewsDto)
    }
    
    useEffect(() => {
        getNews()
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
                <div className='w-full h-[287px] bg-[#E8E8E8] rounded-[16px] relative border'>
                    <img src={News.currentImageAddressTumb} className='w-full h-full rounded-[16px]' />
                    <div className=' absolute top-3 right-3 flex gap-2'>
                      <div className='bg-[#5A7EFF] rounded-full px-3 py-0.5 text-sm font-semibold text-white max-w-36 truncate'> {News.newsCatregoryName} </div>
                      <div className='bg-[#5A7EFF] rounded-full px-3 py-0.5 text-sm font-semibold text-white max-w-36 truncate'> {News.keyword} </div>
                    </div>
                </div>
                <div className='w-full h-fit flex justify-between items-center'>
                    <Button className='bg-blue-500 text-white rounded-full'> <Link to={`/NewDetail/${newsId}`}> صفحه مقاله  </Link> </Button>
                    <div className='flex gap-2 items-center h-full w-fit'>
                        <button className='border-2 flex justify-center items-center dark:bg-slate-600 dark:text-white dark:border-none bg-white rounded-full size-14 min-w-14 min-h-14 hover:bg-blue-300'> <ThumbsDownIcon onClick={Dislike} className={`${dislike ? 'text-red-500' : 'text-black dark:text-white'} size-6`} /> </button>
                        <button className='border-2 flex justify-center items-center dark:bg-slate-600 dark:text-white dark:border-none bg-white rounded-full size-14 min-w-14 min-h-14 hover:bg-blue-300'> <ThumbsUpIcon onClick={Like} className={`${like ? 'text-red-500' : 'text-black dark:text-white'} size-6`} /> </button>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-base text-[#787878]'> نام دوره </h2>
                    <span className='text-[24px] font-bold'> {News.title} </span>
                </div>
                <div className='flex flex-col gap-4 my-2'>
                    <h2 className='text-base text-[#787878]'> توضیح مختصر </h2>
                    <span className='text-[16px] text-[#272727] h-[46px] overflow-hidden dark:text-white' dir='rtl'> {News.describe} </span>
                </div>
                <div className='flex flex-col gap-4 my-2'>
                    <h2 className='text-base text-[#787878]'> منتشر کننده </h2>
                    <div className='flex gap-4'>
                        <img src='' className='size-14 min-w-14 min-h-14 bg-[#D9D9D9] rounded-full' />
                        <div className='flex flex-col'>
                            {/* <h2 className='text-[20px] font-[700] text-[#272727]'> {News.addUserFullName.replace('-' ,' ')} </h2> */}
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-4 my-2'>
                        <div className='flex gap-4'> <Calendar01Icon /> <span className='flex flex-row-reverse gap-1'> {jMoment(News.inserDate).locale('fa').format('jD jMMMM jYYYY')} </span> </div>
                        <div className='flex gap-4'> <ViewIcon /> <span> {News.currentView} </span> </div>
                    </div>
                </div>

        </ModalBody>

        </>
      )}
      
      </ModalContent>
    </Modal>
  )
}

export default FavNewsModal
