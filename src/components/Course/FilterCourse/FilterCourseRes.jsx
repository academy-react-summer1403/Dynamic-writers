import React, { useEffect, useState } from 'react'
import { Input, Select, Button, SelectItem } from '@nextui-org/react'
import { Formik, Form, Field } from 'formik'
import { Calendar02Icon, Cancel01Icon, CellsIcon, Layers01Icon, Money03Icon, Search01Icon, TeacherIcon } from 'hugeicons-react'
import { useNavigate } from 'react-router-dom'

const FilterCourseRes = ({ closeFilter }) => {

    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(1000000000)

    const navigate = useNavigate()

    const handlePriceFrom = (value) => {
        setPriceFrom(value)
    }
    const handlePriceTo = (value) => {
        setPriceTo(value)
    }

    const [scrollPosition, setScrollPosition] = useState({x: window.pageXOffset, y: window.pageYOffset})

  return (
    <div className={`bg-white rounded-t-3xl w-dvw p-5 flex flex-col gap-3 font-semibold text-sm fixed bottom-${scrollPosition.y} right-0 z-50 h-fit`}>
    <div className='border-2 w-10 mx-auto cursor-pointer'></div>
    <div className='flex flex-row-reverse justify-between item-center'>
        <h2 className='font-extrabold'> ترتیب و فیلتر </h2>
        <div onClick={closeFilter} className='group hover:bg-red-500 hover:text-white border py-1.5 px-3 border-red-500 text-red-500 rounded-full bg-white flex flex-row-reverse items-center gap-2 text-sm cursor-pointer'>
            <Cancel01Icon className='size-4 group-hover:text-white' />
            بستن
        </div>
    </div>

    <div className='flex flex-col'>
    <div className='flex items-center flex-row-reverse gap-2'>
        <CellsIcon />
        <span className='text-sm font-semibold'> دسته بندی </span>
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
        <span className='text-sm font-semibold'> سطح اموزش </span>
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
        <span className='text-sm font-semibold'> اساتید </span>
    </div>
    <div className='relative flex flex-col gap-3'>
        <Select placeholder='انتخاب کنید' className='w-full my-2 rounded-xl text-gray-100' dir='rtl'>
            
        </Select>
    </div>
    </div>

    <div className='flex flex-row-reverse justify-between items-center gap-3'>
    <span className='flex gap-2'> قیمت <Money03Icon /> </span>
    <div className='flex flex-row-reverse justify-between w-60'>
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
    <input onChange={(e) => handlePriceFrom(e.target.value)} type='range' min='0' max='10000000' step='100' className='border-none cursor-pointer bg-gray-200 w-full h-2 rounded-full appearance-none thump' />
    <input onChange={(e) => handlePriceTo(e.target.value)} type='range'  min='0' max='10000000' step='100' className='border-none cursor-pointer bg-gray-200 w-full h-2 rounded-full appearance-none thump' />
    </div>

    <div className='flex flex-col'>
        <div className='flex items-center flex-row-reverse gap-2'>
            <Calendar02Icon />
            <span className='text-sm font-semibold'> تاریخ برگزاری </span>
        </div>
        <div className='relative flex flex-col gap-3'>
            <Input placeholder='1403/5/20 - 1403/6/20' className='w-full my-2 rounded-xl' dir='ltr'></Input>
        </div>
    </div>

    <div className='flex flex-col'>
        <div className='flex items-center flex-row-reverse gap-2'>
            <Calendar02Icon />
            <span className='text-sm font-semibold'> ترتیب </span>
        </div>
        <div className='relative flex flex-col gap-3'>
            <Select placeholder='انتخاب کنید' className='w-full my-2 rounded-xl text-gray-100' dir='rtl'>
                <SelectItem> پرطرفدار ترین </SelectItem>
                <SelectItem> محبوب ترین </SelectItem>
                <SelectItem> ارزان ترین </SelectItem>
            </Select>
        </div>
    </div>

    </div>
  )
}

export default FilterCourseRes
