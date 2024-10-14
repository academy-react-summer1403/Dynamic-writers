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

const TableDashboard = () => {

  const [courseTop, setCourseTops] = useState([])


  const getCourses = async () => {

    const response = await getCourseListTable()

    setCourseTops(response.courseFilterDtos)

  }
  useEffect(() => {
    getCourses()
  }, [])


  return (
    <div>

    <Table dir="rtl" aria-label="Example empty table">
      <TableHeader>
        <TableColumn> نام دوره </TableColumn>
        <TableColumn> درباره دوره </TableColumn>
        <TableColumn> اساتید دوره </TableColumn>
        <TableColumn> تاریخ برگزاری </TableColumn>
        <TableColumn> قیمت برگزاری </TableColumn>
        <TableColumn>  </TableColumn>
      </TableHeader>
      <TableBody emptyContent={"دوره ای برای نمایش وجود ندارد."}>

        {courseTop.map((item, index) => {
          return <TableRow key={index} className="h-10">
            <TableCell className="text-base font-bold truncate"> <div className="max-w-40 h-10 truncate leading-8"> {item.title} </div> </TableCell>
            <TableCell> <div className="max-w-56 h-10 truncate leading-8"> {item.describe} </div> </TableCell>
            <TableCell> <div className="max-w-32 h-10 truncate leading-8"> {item.teacherName} </div> </TableCell>
            <TableCell> {(jMoment(item.lastUpdate).locale('fa').format('jD jMMMM jYYYY'))} </TableCell>
            <TableCell className="text-base font-semibold"> {(parseInt(item.cost).toLocaleString('en-US'))} <span className="text-sm"> تومان </span> </TableCell>
            <TableCell> <NavLink> <ViewIcon className="size-4 cursor-pointer"/> </NavLink> </TableCell>
          </TableRow>
        })}
      
      </TableBody>
    </Table>

    </div>
  )
}

export default TableDashboard
