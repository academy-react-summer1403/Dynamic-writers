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
import { useDisclosure } from "@nextui-org/react";
import MyCourseModal from "./MyCourseModal";

const MyCourseTable = ({ myCourse }) => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
    
  const [openCourseId, setOpenCourseId] = useState(null)

  const handleOpenModal = (courseId) => {
    if(openCourseId === courseId) {
        setOpenCourseId(null)
    }
    else {
        setOpenCourseId(courseId)
    }
  }

  return (
    <>
    <Table className="hidden md:block" dir="rtl" aria-label="Example empty table">
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
      <TableBody emptyContent={"دوره ای برای نمایش وجود ندارد."}>

        {myCourse.map((item, index) => {
          return <TableRow key={index} className="h-10">
            <TableCell> <img className="w-[104px] h-[72px] rounded-[8px]" src={item.tumbImageAddress} /> </TableCell>
            <TableCell className="text-base font-bold truncate invisible md:visible"> <div className="max-w-40 h-10 truncate leading-8"> {item.courseTitle} </div> </TableCell>
            <TableCell className="invisible md:visible"> <div className="max-w-56 h-10 truncate leading-8"> {item.fullName.replace('-', ' ')} </div> </TableCell>
            <TableCell className="invisible md:visible"> <div className="max-w-32 h-10 truncate leading-8"> {(jMoment(item.lastUpdate).locale('fa').format('jD jMMMM jYYYY'))} </div> </TableCell>
            <TableCell className="text-base font-semibold invisible md:visible"> {(parseInt(item.cost).toLocaleString('en-US'))} <span className="text-sm"> تومان </span> </TableCell>
            <TableCell className="invisible md:visible flex whitespace-nowrap items-center justify-center py-5">             
                <CircularProgressbar className="size-12" value='70' text={70 + '%'} styles={buildStyles({
                textColor: `orange`,
                textSize: '25px',
                display: 'flex',
                pathColor: `orange`,
                trailColor: 'transparent'
                })} /> 
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
            <TableCell> <NavLink to={``}> <MoneyAdd02Icon className="size-4 cursor-pointer"/> </NavLink> </TableCell>
          </TableRow>
          
        })}
      
      </TableBody>
    </Table>
    <Table className="md:hidden block" hideHeader>
      <TableHeader>
        <TableColumn>IMG</TableColumn>
        <TableColumn>INFO</TableColumn>
      </TableHeader>
        <TableBody>
            {myCourse.map((item, index) => {
                return <TableRow onClick={() => handleOpenModal(item.courseId)} key={index}>
                    <TableCell> <img className="min-w-[104px] w-[104px] min-h-[72px] h-[72px] rounded-[8px]" src={item.tumbImageAddress} /> </TableCell>
                    <TableCell>
                        <div className="flex flex-col gap-2">
                            <div className="max-w-40 font-bold text-xl truncate"> {item.courseTitle} </div>
                            <div className="flex flex-col justify-center gap-1">
                                <div className="max-w-56 truncate text-[#787878]"> {item.fullName.replace('-', ' ')} </div> 
                                <div className="max-w-32 truncate text-[#787878]"> {(jMoment(item.lastUpdate).locale('fa').format('jD jMMMM jYYYY'))} </div>
                            </div>
                        </div>
                    </TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
    </>
  )
}

export default MyCourseTable
