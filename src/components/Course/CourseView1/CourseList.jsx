import { ArrowDown01Icon, StarIcon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import Round from '../../../assets/round.png'
import CourseView1 from './CourseView1'
import Loading from '../../../core/services/common/Loading/loading'

const CourseList = () => {

    const [scrollPos, setScrollPos] = useState(0)

    const handleScroll = () => {
        const pos = window.scrollY
        setScrollPos(pos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <div className='my-5 iranSans w-dvw max-w-[3000px]'>
        <div className='flex flex-col items-center gap-5'>

            <div className='flex flex-col gap-5 items-center'>
                <h2 className='text-4xl iranSansBold'> !دوره های متنوع </h2>
                <div className='flex justify-center flex-row-reverse gap-5 relative'>
                    <StarIcon className='text-blue-500 absolute rotate-12 -top-10 -right-10 hidden md:block' />
                    <span className='text-sm font-semibold text-gray-500 max-w-96 text-center min-w-72'> ما به شما تنوعی از دوره‌های آموزشی تخصصی را ارائه می‌دهیم که به شما کمک می‌کند تا مهارت‌های برنامه‌نویسی و کدنویسی خود را به سطح بالاتری برسانید. </span>
                    <img src={Round} className='size-10 rotate-15 absolute rotate-12 -left-5 -bottom-10 hidden md:inline'/>
                </div>
            </div>

            <div className='flex-col item-center flex' style={scrollPos > 0 ? {display: 'none'} : {display: 'flex'}}>
                <span className='text-gray-500 text-base hidden md:inline'> لیست دوره ها </span>
                <ArrowDown01Icon className='text-gray-500 mx-auto md:inline hidden' />
            </div>
        </div>

        <CourseView1 />

    </div>
  )
}

export default CourseList
