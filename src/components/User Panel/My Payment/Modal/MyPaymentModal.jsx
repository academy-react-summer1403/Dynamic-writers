import { Button, Modal, ModalBody, ModalContent, ModalHeader,Spinner } from '@nextui-org/react'
import { Calendar01Icon, StudentsIcon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { Link } from 'react-router-dom'
import { getDetailIdTeacher } from '../../../../core/services/api/Teacher/getDetailTeacherWithId'
import jMoment from 'jalali-moment'
import CourseLike from '../../../../core/services/api/Course/CourseLike'
import CourseDisLike from '../../../../core/services/api/Course/CourseDisLike'
import { toast, ToastContainer } from 'react-toastify'
import GetCourseById from '../../../../core/services/api/Course/GetCourseById'
import GetPaymentById from '../../../../core/services/api/Payment/GetPaymentById'

import Loading from './../../../../core/services/common/Loading/loading';

const MyPaymentModal = ({ 
    courseId,
    isOpen, 
    onOpenChange, 
    dataPaymentt
}) => {

    const [Loading, setLoading] = useState(true)
    const [dataCourse, setdata] = useState(null)

    useEffect(() => {
      getData()
    }, [])
    
    useEffect(() => {
      
    }, [Loading])
    
    const getData=async()=>{

        const data=await GetCourseById(courseId)
        setdata(data)
        setLoading(false)
    }
  return (
    <Modal dir='rtl' isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior='outside' placement='top' size='lg'>
      <ModalContent className='h-[850px] w-[400px] sm:h-[1000px] sm:w-auto'>
      {Loading==true && <Spinner label="در حال بارگزاری..." className='py-[50px] px-[30px]' />   }
      {Loading==false &&
        <>
        <ModalHeader className="flex flex-row-reverse items-center gap-1 justify-end">

            <div className='flex gap-7 items-center'>
                <h2 className='font-[700] text-[24px] flex flex-row-reverse w-full justify-end gap-1'> جزئیات پرداخت </h2>
            </div>

            <ToastContainer />

        </ModalHeader>

        <ModalBody className='w-[510px] '>

                <div className='w-full h-[350px] bg-[#E8E8E8] rounded-[16px] relative sm:h-[400px]'>
                    <img src={dataPaymentt.paymentInvoiceImage} className='w-full h-full rounded-[16px]' />
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-base text-[#787878]'> نام دوره </h2>
                    <span className='text-[24px] font-bold'> {dataCourse.title} </span>
                </div>
                <div className='flex flex-col gap-4 my-2'>
                    <h2 className='text-base text-[#787878]'> نام گروه</h2>
                    <span className='text-[16px] text-[#272727] h-[46px] overflow-hidden dark:text-white' dir='rtl'> {dataPaymentt.groupName} </span>
                </div>
                <div className='flex flex-col gap-4 my-2'>
                    <h2 className='text-base text-[#787878]'> مبلغ پرداخت شده </h2>
                    <span className='text-[16px] text-[#272727] h-[46px] overflow-hidden dark:text-white' dir='rtl'> {dataPaymentt.paid.toLocaleString('en-US')} <span className="text-[13px] text-gray-500">  تومان</span> </span>
                </div>
                <div className='flex flex-col gap-4 my-5'>
                    <h2 className='text-base text-[#787878]'> وضعیت پرداخت </h2>
                    <div className='flex justify-between w-full items-center'>
                    <span className={`${dataPaymentt.accept ? 'bg-[#17C96433] text-[#17C964]' : 'text-[#F31260] bg-[#F3126033]'} px-2 rounded-full`}> {dataPaymentt.accept ? 'تایید شده' : 'تایید نشده'} </span>
                    </div>
                </div>
                <div className='flex flex-col gap-4 my-2'>
                    <h2 className='text-base text-[#787878]'> زمان پرداخت </h2>
                    <span className='text-[16px] text-[#272727] h-[46px] overflow-hidden dark:text-white' dir='rtl'> {(jMoment(dataPaymentt.peymentDate).locale('fa').format('jD jMMMM jYYYY'))} </span>
                </div>
               

        </ModalBody>
        </>
        }
      
      </ModalContent>
    </Modal>
  )
}

export default MyPaymentModal
