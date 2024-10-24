import React from 'react'
import { CheckmarkCircle03Icon,UserStoryIcon,ProfileIcon } from 'hugeicons-react'
import image from '../../assets/arrow.png'
import { Link } from 'react-router-dom'
import {Modal, ModalContent, ModalHeader, ModalBody, Button} from "@nextui-org/react";
const CourseReserve = ({open,openChange}) => {
  return (
    <Modal size="lg" isOpen={open} onOpenChange={openChange}>
        <ModalContent className="overflow-hidden h-[480px] rounded-[24px] z-[500] border-[4px] flex flex-col justify-center items-center gap-6 p-3 bg-white sticky top-[50px] ">
            {(onClose) => (
                <>
                        <ModalHeader className="text-[#FEFDFF] bg-[#2CDA5D] font-[700] rounded-[40px] w-[390px] flex flex-row gap-3 p-3 text-right text-[16px] whitespace-nowrap">
                            <CheckmarkCircle03Icon color='green'/>دوره با موفقیت به لیست رزرو های شما اضافه شد
                        </ModalHeader>
                        <ModalBody className='flex flex-col gap-9'>
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
                                    <div className='text-[20px] font-[500] text-[#787878] text-center'>بعد از تایید ادمین مربوط دوره شما به <Link to='/layoutPanel/myCourse' className='text-[#000000] text-[20px] font-[700] underline'>دوره من</Link><br/> اضافه خواهد شد</div>
                                    <div className='flex flex-row gap-4 justify-center items-center w-full'>
                                        <Button className='w-[20%] h-[56px] text-[#272727] bg-[#FEFDFF] rounded-[40px] text-center leading-[50px] text-[25px] border-[1px] border-[#E4E4E4] cursor-pointer' onPress={onClose}>باشه</Button>
                                        <Link to='/layoutPanel/myReserve' className='w-[60%] h-[56px] bg-[#3772FF] text-[#FEFDFF] rounded-[40px] text-center leading-[50px] text-[20px] cursor-pointer'>لیست رزرو های من</Link>
                                    </div>
                        </ModalBody>
                </>
            )}
        </ModalContent>
       
    </Modal>
    
  )
}

export default CourseReserve