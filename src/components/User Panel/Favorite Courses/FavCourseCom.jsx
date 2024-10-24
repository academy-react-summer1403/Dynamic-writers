import { Field, Formik, Form } from 'formik'
import { Search01Icon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import { getFavCourse } from '../../../core/services/api/Panel/FavCourse/getFavoriteCourse';
import FavCourseTable from './Table/FavCourseTable';

const FavCourseCom = () => {
  
  const [myCourse, setMyCourse] = useState([])
  const [searchCourse, setSearchCourse] = useState('')
  const [filteredData, setFilteredData] = useState([])    

  const [isLoading, setIsLoading] = useState(true)

  const getCourse = async () => {

      const response = await getFavCourse()
      setMyCourse(response.favoriteCourseDto)
      setFilteredData(response.favoriteCourseDto)

      if(response.favoriteCourseDto) {
        setIsLoading(false)
      }
    }

    useEffect(() => {
      getCourse()
    }, [])

    useEffect(() => {
      const results = myCourse.filter(item => 
          item.courseTitle.toLowerCase().includes(searchCourse.toLowerCase())
      )
      setFilteredData(results)
    }, [searchCourse])

    useEffect(() => {
      if(myCourse.length > 0) {
        setIsLoading(false)
      }
    }, [myCourse])

  
  return (
    <div className='w-full flex p-2 flex-col gap-3 rounded-2xl h-fit' dir='rtl'>
        <div className='flex flex-col w-full h-fit gap-10'>
        <h2 className='text-[28px] font-bold mt-8'> علاقه مندی دوره </h2>
        <div className='flex gap-6 w-full h-fit'>
            <div className='flex flex-col gap-4 w-[289px]'>
                <div className='flex items-center gap-2'>
                    <Search01Icon />
                    <span className='text-base font-semibold'> جست‌جو دوره </span>
                </div>
                <div className='relative flex flex-col gap-3'>
                <Formik
                    initialValues={{Query: ''}}
                    onSubmit={(value) => setSearchCourse(value.Query)}
                >
                        
                    <Form>
                        <Field type='search' name='Query' className='w-[289px] h-10 rounded-xl dark:bg-slate-600 dark:text-white bg-gray-200 px-2 text-sm outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
                        <button type='submit' className='text-white bg-blue-500 absolute rounded-xl h-10 w-10 left-0 top-0 text-center flex justify-center items-center hover:bg-blue-400'> <Search01Icon className='size-5' /> </button>
                    </Form>
                </Formik>
                </div>
            </div>
        </div>
      </div>
      <FavCourseTable
        myCourse={filteredData}
        isLoading={isLoading}
      />
    </div>
  )
}

export default FavCourseCom
