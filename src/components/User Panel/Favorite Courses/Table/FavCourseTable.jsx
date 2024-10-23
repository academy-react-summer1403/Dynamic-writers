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
import { BookDownloadIcon, Cancel01Icon, ViewIcon } from "hugeicons-react";
import { NavLink, useNavigate, } from "react-router-dom";
import { Pagination, Spinner, useDisclosure } from "@nextui-org/react";
import { deleteFavCourse } from "../../../../core/services/api/Panel/FavCourse/deleteFavCourse";
import FavCourseModal from "../Modal/FavCourseModal";
import { toast } from "react-toastify";
import DeleteFavoriteCourse from "../../../../core/services/api/Course/DeleteFavoriteCourse";
import DeleteModal from "../../../../core/services/common/Modal/DeleteModal";

const FavCourseTable = ({ myCourse, isLoading }) => {
  
  const [openCourseId, setOpenCourseId] = useState(null)
  const [openDelete, setOpenDelete] = useState(null)

  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5;

  const NotifySuccess = (message) => {
    toast.dismiss()

    toast.success(message)
  }
  
  const NotifyError = (message) => {
    toast.dismiss()

    toast.error(message)
  }

  const DeleteFav = async (favId) => {
    const response = await DeleteFavoriteCourse(favId)

    if(response.success === true) {
      NotifySuccess(response.message)
      setTimeout(() => {
        navigate('/layoutPanel/favCourse')
      }, 100)

      navigate('/layoutPanel')
    }
    else {
      NotifyError(' عملیات ناموفق بود ')
    }

  } 

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

  const paginationData = myCourse.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )


  return (
    <div>
    <Table classNames={{wrapper: 'dark:bg-slate-700'}} className="hidden md:block" dir="rtl" aria-label="Example empty table">
      <TableHeader>
        <TableColumn> # </TableColumn>
        <TableColumn> نام دوره </TableColumn>
        <TableColumn> شرایط دوره </TableColumn>
        <TableColumn> شروع دوره </TableColumn>
        <TableColumn> سطح دوره </TableColumn>
        <TableColumn> </TableColumn>
      </TableHeader>
      <TableBody isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />} emptyContent={"دوره ای برای نمایش وجود ندارد."}>

        {paginationData.map((item, index) => {
          return <TableRow key={index} className="h-10">
            <TableCell> <img className="w-[104px] h-[72px] rounded-[8px] bg-[#D9D9D9]" src={item.tumbImageAddress} /> </TableCell>
            <TableCell className="text-base font-bold truncate invisible md:visible"> <div className="max-w-40 h-10 truncate leading-8"> {item.courseTitle} </div> </TableCell>
            <TableCell className="invisible md:visible"> <div className="max-w-56 h-10 truncate leading-8"> {item.typeName.replace('-', ' ')} </div> </TableCell>
            <TableCell className="invisible md:visible"> <div className="max-w-32 h-10 truncate leading-8"> {(jMoment(item.lastUpdate).locale('fa').format('jD jMMMM jYYYY'))} </div> </TableCell>
            <TableCell className="invisible md:visible"> <span className={`${item.levelName === 'پیشرفته' ? 'bg-[#17C96433] text-[#17C964]' : 'text-[#F31260] bg-[#F3126033]'} px-2 rounded-full`}> {item.levelName} </span> </TableCell>
            <TableCell>
            <div className="flex gap-2 items-center"> 
              <NavLink to={``}> <ViewIcon onClick={() => handleOpenModal(item.courseId)} className="size-5 cursor-pointer"/></NavLink>                         
              <NavLink to={``}> <Cancel01Icon onClick={() => handleOpenModalDelete(item.favoriteId)} className="size-5 text-red-500 cursor-pointer"/></NavLink>             
            </div> 
                { openCourseId === item.courseId && <FavCourseModal
                    isOpenD={true}
                    onOpenD={() => handleOpenModal(item.courseId)}
                    onOpenChangeD={handleOpenModal}
                    courseId={item.courseId}
                    reserveId={item.reserveId}
                    courseName={item.courseName}
                    studentId={item.studentId}
                    studentName={item.studentName}
                    reserverDate={item.reserverDate}
                    accept={item.accept}
                /> }
                { openDelete === item.favoriteId && <DeleteModal DeleteFav={DeleteFav} isOpen={true} onOpenChange={handleOpenModalDelete} onOpen={() => handleOpenModalDelete(item.favoriteId)} courseId={item.courseId} /> }
                
            </TableCell>
          </TableRow>
          
        })}
      
      </TableBody>
    </Table>
    <Table isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />} classNames={{wrapper: 'dark:bg-slate-700'}} className="w-full md:hidden block" hideHeader>
      <TableHeader>
        <TableColumn>IMG</TableColumn>
        <TableColumn>INFO</TableColumn>
      </TableHeader>
        <TableBody isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />} emptyContent={"دوره ای برای نمایش وجود ندارد."} className="">
            {paginationData.map((item, index) => {
                return <TableRow className="border-t-1" key={index}>
                    <TableCell> <img className="min-w-[104px] w-[104px] min-h-[72px] h-[72px] rounded-[8px] bg-[#D9D9D9]" src={item.tumbImageAddress} /> </TableCell>
                    <TableCell>
                        <div className="flex flex-col gap-2">
                            <div className="max-w-40 font-bold text-xl truncate"> {item.courseTitle} </div>
                            <div className="flex flex-col justify-center gap-1">
                                <div className="max-w-56 truncate text-[#787878] dark:text-gray-300"> {item.typeName.replace('-', ' ')} </div> 
                                <span className={`${item.levelName === 'پیشرفته' ? 'bg-[#17C96433] text-[#17C964]' : 'text-[#F31260] bg-[#F3126033]'} px-2 rounded-full w-fit`}> {item.levelName} </span>
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
            isCompact showControls
            total={Math.ceil(myCourse.length / itemsPerPage)}
            onChange={(page) => setCurrentPage(page)}
        />
    </div>
    </div>
  )
}

export default FavCourseTable
