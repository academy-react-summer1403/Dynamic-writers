import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/table";
import React, { useEffect, useState } from 'react'
import { getCourseTops } from "../../../../core/services/api/courseTop";
import jMoment from 'moment-jalaali'
import { ViewIcon } from "hugeicons-react";
import { NavLink, useSearchParams } from "react-router-dom";
import { getCourseList } from "../../../../core/services/api/cours";
import { getCourseListTable } from "../../../../core/services/api/Course/courseListTable";
import { getCourseListTableRes } from "../../../../core/services/api/Course/courseListTableRes";
import Loading from "../../../../core/services/common/Loading/loading";
import { Spinner } from "@nextui-org/react";

const TableDashboard = () => {

  const [courseTop, setCourseTop] = useState([])
  const [courseTopRes, setCourseTopRes] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const getCourses = async () => {

    const response = await getCourseListTable()
    const response2 = await getCourseListTableRes()

    setCourseTop(response.courseFilterDtos)
    setCourseTopRes(response2.courseFilterDtos)

    if(response.courseFilterDtos) {
      setIsLoading(false)
    }

  }

  useEffect(() => {
    if(courseTop.length > 0) {
      setIsLoading(false)
    }
  }, [courseTop])
  
  useEffect(() => {
    getCourses()
  }, [])


  return (
    <div>

    <Table classNames={{wrapper: 'shadow-none dark:bg-slate-700'}} className="hidden md:block" dir="rtl" aria-label="Example empty table">
      <TableHeader>
        <TableColumn> نام دوره </TableColumn>
        <TableColumn> درباره دوره </TableColumn>
        <TableColumn> اساتید دوره </TableColumn>
        <TableColumn> تاریخ برگزاری </TableColumn>
        <TableColumn> قیمت برگزاری </TableColumn>
        <TableColumn> </TableColumn>
      </TableHeader>
      <TableBody emptyContent={"دوره ای برای نمایش وجود ندارد."} isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />} >

        {courseTop.map((item, index) => {
          return <TableRow key={index} className="h-10">
            <TableCell className="text-base font-bold truncate invisible md:visible"> <div className="max-w-40 h-10 truncate leading-8"> {item.title} </div> </TableCell>
            <TableCell className="invisible md:visible"> <div className="max-w-56 h-10 truncate leading-8"> {item.describe} </div> </TableCell>
            <TableCell className="invisible md:visible"> <div className="max-w-32 h-10 truncate leading-8"> {item.teacherName} </div> </TableCell>
            <TableCell className="invisible md:visible"> {(jMoment(item.lastUpdate).locale('fa').format('jD jMMMM jYYYY'))} </TableCell>
            <TableCell className="text-base font-semibold invisible md:visible"> {(parseInt(item.cost).toLocaleString('en-US'))} <span className="text-sm"> تومان </span> </TableCell>
            <TableCell> <NavLink to={`/CourseDetail/${item.courseId}`}> <ViewIcon className="size-4 cursor-pointer"/> </NavLink> </TableCell>
          </TableRow>
        })}
      
      </TableBody>
    </Table>
    <Table isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />} classNames={{wrapper: 'dark:bg-slate-700 shadow-none'}} className="md:hidden block" hideHeader>
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>VIEW</TableColumn>
      </TableHeader>
        <TableBody emptyContent={"دوره ای برای نمایش وجود ندارد."}>
        {courseTopRes.map((item, index) => {
          return <TableRow key={index} className="h-28 border-b-1 flex justify-between">
            <TableCell className="text-base font-semibold truncate"> 
              <div className="flex flex-col gap-1">
                <div className="max-w-40 h-10 truncate leading-8"> {item.title} </div>
                <span className="text-base text-gray-400"> {item.teacherName} </span>
                <span className="text-base text-gray-400 "> {(jMoment(item.lastUpdate).locale('fa').format('jD jMMMM jYYYY'))} </span>
              </div>  
            </TableCell>
            <TableCell className="flex justify-end"> <NavLink to={`/CourseDetail/${item.courseId}`}> <ViewIcon className="size-6 text-gray-600 hover:text-black dark:text-white cursor-pointer"/> </NavLink> </TableCell>
          </TableRow>
        })}
        </TableBody>
    </Table>

    </div>
  )
}

export default TableDashboard
