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
import { useNavigate } from "react-router-dom";
import { Badge, Pagination, Spinner } from "@nextui-org/react";
import { toast } from "react-toastify";
import { Cancel01Icon, Edit02Icon } from "hugeicons-react";
import { DeleteJob } from "../../../core/services/api/Jobs/DeleteJob";
import ModalUpdate from "./ModalUpdate";

const TableJob = ({ myJobs, isLoading, getMyJobs }) => {

  const navigate = useNavigate()
  
  const [openCourseId, setOpenCourseId] = useState(null)
  const [openDelete, setOpenDelete] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5;

  const [show, setShow] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const handleOpenModal = (newsId) => {
    if(openCourseId === newsId) {
        setOpenCourseId(null)
    }
    else {
        setOpenCourseId(newsId)
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

  const paginationData = myJobs ? myJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ) : []

  if (myJobs === null || myJobs.length === 0) {
    return <div className="text-center">هیچ شغلی برای نمایش وجود ندارد.</div>
  }

  return (
    <div>
      <Table classNames={{ wrapper: 'dark:bg-slate-700 shadow-none' }} className="hidden md:block" dir="rtl" aria-label="Example empty table">
        <TableHeader>
          <TableColumn> نام شغل </TableColumn>
          <TableColumn> درباره شغل </TableColumn>
          <TableColumn> وب سایت </TableColumn>
          <TableColumn> شروع کار </TableColumn>
          <TableColumn> پایان کار </TableColumn>
          <TableColumn> وضعیت </TableColumn>
          <TableColumn> شرکت </TableColumn>
          <TableColumn>  </TableColumn>
        </TableHeader>
        <TableBody isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />} emptyContent={" شغلی برای نمایش وجود ندارد."}>

          {paginationData.map((item, index) => {
            return <TableRow key={index} className="h-10">
              <TableCell className="font-bold text-base"> {item.jobTitle} </TableCell>
              <TableCell className="text-base h-[60px] truncate invisible md:visible"> 
                <div className="max-w-[200px] overflow-hidden text-ellipsis h-10 truncate leading-10"> {item.aboutJob} </div> 
              </TableCell>
              <TableCell> {item.companyWebSite} </TableCell>
              <TableCell className="invisible md:visible"> 
                <div className="max-w-32 h-10 truncate leading-[42px]"> {(jMoment(item.workStartDate).locale('fa').format('jD jMMMM jYYYY'))} </div> 
              </TableCell>
              <TableCell className="invisible md:visible"> 
                <div className="max-w-32 h-10 truncate leading-[42px]"> {(jMoment(item.workEndDate).locale('fa').format('jD jMMMM jYYYY'))} </div> 
              </TableCell>
              <TableCell> 
                <div className={`${item.inWork ? 'bg-green-400' : 'bg-red-400'} text-white px-2 w-fit py-[1px] text-sm font-bold rounded-full`}> 
                  {item.inWork ? ' در حال کار ' : ' اتمام کار '} 
                </div> 
              </TableCell>
              <TableCell> {item.companyName} </TableCell>
              <TableCell>
                <div className="flex gap-3 items-center justify-center">
                  <Edit02Icon className="text-blue-500 cursor-pointer" size={20} onClick={() => {
                    setSelectedItem(item)
                    setShow(true)
                  }} />
                  <Cancel01Icon className="text-red-500 cursor-pointer" size={20} onClick={async () => {
                    const response = await DeleteJob(item.id)

                    if(response.success){
                      toast.success(response.message)
                      getMyJobs()
                    }
                  }} />
                </div>
              </TableCell>
            </TableRow>
          })}
        
        </TableBody>
      </Table>

      <Table isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />} classNames={{ wrapper: 'dark:bg-slate-700' }} className="w-full md:hidden block" hideHeader>
        <TableHeader>
          <TableColumn> نام و عنوان </TableColumn>
          <TableColumn> شرکت و وضعیت </TableColumn>
        </TableHeader>
        <TableBody isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />} emptyContent={"دوره ای برای نمایش وجود ندارد."}>
          {paginationData.map((item, index) => {
            return (
              <TableRow className="border-b-1 cursor-pointer" key={index} onClick={() => handleOpenModal(item.newsId)}>
                <TableCell>
                  <div className="flex flex-col gap-2">
                    <div className="max-w-40 font-bold text-xl truncate h-6"> {item.jobTitle} </div>
                    <div className="max-w-40 font-bold text-base truncate"> {item.aboutJob} </div>
                    <div className="flex flex-col justify-center gap-1">
                      <div className="max-w-56 truncate text-[#787878]"> 
                        {(jMoment(item.workStartDate).locale('fa').format('jD jMMMM jYYYY'))} 
                      </div> 
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-2">
                    <div className="max-w-40 font-bold text-xl truncate h-6"> 
                      <div className={`${item.inWork ? 'bg-green-400' : 'bg-red-400'} text-white px-2 w-fit py-[1px] text-sm font-bold rounded-full`}> 
                        {item.inWork ? ' در حال کار ' : ' اتمام کار '} 
                      </div> 
                    </div>
                    <div className="max-w-40 font-bold text-base truncate"> {item.companyName} </div>
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <div className="w-full flex justify-start md:mx-5">
        <Pagination
          dir="ltr"
          className="my-5 z-0"
          isCompact showControls
          total={Math.ceil(myJobs.length / itemsPerPage)}
          initialPage={1}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
      {show && <ModalUpdate refetch={getMyJobs} selectedItem={selectedItem} show={show} setShow={setShow} />}
    </div>
  )
}

export default TableJob;
