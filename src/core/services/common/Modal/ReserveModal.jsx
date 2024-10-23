import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react'
import { TimeSetting03Icon } from 'hugeicons-react'
import React from 'react'

const ReserveModal = ({isOpen, onOpen, onOpenChange, addReserve}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className='w-full flex flex-col items-center gap-6 py-6'>
                    <div className='size-[72px] rounded-full bg-[#F0F0F0] flex justify-center items-center'> <TimeSetting03Icon className='text-[#3772FF] size-[32px]' /> </div>
                    
                    <div className='flex flex-col gap-2 items-center'>
                        <h2 className='text-[20px] font-[700]'> آیا از رزرو دوره مطمئن هستید؟ </h2>
                        <span className='text-[#787878] text-[16px] w-[292px] text-center'> در صورت تایید این دوره به لیست رزرو دوره ها اضافه میشود تا ادمین ان را تایید کند </span>
                    </div>

                    <div className='flex gap-4 items-center flex-row-reverse'>
                        <Button onClick={() => addReserve()} className='bg-[#3772FF] w-[169px] h-[56px] rounded-[64px] text-white text-[18px] font-[700]'> رزرو دوره </Button>
                        <Button className='bg-[#F0F0F0] w-[108px] h-[56px] rounded-[64px] text-black text-[16px] font-[700]'> انصراف </Button>
                    </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
    </Modal>
  )
}

export default ReserveModal
