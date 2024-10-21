import { Input } from '@nextui-org/input';
import { Field, Formik, Form } from 'formik'
import { Calendar02Icon, Search01Icon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import MyCourseTable from './MyCourseTable';
import { getMyCourse } from '../../../core/services/api/Panel/MyCourse/getMyCourse';
import { Button, Pagination, Select, SelectItem } from '@nextui-org/react';
import MyCourseFilterRes from './FilterRes/MyCourseFilterRes';

const MyCourseCom = () => {

    const [myCourse, setMyCourse] = useState([])
    const [query, setquery] = useState({})
    const [pageNumber, setPageNumber] = useState(1)
    const [rows, setRows] = useState(5)
    const [sortType, setSortType] = useState('DESC')
    const [sortingCol, setSortingCol] = useState('Active')

    const [totalCount, setTotalCount] = useState()
    const [filterClose, setFilterClose] = useState(false)

    const getCourses = async () => {
  
      const response = await getMyCourse(query, rows, pageNumber, sortingCol , sortType)
      setMyCourse(response.listOfMyCourses)
      setTotalCount(Number(response.totalCount % rows))
    }
    useEffect(() => {
      getCourses()
    }, [])

    useEffect(() => {
        if(query === '') {
            setquery({})
        }
        getCourses()
    }, [query, rows, pageNumber, sortType, sortingCol])

  return (
    <div className='w-full flex p-2 flex-col gap-3 rounded-2xl h-fit' dir='rtl'>
      <div className='md:hidden flex w-full h-fit justify-between items-center'>
        <h2 className='text-[28px] font-bold'> دوره من </h2>
        <Button className='bg-blue-500 rounded-full text-white text-base font-semibold' onClick={() => setFilterClose(true)}> فیلتر </Button>
      </div>
      {filterClose && <MyCourseFilterRes
        setquery={setquery}
        filterClose={setFilterClose}
        setSortingCol={setSortingCol}
        setSortType={setSortType}
      />}
      <div className='md:flex flex-col w-full h-fit gap-10 hidden'>
        <h2 className='text-[28px] font-bold mt-8'> دوره من </h2>
        <div className='flex gap-6 w-full h-fit'>
            <div className='flex flex-col gap-4 w-[289px]'>
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
                        <Field type='search' name='Query' className='w-[289px] h-10 rounded-xl bg-gray-200 dark:bg-slate-600 dark:text-white px-2 text-sm outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
                        <button type='submit' className='text-white bg-blue-500 absolute rounded-xl h-10 w-10 left-0 top-0 text-center flex justify-center items-center hover:bg-blue-400'> <Search01Icon className='size-5' /> </button>
                    </Form>
                </Formik>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-[289px]'>
                <div className='flex items-center gap-4'>
                    <Calendar02Icon />
                    <span className='text-base font-semibold'> ترتیب </span>
                </div>
                <div className='relative gap-3 flex flex-col'>
                    <Select classNames={{trigger: 'bg-gray-200 dark:bg-slate-600 dark:text-white'}} placeholder='انتخاب کنید...'>
                        <SelectItem onClick={() => {setSortType('ASC'), setSortingCol('Cost')}}> ارزان ترین </SelectItem>
                        <SelectItem onClick={() => {setSortType('ASC'), setSortingCol('LastUpdate')}}> قدیمی ترین ها </SelectItem>
                        <SelectItem onClick={() => {setSortType('DESC'), setSortingCol('LastUpdate')}}> جدید ترین </SelectItem>
                        <SelectItem onClick={() => {setSortType(''), setSortingCol('')}}> هیچ کدام </SelectItem>
                    </Select>
                </div>
            </div>
        </div>
      </div>
        <MyCourseTable
            myCourse={myCourse}
        />
        <div className='w-full flex justify-center'>
        <Pagination className='w-fit z-0 float-start' classNames={{wrapper: 'bg-white'}} dir='ltr' onChange={(e) => setPageNumber(e)} isCompact showControls total={totalCount} initialPage={1} />
        </div>
    </div>
  )
}

export default MyCourseCom
