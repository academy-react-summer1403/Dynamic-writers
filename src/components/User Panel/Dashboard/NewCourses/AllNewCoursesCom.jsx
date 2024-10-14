import { Button, Input, Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { Form, Field, Formik } from 'formik'
import { Calendar02Icon, Cancel01Icon, Money03Icon, Search01Icon, TeacherIcon, ViewIcon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import jMoment from 'moment-jalaali'
import { getCourseListAllTable } from '../../../../core/services/api/Course/courseListAllTable'
import { getTeacherList } from '../../../../core/services/api/teachers'
import { toGregorian } from 'jalaali-js'

const convertJalaliToGregorian = (jalaliDate) => {

  const jalaaliDateShams = (jalaliDate.split('/'))
  const gregorianDate = toGregorian(parseInt(jalaaliDateShams[0]), parseInt(jalaaliDateShams[1]), parseInt(jalaaliDateShams[2]))
  return `${gregorianDate.gy}-${gregorianDate.gm}-${gregorianDate.gd}`
} 

const AllNewCoursesCom = () => {

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
      <div className='flex justify-between w-full h-fit'>
        <span className='text-3xl font-semibold'> جدیدترین دوره ها </span>
       <Link to='/layoutPanel/dashboard'> <Button className='bg-white border-red-500 border text-red-500 rounded-3xl text-base flex flex-row-reverse items-center'> بستن <Cancel01Icon className='size-5' /> </Button> </Link>
      </div>

      <div className='w-full flex my-4 gap-6'>

        <div className='flex flex-col gap-4' style={{width: '389px'}}>
            <div className='flex items-center gap-2'>
                <Search01Icon />
                <span className='text-base font-semibold'> جست‌جو دوره </span>
            </div>
            <div className='relative flex flex-col gap-3'>
              <Formik
                  initialValues={{Query: ''}}
                  onSubmit={(value) => setquery(value.Query)}
              >
                    
                  <Form>
                      <Field type='search' name='Query' className='w-full h-10 rounded-xl bg-gray-100 text-gray-700 px-2 text-xs outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
                      <button type='submit' className='text-white bg-blue-500 absolute rounded-xl h-10 w-10 left-0 top-0 text-center flex justify-center items-center hover:bg-blue-400'> <Search01Icon className='size-5' /> </button>
                  </Form>
              </Formik>
            </div>
        </div>

        <div className='flex flex-col gap-2' style={{width: '389px'}}>
            <div className='flex items-center gap-4'>
                <Calendar02Icon />
                <span className='text-base font-semibold'> تاریخ برگزاری </span>
            </div>
            <div className='relative gap-3 flex flex-col'>
            <form className='relative items-center flex' onSubmit={handleSubmit}>
               <Input placeholder='1403/5/20 - 1403/6/20' format='YYYY-MM-DD' onChange={handleChange} className='w-full my-2 rounded-xl' dir='ltr' />
               <button type='submit' className='text-white bg-gray-500 absolute rounded-xl h-10 w-10 right-0 bottom-2 text-center flex justify-center items-center hover:bg-gray-600'> <Calendar02Icon className='size-5' /> </button>
            </form>
            </div>
        </div>

        <div className='flex flex-col gap-2' style={{width: '389px'}}>
            <div className='flex items-center gap-4'>
                <TeacherIcon />
                <span className='text-base font-semibold'> اساتید </span>
            </div>
            <div className='relative flex flex-col gap-3'>
                <Select placeholder='انتخاب کنید' className='w-full my-2 rounded-xl text-gray-100' dir='rtl'>
                  {teachers.map((item, index) => {
                      return <SelectItem onClick={() => setTeacher(item.teacherId)} textValue={item.fullName}> {item.fullName ? item.fullName.replace('-', ' ') : "نامشخص"} </SelectItem>
                  })}
                  <SelectItem onClick={() => setTeacher('')}> هیچ کدام </SelectItem>
                </Select>
            </div>
        </div>

        <div style={{width: '389px'}} className='flex flex-col gap-6 items-start'>
            <div className='flex items-center gap-3 w-full'>
                <span className='flex gap-2 flex-row-reverse'> قیمت <Money03Icon /> </span>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-1'>
                    <span className='text-gray-500'> از </span>
                    <h2 className='font-semibold'> {priceFrom} </h2>
                    </div>
                    <div className='flex gap-1'>
                    <span className='text-gray-500'> تا </span>
                    <h2 className='font-semibold'> {priceTo} </h2>
                    </div>
                </div>
            </div>

            <div className='flex'>
                <input onChange={(e) => {handlePriceFrom(e.target.value), setCostDown(e.target.value)}} type='range' 
                defaultValue={0} min='0' max='100000000' step='100000' className='border-none cursor-pointer bg-gray-200 h-2 rounded-full appearance-none thump' />
                <input onChange={(e) => {handlePriceTo(e.target.value), setCostUp(e.target.value)}} type='range' 
                defaultValue={100000000} min='0' max='100000000' step='100000' className='border-none cursor-pointer bg-gray-200  h-2 rounded-full appearance-none thump' />
            </div>
        </div>

      </div>

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
    <div className='w-full flex justify-center md:px-10 py-5' dir='ltr'>
        <Pagination className='min-w-80 w-fit z-0 float-start' onChange={(e) => setPageNumber(e)} isCompact showControls total={totalCount} initialPage={1} />
    </div>
    </div>
  )
}

export default AllNewCoursesCom
