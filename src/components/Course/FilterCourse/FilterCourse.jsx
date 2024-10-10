import React, { useEffect, useState } from 'react'
import { Input, Select, Button, SelectItem } from '@nextui-org/react'
import { Formik, Form, Field } from 'formik'
import { Calendar02Icon, CellsIcon, Layers01Icon, Money03Icon, Search01Icon, TeacherIcon } from 'hugeicons-react'
import { useNavigate } from 'react-router-dom'
import { getCourseLevels } from '../../../core/services/api/courseLevel'
import { getTechList } from '../../../core/services/api/tech'
import { getTeacherList } from '../../../core/services/api/teachers'

const FilterCourse = ({ updateParams }) => {

    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(1000000000)
    const [levels, setLevels] = useState([])
    const [techs, setTechs] = useState([])
    const [teachers, setTeachers] = useState([])

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    const navigate = useNavigate()

    const dateSplit = (value) => {
        const splitDate = value.split('-')
        setStartDate(splitDate[0])
        setEndDate(splitDate[1])

        updateParams('StartDate', startDate)
        updateParams('EndDate', endDate)
    }

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

  return (
    <div className='bg-gray-50 rounded-3xl w-80 p-5 md:flex flex-col gap-5 font-semibold hidden' style={{height: '620px'}}>

    <div className='flex flex-col gap-6'>
    <div className='flex items-center flex-row-reverse gap-2'>
        <Search01Icon />
        <span className='text-base font-semibold'> جست‌جو دوره </span>
    </div>
    <div className='relative flex flex-col gap-3'>

    <Formik
        initialValues={{Query: ''}}
        onSubmit={(value) => updateParams('Query', value.Query)}
    >
           
        <Form>
            <Field type='search' name='Query' className='w-full h-10 rounded-xl bg-gray-100 text-gray-700 px-2 text-xs outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
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
        <Select placeholder='انتخاب کنید' onChange={(e) => {techCounting(e)}} className='w-full my-2 rounded-xl text-gray-100' dir='rtl' selectionMode="multiple">
            
            {techs.map((item, index) => {

                return <SelectItem onClick={() => updateParams('ListTech', item.id)} id={item.id}> {item.techName} </SelectItem>

            })}

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

            {levels.map((item,index) => {
                return <SelectItem onClick={() => updateParams('courseLevelId', item.id)}> {item.levelName} </SelectItem>
            })}
            <SelectItem onClick={() => updateParams('courseLevelId', "")}> هیچ کدام </SelectItem>

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
            {teachers.map((item, index) => {
                return <SelectItem onClick={() => updateParams('TeacherId', item.teacherId)}> {item.fullName ? item.fullName.replace('-', ' ') : "نامشخص"} </SelectItem>
            })}
            <SelectItem onClick={() => updateParams('TeacherId', "")}> هیچ کدام </SelectItem>
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
    <input onChange={(e) => {handlePriceFrom(e.target.value), updateParams('CostDown', e.target.value)}} type='range' defaultValue={0} min='0' max='100000000' step='10000' className='border-none cursor-pointer bg-gray-200 w-36 h-2 rounded-full appearance-none thump rotate-180' />
    <input onChange={(e) => {handlePriceTo(e.target.value), updateParams('CostUp', e.target.value)}} type='range' defaultValue={100000000} min='0' max='100000000' step='10000' className='border-none cursor-pointer bg-gray-200 w-36 h-2 rounded-full appearance-none thump rotate-180' />
    </div>

    <div className='flex flex-col'>
        <div className='flex items-center flex-row-reverse gap-2'>
            <Calendar02Icon />
            <span className='text-base font-semibold'> تاریخ برگزاری </span>
        </div>
        <div className='relative flex flex-col gap-3'>
            <Input placeholder='1403/5/20 - 1403/6/20' onChange={(e) => dateSplit(e.target.value)} className='w-full my-2 rounded-xl' dir='ltr'></Input>
        </div>
    </div>

    </div>
  )
}

export default FilterCourse
