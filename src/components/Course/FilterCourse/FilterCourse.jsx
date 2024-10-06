import React, { useState } from 'react'
import { Input, Select, Button, SelectItem } from '@nextui-org/react'
import { Formik, Form, Field } from 'formik'
import { Calendar02Icon, CellsIcon, Layers01Icon, Money03Icon, Search01Icon, TeacherIcon } from 'hugeicons-react'
import { useNavigate } from 'react-router-dom'

const FilterCourse = ({ teachers }) => {

    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(1000000000)

    const navigate = useNavigate()

    const handlePriceFrom = (value) => {
        setPriceFrom(value)
    }
    const handlePriceTo = (value) => {
        setPriceTo(value)
    }

  return (
    <div className='bg-gray-100 rounded-3xl w-80 p-5 flex flex-col gap-5 font-semibold' style={{height: '620px'}}>

    <div className='flex flex-col gap-6'>
    <div className='flex items-center flex-row-reverse gap-2'>
        <Search01Icon />
        <span className='text-base font-semibold'> جست‌جو دوره </span>
    </div>
    <div className='relative flex flex-col gap-3'>

    <Formik
        initialValues={{search: ''}}
        onSubmit={(value) => navigate(`?Query=${value.search}`)}
    >
           
        <Form>
            <Field type='search' name='search' className='w-full h-10 rounded-xl bg-gray-200 text-gray-700 px-2 text-xs outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
            <button type='submit' className='text-white bg-blue-500 absolute rounded-xl h-10 w-10 left-0 top-0 text-center flex justify-center items-center hover:bg-blue-400'> <Search01Icon className='size-5' /> </button>
        </Form>
    </Formik>

    </div>
    </div>

    <div className='flex flex-col'>
    <div className='flex items-center flex-row-reverse gap-2'>
        <CellsIcon />
        <span className='text-base font-semibold'> دسته بندی </span>
    </div>
    <div className='relative flex flex-col gap-3'>
        <Select placeholder='انتخاب کنید' className='w-full my-2 rounded-xl text-gray-100' dir='rtl'>
            <SelectItem> بک اند </SelectItem>
            <SelectItem> فرانت اند </SelectItem>
            <SelectItem> React </SelectItem>
            <SelectItem> NextJs </SelectItem>
        </Select>
    </div>
    </div>

    <div className='flex flex-col'>
    <div className='flex items-center flex-row-reverse gap-2'>
        <Layers01Icon />
        <span className='text-base font-semibold'> سطح اموزش </span>
    </div>
    <div className='relative flex flex-col gap-3'>
        <Select placeholder='انتخاب کنید' className='w-full my-2 rounded-xl text-gray-100' dir='rtl'>
            <SelectItem> مبتدی </SelectItem>
            <SelectItem> متوسط </SelectItem>
            <SelectItem> پیشرفته </SelectItem>
        </Select>
    </div>
    </div>

    <div className='flex flex-col'>
    <div className='flex items-center flex-row-reverse gap-2'>
        <TeacherIcon />
        <span className='text-base font-semibold'> اساتید </span>
    </div>
    <div className='relative flex flex-col gap-3'>
        <Select placeholder='انتخاب کنید' className='w-full my-2 rounded-xl text-gray-100' dir='rtl'>
            
        </Select>
    </div>
    </div>

    <div className='flex flex-row-reverse items-center gap-3'>
    <span className='flex gap-2'> قیمت <Money03Icon /> </span>
    <div className='flex flex-row-reverse justify-between w-full'>
        <div className='flex gap-1 flex-row-reverse'>
        <span className='text-gray-500'> از </span>
        <h2 className='font-semibold'> {priceFrom} </h2>
        </div>
        <div className='flex gap-1 flex-row-reverse'>
        <span className='text-gray-500'> تا </span>
        <h2 className='font-semibold'> {priceTo} </h2>
        </div>
    </div>
    </div>

    <div className='flex flex-row-reverse'>
    <input onChange={(e) => handlePriceFrom(e.target.value)} type='range' min='0' max='10000000' step='100' className='border-none cursor-pointer bg-gray-200 w-36 h-2 rounded-full appearance-none thump' />
    <input onChange={(e) => handlePriceTo(e.target.value)} type='range'  min='0' max='10000000' step='100' className='border-none cursor-pointer bg-gray-200 w-36 h-2 rounded-full appearance-none thump' />
    </div>

    <div className='flex flex-col'>
        <div className='flex items-center flex-row-reverse gap-2'>
            <Calendar02Icon />
            <span className='text-base font-semibold'> تاریخ برگزاری </span>
        </div>
        <div className='relative flex flex-col gap-3'>
            <Input placeholder='1403/5/20 - 1403/6/20' className='w-full my-2 rounded-xl' dir='ltr'></Input>
        </div>
    </div>

    </div>
  )
}

export default FilterCourse
