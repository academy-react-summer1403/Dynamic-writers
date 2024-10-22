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
import { Cancel01Icon, ViewIcon } from "hugeicons-react";
import { NavLink, useNavigate, } from "react-router-dom";
import { Pagination, Spinner, useDisclosure } from "@nextui-org/react";
import { deleteFavNews } from "../../../../core/services/api/Panel/FavNews/deleteFavNews";
import { toast } from "react-toastify";
import FavNewsModal from "../Modal/FavNewsModal";
import DeleteFavoriteNews from "../../../../core/services/api/News/DeleteFavoriteNews";

const FavNewsTable = ({ myNews, isLoading }) => {

  const navigate = useNavigate()
  
  const [openCourseId, setOpenCourseId] = useState(null)

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

  const handleOpenModal = (newsId) => {
    if(openCourseId === newsId) {
        setOpenCourseId(null)
    }
    else {
        setOpenCourseId(newsId)
    }
  }

  const DeleteFav = async (deleteEntityId) => {
    const response = await DeleteFavoriteNews(deleteEntityId)
  
    if(response.success === false) {
      NotifySuccess(response.message)
      setTimeout(() => {
        navigate('/layoutPanel/favNews')
      }, 100)

      navigate('/layoutPanel')
    }
    else {
      NotifyError(' عملیات ناموفق بود ')
    }
  } 

  const paginationData = myNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div>
    <Table classNames={{wrapper: 'dark:bg-slate-700'}} className="hidden md:block" dir="rtl" aria-label="Example empty table">
      <TableHeader>
        <TableColumn> # </TableColumn>
        <TableColumn> عنوان </TableColumn>
        <TableColumn> بازدید کل </TableColumn>
        <TableColumn> درباره مقاله </TableColumn>
        <TableColumn> تاریخ انتشار </TableColumn>
        <TableColumn> </TableColumn>
      </TableHeader>
      <TableBody isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />} emptyContent={"دوره ای برای نمایش وجود ندارد."}>

        {paginationData.map((item, index) => {
          return <TableRow key={index} className="h-10">
            <TableCell> <img className="w-[104px] h-[72px] rounded-[8px] bg-[#D9D9D9]" src={item.currentImageAddressTumb} /> </TableCell>
            <TableCell className="text-base font-bold truncate invisible md:visible"> <div className="max-w-40 h-10 truncate leading-10"> {item.title} </div> </TableCell>
            <TableCell className="invisible md:visible"> <div className="max-w-56 h-10 truncate leading-10"> {item.currentView} </div> </TableCell>
            <TableCell> بهترین مقاله ای که نوشتم اینه که.... </TableCell>
            <TableCell className="invisible md:visible"> <div className="max-w-32 h-10 truncate leading-[42px]"> {(jMoment(item.updateDate).locale('fa').format('jD jMMMM jYYYY'))} </div> </TableCell>
            <TableCell> 
                <div className="flex gap-2 items-center">
                  <NavLink to={``}> <ViewIcon onClick={() => handleOpenModal(item.newsId)} className="size-4 cursor-pointer"/> </NavLink>    
                  <NavLink to={``}> <Cancel01Icon onClick={() => DeleteFav(item.newsId)} className="size-5 text-red-500 cursor-pointer"/></NavLink> 
                </div>            
                { openCourseId === item.newsId && <FavNewsModal
                    isOpen={true}
                    onOpen={() => handleOpenModal(item.newsId)}
                    onOpenChange={handleOpenModal}
                    newsId={item.newsId}
                /> }

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
                    <TableCell> <img className="min-w-[104px] w-[104px] min-h-[72px] h-[72px] rounded-[8px] bg-[#D9D9D9]" src={item.currentImageAddressTumb} /> </TableCell>
                    <TableCell>
                        <div className="flex flex-col gap-2">
                            <div className="max-w-40 font-bold text-xl truncate"> {item.title} </div>
                            <div className="flex flex-col justify-center gap-1">
                                <div className="max-w-56 truncate text-[#787878]"> {item.updateDate} </div> 
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
            className="my-5 z-0"
            isCompact showControls
            total={Math.ceil(myNews.length / itemsPerPage)}
            initialPage={1}
            onChange={(page) => setCurrentPage(page)}
        />
    </div>
    </div>
  )
}

export default FavNewsTable
