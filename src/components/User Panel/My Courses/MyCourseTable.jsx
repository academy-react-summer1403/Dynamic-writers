import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
  } from "@nextui-org/table";
  import React, { useEffect, useState } from 'react'
  import jMoment from 'moment-jalaali'
  import { MoneyAdd02Icon, ViewIcon } from "hugeicons-react";
  import { NavLink, } from "react-router-dom";
import { getMyCourse } from "../../../core/services/api/Panel/MyCourse/getMyCourse";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Spinner, useDisclosure } from "@nextui-org/react";
import MyCourseModal from "./MyCourseModal";
import GetPaymentById from "../../../core/services/api/Payment/GetPaymentById";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyPaymentModalForUser from './MyPaymentModalForUser';

const MyCourseTable = ({ myCourse, isLoading ,setreder}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keyOpen, setkeyOpen] = useState(null)
  const [flag, setflag] = useState(false)

  const [openCourseId, setOpenCourseId] = useState(null)
  const [myCourses, setMyCourses] = useState([])
  const [payments, setPayments] = useState({});

  const [statusLastPayment, setstatusLastPayment] = useState({});

  const addCourse = () => {
    if(myCourse !== undefined) {
      setMyCourses(myCourse)
    }
    else{
      setMyCourses([])
    }
  }

  useEffect(() => {
    addCourse()
  }, [])

  const handleOpenModal = (courseId) => {
    if(openCourseId === courseId) {
        setOpenCourseId(null)
    }
    else {
        setOpenCourseId(courseId)
    }
  }
  useEffect(() => {
    const fetchPayments = async () => {
      const paymentData = {};
      const laststatus = {};
      for (const item of myCourses) {
        const pay = await GetPaymentById(item.courseId);
        let cost = 0;
        for (let pricePay in pay) {
          if(pay[pricePay].accept==true){
            cost += pay[pricePay].paid;

          }
          if(pricePay==pay.length-1){
            laststatus[item.courseId]=pay[pricePay].accept
          }
        }
        paymentData[item.courseId] = cost;
        
      }
      setstatusLastPayment(laststatus)
      setPayments(paymentData);
      setflag(true)
    };
    if (myCourses.length > 0) {
      fetchPayments();
    }
  }, [myCourses]);
  
  const notifyError = () => toast.warn("آخرین فیش واریزی شما هنوز تایید نشده است",{position:"top-center",theme:"dark"});

  const Notif=(index)=>{
    
      setkeyOpen(index)
      setIsModalOpen(true);
      onOpen(true)
  }
  return (
    <div>
    <ToastContainer/>
    <Table classNames={{wrapper: 'dark:bg-slate-700'}} className="hidden md:block" dir="rtl" aria-label="Example empty table">
      <TableHeader>
        <TableColumn> # </TableColumn>
        <TableColumn> نام دوره </TableColumn>
        <TableColumn> استاد دوره </TableColumn>
        <TableColumn> شروع دوره </TableColumn>
        <TableColumn> قیمت دوره </TableColumn>
        <TableColumn> وضعیت پرداختی </TableColumn>
        <TableColumn> </TableColumn>
        <TableColumn> </TableColumn>
      </TableHeader>
      <TableBody emptyContent={"دوره ای برای نمایش وجود ندارد."} isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />}>
        {myCourses.map((item, index) => {
          let costThisCourse= payments[item.courseId]||0;
          let percentage=0
          if(costThisCourse!=0){
            percentage=((costThisCourse/item.cost)*100)
          }

          return <TableRow key={index} className="h-10">
            <TableCell> <img className="w-[104px] h-[72px] rounded-[8px] bg-gray-300" src={item.tumbImageAddress} /> </TableCell>
            <TableCell className="text-base font-bold truncate invisible md:visible"> <div className="max-w-40 h-10 truncate leading-8"> {item.courseTitle} </div> </TableCell>
            <TableCell className="invisible md:visible"> <div className="max-w-56 h-10 truncate leading-8"> {item.fullName.replace('-', ' ')} </div> </TableCell>
            <TableCell className="invisible md:visible"> <div className="max-w-32 h-10 truncate leading-8"> {(jMoment(item.lastUpdate).locale('fa').format('jD jMMMM jYYYY'))} </div> </TableCell>
            <TableCell className="text-base font-semibold invisible md:visible"> {(parseInt(item.cost).toLocaleString('en-US'))} <span className="text-sm"> تومان </span> </TableCell>

            <TableCell className={`invisible md:visible flex whitespace-nowrap gap-2 items-center justify-center py-5 ${item.paymentStatus=="پرداخت نشده"?"text-red-500 dark:text-white":"dark:text-white text-green-600"}`}>             
                {flag!=false && <CircularProgressbar className="size-12" value={`${percentage!=100? percentage.toFixed(0):"100"}`} text={`${percentage!=100? percentage.toFixed(0):"100"}`+"%"} styles={buildStyles({
                textColor: percentage >= 25 ? (percentage == 100 ? "#2E8B57" : "orange") : "red",
                textSize: '25px',
                display: 'flex',
                pathColor: percentage >= 25 ? (percentage == 100 ? "#2E8B57" : "orange") : "red",
                trailColor: 'transparent'
                })} /> 
                }
                {flag==false && <Spinner className='py-[20px] px-[10px]' /> }
                  {item.paymentStatus}  
            </TableCell>
            <TableCell> <NavLink to={``}> <ViewIcon onClick={() => handleOpenModal(item.courseId)} className="size-4 cursor-pointer"/> </NavLink>             
                { openCourseId === item.courseId && <MyCourseModal
                    isOpen={true}
                    onOpen={() => handleOpenModal(item.courseId)}
                    onOpenChange={handleOpenModal}
                    tumbImageAddress={item.tumbImageAddress}
                    levelName={item.levelName}
                    statusName={item.statusName}
                    fullName={item.fullName}
                    courseTitle={item.courseTitle}
                    courseId={item.courseId}
                    describe={item.describe}
                    cost={item.cost}
                    lastUpdate={item.lastUpdate}
                    paymentStatus={item.paymentStatus}
                    teacherId={item.teacherId}
                /> }

            </TableCell>
            
            <TableCell>{percentage!=100 && <NavLink to={``}> <MoneyAdd02Icon className="size-4 cursor-pointer" onClick={()=>{statusLastPayment[item.courseId]==false?notifyError():Notif(index)}}/> </NavLink> }
             {isModalOpen && keyOpen==index &&

              <MyPaymentModalForUser isOpen={isOpen} maxNumber={item.cost-costThisCourse} onOpenChange={onOpenChange} setIsModalOpen={setIsModalOpen} setreder={setreder} courseID={item.courseId} name={item.courseTitle}/>

            }
            
            </TableCell>
           
          </TableRow>
          
        })}
      
      </TableBody>
    </Table>
    <Table isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />} classNames={{wrapper: 'dark:bg-slate-700'}} className="md:hidden block" hideHeader>
      <TableHeader>
        <TableColumn>IMG</TableColumn>
        <TableColumn>INFO</TableColumn>
        <TableColumn></TableColumn>
      </TableHeader>
        <TableBody emptyContent={"دوره ای برای نمایش وجود ندارد."}>
            {myCourses.map((item, index) => {
              let costThisCourse= payments[item.courseId]||0;
              let percentage=0
              if(costThisCourse!=0){
                percentage=((costThisCourse/item.cost)*100)
              }

                return <TableRow key={index}>
                    <TableCell onClick={() => handleOpenModal(item.courseId)}> <img className="min-w-[104px] w-[104px] min-h-[72px] h-[72px] rounded-[8px]" src={item.tumbImageAddress} /> </TableCell>
                    <TableCell onClick={() => handleOpenModal(item.courseId)}>
                        <div className="flex flex-col gap-2">
                            <div className="max-w-40 font-bold text-xl h-6 truncate"> {item.courseTitle} </div>
                            <div className="flex flex-col justify-center gap-1">
                                <div className="max-w-56 truncate text-[#787878]"> {item.fullName.replace('-', ' ')} </div> 
                                <div className="max-w-32 truncate text-[#787878]"> {(jMoment(item.lastUpdate).locale('fa').format('jD jMMMM jYYYY'))} </div>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell>
                    {percentage!=100 && <NavLink to={``}> <MoneyAdd02Icon className="size-4 cursor-pointer" onClick={()=>{statusLastPayment[item.courseId]==false?notifyError():Notif(index)}}/> </NavLink> }
                      {isModalOpen && keyOpen==index &&

                        <MyPaymentModalForUser isOpen={isOpen} maxNumber={item.cost-costThisCourse} onOpenChange={onOpenChange} setIsModalOpen={setIsModalOpen} setreder={setreder} courseID={item.courseId} name={item.courseTitle}/>

                      }
                      
                      </TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>

    </div>
  )
}

export default MyCourseTable
