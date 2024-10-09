import { Input, Select, SelectItem } from '@nextui-org/react'
import { Field, Formik } from 'formik'
import { CellsIcon, Search01Icon } from 'hugeicons-react'
import React from 'react'
import { Form } from 'react-router-dom'
import { DatePicker } from "zaman"

const FilterNews = ({ updateParams, partCount }) => {
  return (
    <div className='bg-gray-50 md:flex flex-col gap-6 p-2.5 rounded-3xl w-80 h-80 m-2 hidden' dir='rtl'>
        <div className='flex flex-col gap-2.5 w-full'>
            <div className='flex items-center gap-2'>
            <Search01Icon />
            <span className='text-base font-semibold'> جست‌جو اخبار و مقالات </span>
            </div>
            <div className='relative flex flex-col gap-3'>

            <Formik
                initialValues={{Query: ''}}
                onSubmit={(value) => updateParams('Query', value)}
            >
                    
                <Form>
                    <Field type='search' name='Query' className='w-full font-bold text-sm h-10 rounded-xl bg-gray-100 text-gray-700 px-2 outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
                    <button type='submit' className='text-white bg-blue-500 absolute rounded-xl h-10 w-10 left-0 top-0 text-center flex justify-center items-center hover:bg-blue-400'> <Search01Icon className='size-5' /> </button>
                </Form>
            </Formik>

            </div>
        </div>
        <div className='flex flex-col gap-2 w-full items-start'>

            <div className='flex flex-row-reverse gap-2'> <span className='text-base font-bold'> دسته بندی </span> <CellsIcon /> </div>

            <Select placeholder='انتخاب کنید' className='w-full my-2 rounded-xl text-gray-100 font-semibold text-sm bg-gray-100' dir='rtl'>
                
                
                {partCount.map((item) => {

                    return <SelectItem> {item} </SelectItem>

                })}

            </Select>

        </div>

        <div className='flex flex-col gap-2 w-full items-start'>

            <div className='flex flex-row-reverse gap-2'> <span className='text-base font-bold'> تاریخ انتشار </span> <CellsIcon /> </div>

            {/* <DatePicker className='w-full bg-gray-200' onChange={(e) => console.log(e.from, e.to)} range /> */}

            <input onChange={(value) => updateParams('SortingCol' ,value.target.value)} placeholder='1403/5/20 - 1403/6/20' className='border-none outline-none w-full my-2 rounded-xl font-semibold text-sm bg-gray-100 p-2' dir='ltr' />

        </div>
    </div>
  )
}

export default FilterNews
