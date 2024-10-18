import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure} from "@nextui-org/react";
import Views from '../../assets/cheshm.png'
import React, { useState , useEffect } from "react";
import liked from '../../assets/like.png'
import disLiked from '../../assets/disLike.png'
import Daneshjoo from '../../assets/daneshjoo.png'
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import CustomModalStyles from '../panelMyCourse/customModalStyles.module.css';
import Reservation from "./Reservation and cancellation";

const ViewCardFav = (props) => {

       const {imaged , nameTitle , price , modares , termNameed , pardakhti} = props;

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [size, setSize] = useState('xl');
  


  return(
       <div>
       <button onClick={onOpen}><img src={Views} alt="#" /></button>

       <Modal isOpen={isOpen} size={size} onOpenChange={onOpenChange} className="iranSans block" dir="rtl" style={{width: "550px"}}>
       <ModalContent className={CustomModalStyles.nextuiModalContent}>

       {(onClose) => (
       <>
       <ModalHeader className="flex gap-1 relative">
              <span className="block font-bold text-3xl">دوره </span>

              <button color="danger" variant="light" 
              className="border-2 border-red-600 rounded-3xl absolute" 
              style={{width: "119px" , height: "48px" , marginTop: "-5px" , color: "red" , left: "10px"}} 
              dir="lrt" onClick={onClose}
              >بستن</button>
       </ModalHeader>

       <ModalBody>
              <div className="rounded-xl border-2" style={{width: "517px" , height: "287px", marginRight: "-10px"}}>
                     <img className="h-full w-full rounded-md" src={imaged} alt="#" />
              </div>

              <div className="flex relative">
                   <button className="h-14 bg-[#3772FF] text-white rounded-full hover:bg-sky-800 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300"
                   style={{width: "121px"}}
                   >صفحه دوره</button>

                   <div className="absolute left-0 flex gap-2" style={{width: "128px" , height: "56px"}}>
                            <div className="w-14 h-14 rounded-full border-2 cursor-pointer"><img className="block mx-auto mt-3" src={liked} alt="" /></div>
                            <div className="w-14 h-14 rounded-full border-2 cursor-pointer"><img className="block mx-auto mt-3" src={disLiked} alt="" /></div>
                   </div>
              </div>

              <span className="block text-base text-slate-500">نام دوره</span>
              <div>
                  <span className="font-bold text-2xl">{nameTitle}</span>
              </div>

              <span className="block text-base text-slate-500">وضعیت ثبت نام</span>
              <div className="flex">
                     <Reservation />
              </div>

              <span className="block text-base text-slate-500">توضیح مختصر</span>
              <div className="text-base font-medium">
                     آموزش صفر تا صد کتابخانه پرطرفدار جی‌اس یعنی ری‌اکت همراه تسک های مفید برای یادگیری بهتر
              </div>

              <span className="block text-base text-slate-500 mb-3"> مدرس دوره </span>
              <div>
                     <div className="flex">
                            <img className="block w-14 h-14 rounded-full" src="" alt="#" />
                            <div>
                                   <span className="font-bold text-xl block">{modares.replace('-',' ')}</span>
                                   <span className="text-base block"> سنیور فرانت اند </span>
                            </div>
                     </div>
              </div>

              <div className="flex mt-2">
                     <img className="w-6 h-6" src={Daneshjoo} alt="" />
                     <span className="block font-semibold mr-5" style={{lineHeight: "30px"}}> 80 / 120 دانشجو</span>
              </div>

              <div className="flex mt-2">
                     <img className="w-6 h-6" src={Daneshjoo} alt="" />
                     <span className="block font-semibold mr-5" style={{lineHeight: "30px"}}> {termNameed} <span className="text-zinc-500">(شروع)</span> </span>
              </div>

              <div className="flex mt-2">
                     <img className="w-6 h-6" src={Daneshjoo} alt="" />
                     <span className="block font-semibold mr-5" style={{lineHeight: "30px"}}> 22 اردیبهشت 1403 <span className="text-zinc-500">(پایان)</span> </span>

              <div className="flex">
                     <div className='font-semibold text-xl absolute left-4'>{(parseInt(price).toLocaleString("en-US"))} <span className="text-blue-700">تومان</span></div>
              </div>
              </div>

       </ModalBody>

       <ModalFooter>
              {/* <button color="primary" onClick={onClose}>Action</button> */}
       </ModalFooter>

       </>
       )}

       </ModalContent>
       </Modal>
       </div>
  );
}

export default ViewCardFav