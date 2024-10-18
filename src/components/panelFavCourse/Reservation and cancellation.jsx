import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Time from '../../assets/time.png'

const Reservation = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = React.useState('xs')

//   const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"];

  return (
    <>
      <div className="flex flex-wrap gap-3">
          <Button onPress={onOpen} 
          className="w-[92px] h-[49px] bg-[#3772FF] text-white rounded-full hover:bg-sky-800 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300">رزرو دوره</Button>
      </div>
      <Modal 
        size={size} 
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent dir="rtl">
          {(onClose) => (
            <>
              <ModalBody>
                <div className="w-[72px] h-[72px] rounded-full mx-auto mt-8" style={{backgroundColor: "#F0F0F0"}}>
                     <img className="block mx-auto mt-5" src={Time} alt="" />
                </div>

                <div className="m-auto">
                     <p className="font-bold text-xl">آیا از رزرو دوره مطمئن هستید؟</p>
                </div>

                <div className="m-auto">
                     <p className="text-[15px]">در صورت تایید این دوره به لیست رزرو دوره ها اضافه میشود تا ادمین ان را تایید کند</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" className="w-[169px] h-[56px] rounded-[64px] font-bold text-xl" onPress={onClose}>
                  رزرو دوره
                </Button>
                <Button color="danger" className="w-[108px] h-[56px] rounded-[64px] font-bold text-xl" variant="light" onPress={onClose}>
                  انصراف
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Reservation