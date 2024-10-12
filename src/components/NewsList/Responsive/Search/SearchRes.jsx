import { Field, Form, Formik } from 'formik'
import { Cancel01Icon, Search01Icon } from 'hugeicons-react'
import React from 'react'

const SearchRes = ({ closeSearch, updateParams }) => {
  return (
    <div className='flex gap-1 items-center flex-row-reverse'>

        <Cancel01Icon className='size-5 cursor-pointer' onClick={closeSearch} />

        <div className='relative flex'>

            <Formik
                initialValues={{Query: ''}}
                onSubmit={(value) => updateParams('Query', value.Query)}
            >
                    
                <Form>

                    <Field type='search' name='Query' className='font-bold text-xs h-9 w-40 rounded-xl bg-gray-200 text-gray-700 px-2 outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
                    <button type='submit' className='text-white bg-blue-500 absolute rounded-xl h-9 w-10 left-0 top-0 text-center flex justify-center items-center hover:bg-blue-400'> <Search01Icon className='size-5' /> </button>
                </Form>
            </Formik>

        </div>

    </div>
  )
}

export default SearchRes
