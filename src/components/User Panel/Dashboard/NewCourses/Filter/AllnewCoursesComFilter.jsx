import { Input, Select, SelectItem } from '@nextui-org/react'
import { Field, Form, Formik } from 'formik'
import { Calendar02Icon, Money03Icon, Search01Icon, TeacherIcon } from 'hugeicons-react'
import React from 'react'

const AllnewCoursesComFilter = ({ teachers, setquery, setTeacher, setPageNumber, priceFrom, priceTo, handlePriceFrom, handlePriceTo, setCostUp, setCostDown }) => {
  return (
    <div className='w-full md:flex my-4 gap-6 hidden'>

    <div className='flex flex-col gap-4' style={{width: '489px'}}>
        <div className='flex items-center gap-2'>
            <Search01Icon />
            <span className='text-base font-semibold'> جست‌جو دوره </span>
        </div>
        <div className='relative flex flex-col gap-3'>
          <Formik
              initialValues={{Query: ''}}
              onSubmit={(value) => {setquery(value.Query), setPageNumber(1)}}
          >
                
              <Form>
                  <Field type='search' name='Query' className='w-full h-10 rounded-xl text-sm dark:text-white dark:bg-gray-700 bg-gray-100 text-gray-700 px-2 text-xs outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
                  <button type='submit' className='text-white bg-blue-500 absolute rounded-xl h-10 w-10 left-0 top-0 text-center flex justify-center items-center hover:bg-blue-400'> <Search01Icon className='size-5' /> </button>
              </Form>
          </Formik>
        </div>
    </div>

    <div className='flex flex-col gap-2' style={{width: '489px'}}>
        <div className='flex items-center gap-4'>
            <TeacherIcon />
            <span className='text-base font-semibold'> اساتید </span>
        </div>
        <div className='relative flex flex-col gap-3'>
            <Select placeholder='انتخاب کنید' classNames={{trigger: 'dark:bg-slate-700 dark:text-white'}} className='w-full my-2 rounded-xl text-gray-100' dir='rtl'>
              {teachers.map((item, index) => {
                  return <SelectItem onClick={() => {setTeacher(item.teacherId), setPageNumber(1)}} textValue={item.fullName}> {item.fullName ? item.fullName.replace('-', ' ') : "نامشخص"} </SelectItem>
              })}
              <SelectItem onClick={() => {setTeacher(''), setPageNumber(1)}}> هیچ کدام </SelectItem>
            </Select>
        </div>
    </div>

    <div style={{width: '489px'}} className='flex flex-col gap-6 items-start'>
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

        <div className='flex w-[489px]'>
            <input onChange={(e) => {handlePriceFrom(e.target.value), setCostDown(e.target.value), setPageNumber(1)}} type='range' 
            defaultValue={0} min='0' max='100000000' step='1000000' className='border-none cursor-pointer w-1/2 dark:bg-gray-600 bg-gray-200 h-2 rounded-full appearance-none thump' />
            <input onChange={(e) => {handlePriceTo(e.target.value), setCostUp(e.target.value), setPageNumber(1)}} type='range' 
            defaultValue={100000000} min='0' max='100000000' step='1000000' className='border-none cursor-pointer w-1/2 dark:bg-gray-600 bg-gray-200  h-2 rounded-full appearance-none thump' />
        </div>
    </div>

  </div>
  )
}

export default AllnewCoursesComFilter
