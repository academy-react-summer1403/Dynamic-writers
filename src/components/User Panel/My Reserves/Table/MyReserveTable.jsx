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
import { Pagination, useDisclosure } from "@nextui-org/react";
import MyReserveModal from "../Modal/MyReserveModal";

const MyReserveTable = ({ myCourse }) => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [openCourseId, setOpenCourseId] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5;

  const handleOpenModal = (courseId) => {
    if(openCourseId === courseId) {
        setOpenCourseId(null)
    }
    else {
        setOpenCourseId(courseId)
    }
  }

  const paginationData = myCourse.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div>
    <Table className="w-[1196px] hidden md:block" dir="rtl" aria-label="Example empty table">
      <TableHeader>
        <TableColumn> # </TableColumn>
        <TableColumn> نام دوره </TableColumn>
        <TableColumn> دانشجو دوره </TableColumn>
        <TableColumn> زمان رزرو </TableColumn>
        <TableColumn> وضعیت ثبت نام </TableColumn>
        <TableColumn> </TableColumn>
      </TableHeader>
      <TableBody emptyContent={"دوره ای برای نمایش وجود ندارد."}>

        {paginationData.map((item, index) => {
          return <TableRow key={index} className="h-10">
            <TableCell> <img className="w-[104px] h-[72px] rounded-[8px] bg-[#D9D9D9]" src='' /> </TableCell>
            <TableCell className="text-base font-bold truncate invisible md:visible"> <div className="max-w-40 h-10 truncate leading-8"> {item.courseName} </div> </TableCell>
            <TableCell className="invisible md:visible"> <div className="max-w-56 h-10 truncate leading-8"> {item.studentName.replace('-', ' ')} </div> </TableCell>
            <TableCell className="invisible md:visible"> <div className="max-w-32 h-10 truncate leading-8"> {(jMoment(item.reserverDate).locale('fa').format('jD jMMMM jYYYY'))} </div> </TableCell>
            <TableCell className="invisible md:visible"> <span className={`${item.accept ? 'bg-[#17C96433] text-[#17C964]' : 'text-[#F31260] bg-[#F3126033]'} px-2 rounded-full`}> {item.accept ? 'تایید شده' : 'تایید نشده'} </span> </TableCell>
            <TableCell> <NavLink to={``}> <ViewIcon onClick={() => handleOpenModal(item.courseId)} className="size-4 cursor-pointer"/> </NavLink>             
                { openCourseId === item.courseId && <MyReserveModal
                    isOpen={true}
                    onOpen={() => handleOpenModal(item.courseId)}
                    onOpenChange={handleOpenModal}
                    courseId={item.courseId}
                    reserveId={item.reserveId}
                    courseName={item.courseName}
                    studentId={item.studentId}
                    studentName={item.studentName}
                    reserverDate={item.reserverDate}
                    accept={item.accept}
                /> }

            </TableCell>
          </TableRow>
          
        })}
      
      </TableBody>
    </Table>
    <Table className="w-full md:hidden block" hideHeader>
      <TableHeader>
        <TableColumn>IMG</TableColumn>
        <TableColumn>INFO</TableColumn>
      </TableHeader>
        <TableBody className="">
            {paginationData.map((item, index) => {
                return <TableRow onClick={() => handleOpenModal(item.courseId)} className="border-t-1" key={index}>
                    <TableCell> <img className="min-w-[104px] w-[104px] min-h-[72px] h-[72px] rounded-[8px] bg-[#D9D9D9]" src='' /> </TableCell>
                    <TableCell>
                        <div className="flex flex-col gap-2">
                            <div className="max-w-40 font-bold text-xl truncate"> {item.courseName} </div>
                            <div className="flex flex-col justify-center gap-1">
                                <div className="max-w-56 truncate text-[#787878]"> {item.studentName.replace('-', ' ')} </div> 
                                <span className={`${item.accept ? 'bg-[#17C96433] text-[#17C964]' : 'text-[#F31260] bg-[#F3126033]'} px-2 rounded-full w-fit`}> {item.accept ? 'تایید شده' : 'تایید نشده'} </span>
                            </div>
                        </div>
                    </TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
    <div className="w-full flex justify-start">
        <Pagination
            dir="ltr"
            className="my-5"
            isCompact showControls
            total={Math.ceil(myCourse.length / itemsPerPage)}
            initialPage={2}
            onChange={(page) => setCurrentPage(page)}
        />
    </div>
    </div>
  )
}

export default MyReserveTable
