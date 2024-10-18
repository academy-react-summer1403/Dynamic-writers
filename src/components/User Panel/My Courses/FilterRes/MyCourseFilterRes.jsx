import { Field, Formik, Form } from 'formik'
import { Calendar02Icon, Cancel01Icon, Search01Icon } from 'hugeicons-react'
import React from 'react'
import { Button, Select, SelectItem } from '@nextui-org/react';

const MyCourseFilterRes = ({ setquery, filterClose }) => {
  return (
    <div className='z-[100] flex flex-col w-full h-fit border gap-5 bg-white fixed bottom-0 right-0 p-2'>
        <div className='border w-[50px] mt-1 cursor-pointer mx-auto'></div>
        <div className='flex w-full justify-between'>
            <h2 className='text-xl font-semibold'> فیلتر </h2>
            <Button onClick={() => filterClose(false)} className='text-red-500 border bg-white border-red-500 rounded-full'> بستن <Cancel01Icon className='size-6' /> </Button>
        </div>
        <div className='flex flex-col gap-6 w-full h-fit'>
            <div className='flex flex-col gap-4 w-full'>
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
                        <Field type='search' name='Query' className='w-full h-10 rounded-xl bg-gray-200 px-2 text-sm outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
                        <button type='submit' className='text-white bg-blue-500 absolute rounded-xl h-10 w-10 left-0 top-0 text-center flex justify-center items-center hover:bg-blue-400'> <Search01Icon className='size-5' /> </button>
                    </Form>
                </Formik>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <div className='flex items-center gap-4'>
                    <Calendar02Icon />
                    <span className='text-base font-semibold'> ترتیب </span>
                </div>
                <div className='relative gap-3 flex flex-col'>
                    <Select classNames={{trigger: 'bg-gray-200'}} placeholder='انتخاب کنید...'>
                        <SelectItem> ارزان ترین </SelectItem>
                        <SelectItem> پرداخت شده ها </SelectItem>
                        <SelectItem> جدید ترین </SelectItem>
                    </Select>
                </div>
            </div>
        </div>
  </div>
  )
}

export default MyCourseFilterRes
