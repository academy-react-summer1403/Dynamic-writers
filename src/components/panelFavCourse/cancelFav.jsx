import React from "react";
import {Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import del from '../../assets/del.png'
import Canceled from '../../assets/cansel.png'

const Canceltion = (props) => {
  const {favoriteId, deletedFav} = props;
  
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = React.useState('xs')

  const tryClicked = (favoriteId) => {
    onClose();
    deletedFav(favoriteId);
  }

  return (
    <>
      <div className=" w-6">
          <Button onPress={onOpen} 
          className="block p-0 m-0 rounded-full" style={{backgroundColor: "#cccccc00"}} ><img src={Canceled} alt="" /></Button>
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
                     <img className="block mx-auto mt-5" src={del} alt="" />
                </div>

                <div className="m-auto">
                     <p className="font-bold text-xl">آیا از حذف دوره مطمئن هستید؟</p>
                </div>

                <div className="m-auto">
                     <p className="text-[15px]">در صورت تایید این دوره از لیست علاقه‌مندی دوره شما حذف خواهد شد</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" className="w-[169px] h-[56px] rounded-[64px] font-bold text-xl bg-red-600" onClick={() => tryClicked(favoriteId)}>
                   حذف دوره
                </Button>
                <Button color="danger" className="w-[108px] h-[56px] rounded-[64px] font-bold text-xl text-slate-950 hover:bg-slate-600" variant="light" onPress={onClose}>
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

export default Canceltion