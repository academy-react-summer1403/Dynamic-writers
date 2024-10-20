import React, { useEffect, useState } from 'react'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { Formik, Form, Field } from 'formik'
import { Calendar02Icon, CellsIcon, Layers01Icon, Money03Icon, Search01Icon, TeacherIcon } from 'hugeicons-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getCourseLevels } from '../../../core/services/api/courseLevel'
import { getTechList } from '../../../core/services/api/tech'
import { getTeacherList } from '../../../core/services/api/teachers'
import jalaali, { toGregorian } from 'jalaali-js'

const convertJalaliToGregorian = (jalaliDate) => {

    const jalaaliDateShams = (jalaliDate.split('/'))
    const gregorianDate = toGregorian(parseInt(jalaaliDateShams[0]), parseInt(jalaaliDateShams[1]), parseInt(jalaaliDateShams[2]))
    return `${gregorianDate.gy}-${gregorianDate.gm}-${gregorianDate.gd}`
} 

const FilterCourse = ({ updateParams }) => {

    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(1000000000)
    const [levels, setLevels] = useState([])
    const [techs, setTechs] = useState([])
    const [teachers, setTeachers] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()

    const navigate = useNavigate()

    const [dateInput, setDateInput] = useState('');
    const [convertedDates, setConvertedDates] = useState({ startDate: '', endDate: '' });

    const handleChange = (e) => {
        setDateInput(e.target.value);
        console.log(dateInput)
    };

    const updateParamsDate = (value, value2) => {
        searchParams.set('StartDate', value)
        searchParams.set('EndDate', value2)
        setSearchParams(`${searchParams.toString()}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dates = dateInput.split(' - ');
        if (dates.length === 2) {
          const startDate = dates[0].trim();
          const endDate = dates[1].trim();
          const convertedStartDate = convertJalaliToGregorian(startDate);
          const convertedEndDate = convertJalaliToGregorian(endDate);
          setConvertedDates({ startDate: convertedStartDate, endDate: convertedEndDate });
          updateParamsDate(convertedDates.startDate, convertedDates.endDate)
        }
        else {
            updateParamsDate('', '')
        }
      }

    const handlePriceFrom = (value) => {
        setPriceFrom(value)
    }
    const handlePriceTo = (value) => {
        setPriceTo(value)
    }

    const updateParamsTechList = (key, value) => {

        let currentValues = searchParams.get(key) ? searchParams.get(key).split(',') : [];
        currentValues.push(value);
        currentValues = [...new Set(currentValues)];
        searchParams.set(key, currentValues.join(','));
        setSearchParams(searchParams);
      }

    const techCounting = (value) => {
        const techCount = (value.target.value).split(',').length
        updateParams('TechCount', techCount)

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
    <div className='bg-gray-50 rounded-3xl w-80 p-5 md:flex flex-col gap-5 font-semibold hidden dark:bg-slate-200 dark:text-black' style={{height: '620px'}}>

    <div className='flex flex-col gap-2'>
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
            <Field type='search' name='Query' className='w-full h-10 rounded-xl bg-gray-100 dark:bg-gray-800 dark:text-white text-gray-700 px-2 text-xs outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
            <button type='submit' className='text-white bg-blue-500 dark:bg-gray-500 absolute rounded-xl h-10 w-10 left-0 top-0 text-center flex justify-center items-center hover:bg-blue-400'> <Search01Icon className='size-5' /> </button>
        </Form>
    </Formik>

    </div>
    </div>

    <div className='flex flex-col gap-2'>
    <div className='flex items-center flex-row-reverse gap-2'>
        <CellsIcon />
        <span className='text-base font-semibold'> دسته بندی </span>
    </div>
    <div className='relative flex flex-col gap-3'>
        <Select placeholder='انتخاب کنید' onChange={(e) => {techCounting(e)}} className='w-full my-2 rounded-xl text-gray-100' dir='rtl' selectionMode="multiple">
            
            {techs.map((item, index) => {

                return <SelectItem key={index} onClick={() => updateParamsTechList('ListTech' ,item.id)} textValue={item.techName}> {item.techName} </SelectItem>

            })}

        </Select>
    </div>
    </div>

    <div className='flex flex-col gap-2'>
    <div className='flex items-center flex-row-reverse gap-2'>
        <Layers01Icon />
        <span className='text-base font-semibold'> سطح اموزش </span>
    </div>
    <div className='relative flex flex-col gap-3'>
        <Select placeholder='انتخاب کنید' className='w-full my-2 rounded-xl text-gray-100' dir='rtl'>

            {levels.map((item,index) => {
                return <SelectItem onClick={() => updateParams('courseLevelId', item.id)} textValue={item.levelName}> {item.levelName} </SelectItem>
            })}
            <SelectItem onClick={() => updateParams('courseLevelId', "")}> هیچ کدام </SelectItem>

        </Select>
    </div>
    </div>

    <div className='flex flex-col gap-2'>
    <div className='flex items-center flex-row-reverse gap-2'>
        <TeacherIcon />
        <span className='text-base font-semibold'> اساتید </span>
    </div>
    <div className='relative flex flex-col gap-3'>
        <Select placeholder='انتخاب کنید' className='w-full my-2 rounded-xl text-gray-100' dir='rtl'>
            {teachers.map((item, index) => {
                return <SelectItem onClick={() => updateParams('TeacherId', item.teacherId)} textValue={item.fullName}> {item.fullName ? item.fullName.replace('-', ' ') : "نامشخص"} </SelectItem>
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
    <input onChange={(e) => {handlePriceFrom(e.target.value), updateParams('CostDown', e.target.value)}} type='range' 
    defaultValue={0} min='0' max='100000000' step='100000' className='border-none cursor-pointer bg-gray-200 dark:bg-gray-700 w-36 h-2 rounded-full appearance-none thump rotate-180' />
    <input onChange={(e) => {handlePriceTo(e.target.value), updateParams('CostUp', e.target.value)}} type='range' 
    defaultValue={100000000} min='0' max='100000000' step='100000' className='border-none cursor-pointer bg-gray-200 dark:bg-gray-700 w-36 h-2 rounded-full appearance-none thump rotate-180' />
    </div>

    <div className='flex flex-col gap-2'>
        <div className='flex items-center flex-row-reverse gap-2'>
            <Calendar02Icon />
            <span className='text-base font-semibold'> تاریخ برگزاری </span>
        </div>
        <div className='flex flex-col gap-3'>
            <form className='relative items-center flex' onSubmit={handleSubmit}>
               <Input placeholder='1403/5/20 - 1403/6/20' format='YYYY-MM-DD' onChange={handleChange} className='w-full my-2 rounded-xl' dir='ltr' />
               <button type='submit' className='text-white bg-gray-500 absolute rounded-xl h-10 w-10 right-0 bottom-2 text-center flex justify-center items-center hover:bg-gray-600'> <Calendar02Icon className='size-5' /> </button>
            </form>
        </div>
    </div>

    </div>
  )
}

export default FilterCourse
