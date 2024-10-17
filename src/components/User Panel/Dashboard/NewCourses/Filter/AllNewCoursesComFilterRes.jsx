import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { Field, Form, Formik } from 'formik'
import { Calendar02Icon, Cancel01Icon, Money03Icon, Search01Icon, TeacherIcon } from 'hugeicons-react'
import React from 'react'

const AllNewCoursesComFilterRes = ({ teachers, setquery, setTeacher, handleChange, handleSubmit, closeFilter}) => {
  return (
    <div className='w-full bg-white z-50 items-center rounded-t-3xl shadow-2xl p-5 h-fit my-4 gap-6 flex bottom-0 right-0 flex-col fixed '>

    <div className='flex justify-between w-full'>
        <h2> فیلتر </h2>
        <Button onClick={closeFilter} className='rounded-full text-red-500 flex items-center bg-white border-red-500 border'> بستن <Cancel01Icon /> </Button>
    </div>

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
                  <Field type='search' name='Query' className='w-full h-10 rounded-xl bg-gray-100 text-gray-700 px-2 text-xs outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
                  <button type='submit' className='text-white bg-blue-500 absolute rounded-xl h-10 w-10 left-0 top-0 text-center flex justify-center items-center hover:bg-blue-400'> <Search01Icon className='size-5' /> </button>
              </Form>
          </Formik>
        </div>
    </div>

    <div className='flex flex-col gap-2 w-full'>
        <div className='flex items-center gap-4'>
            <Calendar02Icon />
            <span className='text-base font-semibold'> تاریخ برگزاری </span>
        </div>
        <div className='relative gap-3 flex flex-col'>
        <form className='relative items-center flex' onSubmit={handleSubmit}>
           <Input placeholder='1403/5/20 - 1403/6/20' format='YYYY-MM-DD' onChange={handleChange} className='w-full my-2 rounded-xl' dir='ltr' />
           <button type='submit' className='text-white bg-gray-500 absolute rounded-xl h-10 w-10 right-0 bottom-2 text-center flex justify-center items-center hover:bg-gray-600'> <Calendar02Icon className='size-5' /> </button>
        </form>
        </div>
    </div>

    <div className='flex flex-col gap-2 w-full'>
        <div className='flex items-center gap-4'>
            <TeacherIcon />
            <span className='text-base font-semibold'> اساتید </span>
        </div>
        <div className='relative flex flex-col gap-3'>
            <Select placeholder='انتخاب کنید' className='w-full my-2 rounded-xl text-gray-100' dir='rtl'>
              {teachers.map((item, index) => {
                  return <SelectItem onClick={() => setTeacher(item.teacherId)} textValue={item.fullName}> {item.fullName ? item.fullName.replace('-', ' ') : "نامشخص"} </SelectItem>
              })}
              <SelectItem onClick={() => setTeacher('')}> هیچ کدام </SelectItem>
            </Select>
        </div>
    </div>

  </div>
  )
}

export default AllNewCoursesComFilterRes
