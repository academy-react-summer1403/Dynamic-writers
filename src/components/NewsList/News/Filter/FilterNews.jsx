import { Input, Select, SelectItem } from '@nextui-org/react'
import { Field, Formik } from 'formik'
import { CellsIcon, Search01Icon } from 'hugeicons-react'
import React from 'react'
import { Form } from 'react-router-dom'

const FilterNews = ({ updateParams, partCount }) => {
  return (
    <div className='bg-gray-50 xl:flex flex-col gap-6 p-2.5 rounded-3xl w-80 h-32 m-2 hidden dark:text-white dark:bg-slate-900' dir='rtl'>
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
                    <Field type='search' name='Query' className='w-full font-bold text-sm h-10 rounded-xl dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-700 px-2 outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
                    <button type='submit' className='text-white bg-blue-500 absolute rounded-xl h-10 w-10 left-0 top-0 text-center flex justify-center items-center hover:bg-blue-400'> <Search01Icon className='size-5' /> </button>
                </Form>
            </Formik>

            </div>
        </div>
    </div>
  )
}

export default FilterNews
