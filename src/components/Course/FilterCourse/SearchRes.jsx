import { Field, Formik } from 'formik'
import { Search01Icon } from 'hugeicons-react'
import React from 'react'
import { Form } from 'react-router-dom'

const SearchRes = () => {
  return (
    <div>
        <div className='relative flex flex-col gap-3'>

        <Formik
            initialValues={{search: ''}}
            onSubmit={(value) => navigate(`?Query=${value.search}`)}
        >
            
            <Form>
                <Field type='search' name='search' className='w-full h-8 rounded-xl bg-gray-200 text-gray-700 px-2 text-xs outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
                <button type='submit' className='text-white bg-blue-500 absolute rounded-xl h-8 w-10 left-0 top-0 text-center flex justify-center items-center hover:bg-blue-400'> <Search01Icon className='size-5' /> </button>
            </Form>
        </Formik>
        </div>
    </div>
  )
}

export default SearchRes
