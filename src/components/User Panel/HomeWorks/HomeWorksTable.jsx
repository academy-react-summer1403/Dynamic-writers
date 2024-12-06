import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@nextui-org/table";
import React, { useState } from 'react'
import jMoment from 'moment-jalaali'
import { ViewIcon } from "hugeicons-react";
import { NavLink } from "react-router-dom";
import { Pagination, Spinner } from "@nextui-org/react";

const HomeWorksTable = ({ myHomeWorks, isLoading }) => {
  
  const [openCourseId, setOpenCourseId] = useState(null)
  const [openDelete, setOpenDelete] = useState(null)

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

  const handleOpenModalDelete = (favoriteId) => {
    if(openDelete === favoriteId) {
        setOpenDelete(null)
    }
    else {
        setOpenDelete(favoriteId)
    }
  }

  const paginationData = myHomeWorks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )


  return (
    <div>
    <Table classNames={{wrapper: 'dark:bg-slate-700 shadow-none'}} className="hidden md:block" dir="rtl" aria-label="Example empty table">
      <TableHeader>
        <TableColumn> عنوان تکلیف </TableColumn>
        <TableColumn> توضیحات تکلیف </TableColumn>
        <TableColumn> نام کلاس </TableColumn>
        <TableColumn> تاریخ </TableColumn>
      </TableHeader>
      <TableBody isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />} emptyContent={"دوره ای برای نمایش وجود ندارد."}>

        {paginationData.map((item, index) => {
          return <TableRow key={index} className="h-10">
            <TableCell className="text-base font-bold truncate invisible md:visible"> <div className=" h-10 truncate max-w-[300px] leading-8"> {item.hwTitle} </div> </TableCell>
            <TableCell className="invisible md:visible whitespace-nowrap"> <div className="h-10 truncate max-w-[300px] leading-8"> {item.hwDescribe} </div> </TableCell>
            <TableCell className="invisible md:visible whitespace-nowrap"> <span className={`items-center flex py-0.5 px-2 rounded-full`}> {item.sessionTitle} </span> </TableCell>
            <TableCell className="invisible md:visible"> <div className="max-w-32 h-10 truncate leading-8"> {(jMoment(item.homeWorkDate).locale('fa').format('jD jMMMM jYYYY'))} </div> </TableCell>
          </TableRow>
          
        })}
      
      </TableBody>
    </Table>
    <Table isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />} classNames={{wrapper: 'dark:bg-slate-700'}} className="w-full md:hidden block" hideHeader>
      <TableHeader>
        <TableColumn>INFO</TableColumn>
      </TableHeader>
        <TableBody isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />} emptyContent={"دوره ای برای نمایش وجود ندارد."} className="">
            {paginationData.map((item, index) => {
                return <TableRow className="cursor-pointer border-b-1" key={index}>
                    <TableCell>
                        <div className="flex flex-col gap-2">
                            <div className="max-w-40 font-bold text-xl truncate h-6"> {item.hwTitle} </div>
                            <div className="flex flex-col justify-center gap-1">
                                <div className="max-w-56 truncate text-[#787878] dark:text-gray-300"> {item.hwDescribe} </div> 
                                <div className="max-w-32 h-10 truncate leading-8"> {(jMoment(item.homeWorkDate).locale('fa').format('jD jMMMM jYYYY'))} </div> 
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
            className="z-0 my-5"
            isCompact 
            showControls
            total={Math.ceil(myHomeWorks.length / itemsPerPage)}
            initialPage={1}
            onChange={(page) => setCurrentPage(page)}
        />
    </div>
    </div>
  )
}

export default HomeWorksTable
