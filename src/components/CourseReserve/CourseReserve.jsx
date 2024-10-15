import React from 'react'
import { CheckmarkCircle03Icon,UserStoryIcon,ProfileIcon } from 'hugeicons-react'
import image from '../../assets/arrow.png'
const CourseReserve = ({Flags}) => {
  return (
    <div className='w-[551px] h-[480px] rounded-[24px] border-[4px] flex flex-col justify-center items-center gap-6 p-3 bg-white sticky top-[50px] '>
        <div className='text-[#FEFDFF] bg-[#2CDA5D] font-[700] rounded-[40px] w-[390px] flex flex-row gap-3 p-3 text-right whitespace-nowrap'><CheckmarkCircle03Icon color='green'/>دوره با موفقیت به لیست رزرو های شما اضافه شد</div>
        <div className='flex flex-row-reverse items-center justify-center'>
            <div className='rotate-[227deg]'><img src={image} className='w-[120px] translate-y-[25px]'/></div>
            <div>
                <div className='rounded-[100%] bg-[#3772FF] w-[104px] h-[104px] flex justify-center items-center'><UserStoryIcon size={60} color='white'/></div>
                <div className='text-[20px] font-[700] text-center'>رزرو من</div>
            </div>
            <div className='rotate-[227deg] mr-8'><img src={image} className='w-[120px] translate-y-[25px]'/></div>
            <div>
                <div className='rounded-[100%] bg-[#FEFDFF] w-[104px] h-[104px] flex justify-center items-center border-[4px] border-[#E4E4E4]'><ProfileIcon size={60} color='black'/></div>
                <div className='text-[20px] font-[700] text-center'>دوره من</div>
            </div>
        </div>
        <div className='text-[20px] font-[500] text-[#787878] text-center'>بعد از تایید ادمین مربوط دوره شما به <a className='text-[#000000] text-[20px] font-[700] underline'>دوره من</a><br/> اضافه خواهد شد</div>
        <div className='flex flex-row gap-4 justify-center w-[90%]'>
            <div className='w-[20%] h-[56px] text-[#272727] bg-[#FEFDFF] rounded-[40px] text-center leading-[50px] text-[25px] border-[1px] border-[#E4E4E4] cursor-pointer' onClick={()=>Flags(false)}>باشه</div>
            <div className='w-[60%] h-[56px] bg-[#3772FF] text-[#FEFDFF] rounded-[40px] text-center leading-[50px] text-[20px] cursor-pointer'>لیست رزرو های من</div>
        </div>

    </div>
  )
}

export default CourseReserve