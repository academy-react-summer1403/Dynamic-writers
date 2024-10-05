import { Button, Input, Select } from '@nextui-org/react'
import { Calendar02Icon, CellsIcon, Layers01Icon, Money03Icon, Search01Icon, TeacherIcon } from 'hugeicons-react'
import React from 'react'

const FilterCourse1 = () => {
  return (
    <>

        <div className='bg-gray-100 rounded-3xl w-3/12 p-5 flex flex-col gap-5' style={{height: '600px'}}>

        <div className='flex flex-col'>
        <div className='flex items-center flex-row-reverse gap-2'>
            <Search01Icon />
            <span className='text-base font-semibold'> جست‌جو دوره </span>
        </div>
        <div className='relative flex flex-col gap-3'>
            <Input type='search' className=' w-full my-2 rounded-xl' placeholder='جستجو کنید...' dir='rtl'/>
            <Button className='text-white bg-blue-500 absolute left-0 top-1.5'> <Search01Icon /> </Button>
        </div>
        </div>

        <div className='flex flex-col'>
        <div className='flex items-center flex-row-reverse gap-2'>
            <CellsIcon />
            <span className='text-base font-semibold'> دسته بندی </span>
        </div>
        <div className='relative flex flex-col gap-3'>
            <Select placeholder='انتخاب کنید' className='w-full my-2 rounded-xl text-gray-100' dir='rtl'></Select>
        </div>
        </div>

        <div className='flex flex-col'>
        <div className='flex items-center flex-row-reverse gap-2'>
            <Layers01Icon />
            <span className='text-base font-semibold'> سطح اموزش </span>
        </div>
        <div className='relative flex flex-col gap-3'>
            <Select placeholder='انتخاب کنید' className='w-full my-2 rounded-xl text-gray-100' dir='rtl'></Select>
        </div>
        </div>

        <div className='flex flex-col'>
        <div className='flex items-center flex-row-reverse gap-2'>
            <TeacherIcon />
            <span className='text-base font-semibold'> اساتید </span>
        </div>
        <div className='relative flex flex-col gap-3'>
            <Select placeholder='انتخاب کنید' className='w-full my-2 rounded-xl text-gray-100' dir='rtl'></Select>
        </div>
        </div>

        <div className='flex flex-row-reverse items-center gap-3'>
        <span className='flex gap-2'> قیمت <Money03Icon /> </span>
        <div className='flex flex-row-reverse gap-10'>
            <div className='flex gap-1 flex-row-reverse'>
            <span className='text-gray-600'> از </span>
            <h2 className='font-semibold'> 10000 </h2>
            </div>
            <div className='flex gap-1 flex-row-reverse'>
            <span className='text-gray-600'> تا </span>
            <h2 className='font-semibold'> 1000000 </h2>
            </div>
        </div>
        </div>

        <div className='flex flex-row-reverse'>
        <input type='range' min='0' max='9999999' step='100000' className='border-none cursor-pointer bg-gray-200 w-40 h-2 rounded-full appearance-none thump' />
        <input type='range' className='border-none cursor-pointer bg-gray-200 w-36 h-2 rounded-full appearance-none thump' />
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

    </>
  )
}

export default FilterCourse1
