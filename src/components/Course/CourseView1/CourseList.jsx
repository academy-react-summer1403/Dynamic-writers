import { ArrowDown01Icon, StarIcon } from 'hugeicons-react'
import React from 'react'
import Round from '../../../assets/round.png'
import CourseView1 from './CourseView1'

const CourseList = () => {
  return (
    <div className='my-5 iranSans'>
        <div className='flex flex-col items-center gap-5'>

            <div className='flex flex-col gap-5 items-center'>
                <h2 className='text-3xl iranSansBold'> !دوره های متنوع </h2>
                <div className='flex justify-center flex-row-reverse gap-5 relative'>
                    <StarIcon className='text-blue-500 absolute rotate-12 -top-10 -right-10' />
                    <span className='text-sm font-semibold text-gray-500 w-96 text-center'> ما به شما تنوعی از دوره‌های آموزشی تخصصی را ارائه می‌دهیم که به شما کمک می‌کند تا مهارت‌های برنامه‌نویسی و کدنویسی خود را به سطح بالاتری برسانید. </span>
                    <img src={Round} className='size-10 rotate-15 absolute rotate-12 -left-5 -bottom-10'/>
                </div>
            </div>

            <div className='flex flex-col item-center'>
                <span className='text-gray-500 text-base'> لیست دوره ها </span>
                <ArrowDown01Icon className='text-gray-500 mx-auto' />
            </div>
        </div>

        <CourseView1 />
    </div>
  )
}

export default CourseList
