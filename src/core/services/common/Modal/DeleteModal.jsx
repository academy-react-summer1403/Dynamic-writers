import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react'
import { Delete02Icon, TimeSetting03Icon } from 'hugeicons-react'
import React from 'react'

const DeleteModal = ({isOpen, onOpen, onOpenChange, courseId, DeleteFav}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className='w-full flex flex-col items-center gap-6 py-6'>
                    <div className='size-[72px] rounded-full bg-[#F0F0F0] flex justify-center items-center'> <Delete02Icon className='text-[#FF5454] size-[32px]' /> </div>
                    
                    <div className='flex flex-col gap-2 items-center'>
                        <h2 className='text-[20px] font-[700]'> آیا از حذف دوره مطمئن هستید؟ </h2>
                        <span className='text-[#787878] text-[16px] w-[292px] text-center'> در صورت تایید این دوره از لیست علاقه‌مندی دوره شما حذف خواهد شد </span>
                    </div>

                    <div className='flex gap-4 items-center flex-row-reverse'>
                        <Button onClick={() => DeleteFav(courseId)} className='bg-[#FF5454] w-[169px] h-[56px] rounded-[64px] text-white text-[18px] font-[700]'> حذف دوره </Button>
                        <Button onClick={onOpenChange} className='bg-[#F0F0F0] w-[108px] h-[56px] rounded-[64px] text-black text-[16px] font-[700]'> انصراف </Button>
                    </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
    </Modal>
  )
}

export default DeleteModal
