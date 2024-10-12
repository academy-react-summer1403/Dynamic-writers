import React, { useEffect, useState } from 'react'
import { Input, Select, Button, SelectItem, checkbox } from '@nextui-org/react'
import { Formik, Form, Field } from 'formik'
import { Calendar02Icon, Cancel01Icon, CellsIcon, Layers01Icon, Money03Icon, Search01Icon, TeacherIcon } from 'hugeicons-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getTeacherList } from '../../../core/services/api/teachers'
import { getTechList } from '../../../core/services/api/tech'
import { getCourseLevels } from '../../../core/services/api/courseLevel'

const FilterCourseRes = ({ closeFilter, updateParams }) => {

    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(1000000000)
    const [levels, setLevels] = useState([])
    const [techs, setTechs] = useState([])
    const [teachers, setTeachers] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()

    const navigate = useNavigate()

    const handlePriceFrom = (value) => {
        setPriceFrom(value)
    }
    const handlePriceTo = (value) => {
        setPriceTo(value)
    }

    const techCounting = (value) => {
        updateParams('TechCount', (value.target.value).split(',').length)

        if(!value.target.value) {
            {updateParams('ListTech', 0), updateParams('TechCount', 0)}
        }
    }

    const getLevels = async () => {

        const response = await getCourseLevels()
        setLevels(response)
    }

    const getTechs = async () => {

        const response = await getTechList()
        setTechs(response)
    }

    const getTeachers = async () => {

        const response = await getTeacherList()
        setTeachers(response)
    }

    useEffect(() => {
        getLevels()
        getTechs()
        getTeachers()
    }, [])

    const updateParamsSort = (value, value2) => {
        searchParams.set('SortingCol', value)
        searchParams.set('SortType', value2)
        setSearchParams(searchParams)
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
        <Select placeholder='انتخاب کنید'  onChange={(e) => techCounting(e)} className='w-full my-2 rounded-xl text-gray-100' dir='rtl'>
        {techs.map((item, index) => {

            return <SelectItem onClick={() => updateParams('ListTech', item.id)} textValue={item.techName}> {item.techName} </SelectItem>

        })}
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
            
            {levels.map((item,index) => {
                return <SelectItem onClick={() => updateParams('courseLevelId', item.id)} textValue={item.levelName}> {item.levelName} </SelectItem>
            })}
            <SelectItem onClick={() => updateParams('courseLevelId', "")}> </SelectItem>

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
            {teachers.map((item, index) => {
                return <SelectItem onClick={() => updateParams('TeacherId', item.teacherId)} textValue={item.fullName}> {item.fullName ? item.fullName.replace('-', ' ') : "نامشخص"} </SelectItem>
            })}
            <SelectItem onClick={() => updateParams('TeacherId', "")}> </SelectItem>
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
    <input onChange={(e) => {handlePriceFrom(e.target.value), updateParams('CostDown', e.target.value)}} type='range' 
    defaultValue={0} min='0' max='1000000000' step='10000' className='border-none cursor-pointer bg-gray-200 w-36 h-2 rounded-full appearance-none thump rotate-180' />
    <input onChange={(e) => {handlePriceTo(e.target.value), updateParams('CostUp', e.target.value)}} type='range' 
    defaultValue={100000000} min='0' max='1000000000' step='10000' className='border-none cursor-pointer bg-gray-200 w-36 h-2 rounded-full appearance-none thump rotate-180' />
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
                <SelectItem onClick={() => {updateParamsSort('LastUpdate', 'DESC')}}> جدید ترین </SelectItem>
                <SelectItem onClick={() => {updateParamsSort('LastUpdate', 'ASC')}}> قدیمی ترین </SelectItem>
                <SelectItem onClick={() => {updateParamsSort('Cost', 'ASC')}}> ارزان ترین </SelectItem>
                <SelectItem onClick={() => {updateParamsSort('', '')}}> هیچ کدام </SelectItem>
            </Select>
        </div>
    </div>

    </div>
  )
}

export default FilterCourseRes
