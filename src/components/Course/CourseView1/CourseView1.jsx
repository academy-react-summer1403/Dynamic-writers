import React, { useState } from 'react'
import FilterCourse1 from './FilterCourse1'
import SortView1 from './SortView1'
import CoursesView1 from './CoursesView1'
import { getCourseList } from '../../../core/services/api/cours'

const CourseView1 = () => {

  const [courses, setCourses] = useState([])

  const getCourses = async () => {

    const response = await getCourseList()

    setCourses(response)

    console.log(courses)

  }

  return (
    <div className='my-10 h-fit w-dvw p-5'>
      <div className='rounded-3xl w-11/12 mx-auto border-3 px-3' style={{height: '1800px'}}>

        <SortView1 />

        <div className='flex'>

          <FilterCourse1 />

          <div className='w-9/12 h-fit border'>

            {courses.map((item, index) => {

              return <CoursesView1
                id={item.id}
                
              />

            })} 

          </div>

        </div>
          
      </div>
    </div>
  )
}

export default CourseView1
