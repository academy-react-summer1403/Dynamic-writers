import React from 'react'
import FilterCourse1 from './FilterCourse1'
import SortView1 from './SortView1'

const CourseView1 = () => {
  return (
    <div className='my-10 h-fit w-dvw p-5'>
      <div className='rounded-3xl w-11/12 mx-auto border-3 px-3' style={{height: '1800px'}}>

        <SortView1 />

        <div className='flex'>

          <FilterCourse1 />

          <div className='w-9/12 h-fit border'>



          </div>

        </div>
          
      </div>
    </div>
  )
}

export default CourseView1
