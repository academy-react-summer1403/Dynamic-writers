import { Button, Input, Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { Calendar02Icon, Cancel01Icon, Money03Icon, Search01Icon, TeacherIcon, ViewIcon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import jMoment from 'moment-jalaali'
import { getCourseListAllTable } from '../../../../core/services/api/Course/courseListAllTable'
import { getTeacherList } from '../../../../core/services/api/teachers'
import { toGregorian } from 'jalaali-js'
import AllnewCoursesComFilter from './Filter/AllnewCoursesComFilter'
import AllNewCoursesComFilterRes from './Filter/AllNewCoursesComFilterRes'

const convertJalaliToGregorian = (jalaliDate) => {

  const jalaaliDateShams = (jalaliDate.split('/'))
  const gregorianDate = toGregorian(parseInt(jalaaliDateShams[0]), parseInt(jalaaliDateShams[1]), parseInt(jalaaliDateShams[2]))
  return `${gregorianDate.gy}-${gregorianDate.gm}-${gregorianDate.gd}`
} 

const AllNewCoursesCom = () => {

    const navigate = useNavigate()

    const [filterRes, setFilterRes] = useState(false)
    const [courseTop, setCourseTops] = useState([])
    const [totalCount, setTotalCount] = useState()
    const [teachers, setTeachers] = useState([])
    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(1000000000)

    const [pageNumber, setPageNumber] = useState(1)
    const [rows, setRows] = useState(8)
    const [query, setquery] = useState({})
    const [teacher, setTeacher] = useState('')
    const [costUp, setCostUp] = useState(1000000000)
    const [costDown, setCostDown] = useState(0)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const [dateInput, setDateInput] = useState('');
    const [convertedDates, setConvertedDates] = useState({ startDate: '', endDate: '' });

    const closeFilter = () => {
      setFilterRes(false)
    }
    
    const handlePriceFrom = (value) => {
      setPriceFrom(value)
    }
    const handlePriceTo = (value) => {
        setPriceTo(value)
    }

    const handleChange = (e) => {
      setDateInput(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const dates = dateInput.split(' - ');
      if (dates.length === 2) {
        const startDate = dates[0].trim();
        const endDate = dates[1].trim();
        const convertedStartDate = convertJalaliToGregorian(startDate);
        const convertedEndDate = convertJalaliToGregorian(endDate);
        setConvertedDates({ startDate: convertedStartDate, endDate: convertedEndDate });
      }
      else {
        setConvertedDates({endDate: '', startDate: ''})
      }
    }

    const getCourses = async () => {
  
      const response = await getCourseListAllTable(pageNumber, rows, query, teacher, costDown.toString(), costUp.toString(), convertedDates)
  
      setTotalCount(parseInt(response.totalCount / rows))
      setCourseTops(response.courseFilterDtos)
  
    }
    const getTeachers = async () => {

      const response = await getTeacherList()
      setTeachers(response)
  }

    useEffect(() => {
      getCourses()
      getTeachers()
    }, [])

    useEffect(() => {
      if(query === '') {
        setquery({})
      }
      getCourses()
    }, [pageNumber, rows, query, teacher, costDown, costUp, convertedDates])

  return (
    <div className='w-dvw h-dvh bg-white rounded-2xl flex gap-4 flex-col p-6' dir='rtl'>
      <div className='flex justify-between w-full h-fit items-center my-2'>
        <span className='md:text-2xl text-xl font-semibold'> جدیدترین دوره ها </span>
       <Link to='/layoutPanel/dashboard'> <Button className='bg-white border-red-500 border text-red-500 rounded-3xl text-base flex flex-row-reverse items-center'> بستن <Cancel01Icon className='size-5' /> </Button> </Link>
      </div>

      <AllnewCoursesComFilter teachers={teachers} setquery={setquery} handleSubmit={handleSubmit} handleChange={handleChange} priceFrom={priceFrom} priceTo={priceTo} setTeacher={setTeacher} handlePriceFrom={handlePriceFrom} handlePriceTo={handlePriceTo} setCostDown={setCostDown} setCostUp={setCostUp}/>

      <button onClick={() => setFilterRes(true)} className='rounded-full bg-blue-500 text-white w-20 h-10 py-2 px-6 text-base font-semibold md:hidden block'> فیلتر </button>

      {filterRes && <AllNewCoursesComFilterRes teachers={teachers} setquery={setquery} setTeacher={setTeacher} handleSubmit={handleSubmit} handleChange={handleChange} closeFilter={closeFilter} />}

      <Table className='md:block hidden' dir="rtl" aria-label="Example empty table">
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
            <TableCell> <NavLink to={`/CourseDetail/${item.courseId}`}> <ViewIcon className="size-4 cursor-pointer"/> </NavLink> </TableCell>
          </TableRow>
        })}
      
      </TableBody>
    </Table>

    <Table className='md:hidden block' hideHeader>
      <TableHeader>
        <TableColumn>IMAGE</TableColumn>
        <TableColumn>DOCUMENT</TableColumn>
      </TableHeader>
      <TableBody>
        {courseTop.map((item, index) => {
          return <TableRow onClick={() => navigate('/CourseDetail/' + item.courseId)} key={index} className='h-28 border-b-1 flex justify-start'>
            <TableCell className=''>
              <img src={item.tumbImageAddress} className='rounded-lg w-28 h-20' style={{backgroundColor: '#D9D9D9'}}/>
            </TableCell>
            <TableCell className="text-base font-semibold truncate"> 
              <div className="flex flex-col">
                <div className="max-w-40 h-10 truncate leading-8"> {item.title} </div>
                <span className="text-base text-gray-400"> {item.teacherName} </span>
                <span className="text-base text-gray-400"> {(jMoment(item.lastUpdate).locale('fa').format('jD jMMMM jYYYY'))} </span>
              </div>  
            </TableCell>
          </TableRow>
        })}
      </TableBody>
    </Table>

    <div className='w-full flex justify-center md:px-10 py-5' dir='ltr'>
        <Pagination className='min-w-80 w-fit z-0 float-start' onChange={(e) => setPageNumber(e)} isCompact showControls total={totalCount} initialPage={1} />
    </div>
    </div>
  )
}

export default AllNewCoursesCom
