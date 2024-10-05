import React, { useEffect, useState } from 'react'
import FilterCourse1 from './FilterCourse1'
import SortView1 from './SortView1'
import CoursesView1 from './CoursesView1'
import { getCourseList } from '../../../core/services/api/cours'
import moment from 'moment'
import jMoment from 'moment-jalaali'
import { ArrowLeft01Icon, ArrowRight01Icon } from 'hugeicons-react'

const CourseView1 = () => {

  const [courses, setCourses] = useState([])

  const getCourses = async () => {

    const response = await getCourseList()

    setCourses(response)

    console.log(courses)

  }

  useEffect(() => {
    getCourses()
  }, [])

  return (
    <div className='my-10 h-fit w-dvw p-5'>
      <div className='rounded-3xl w-11/12 mx-auto border-3 px-3' style={{height: '1800px'}}>

        <SortView1 />

        <div className='flex'>

          <FilterCourse1 />

          <div className='w-9/12 h-fit flex flex-wrap gap-5 flex-row-reverse p-5'>

            {courses.map((item, index) => {

              return <CoursesView1
                key={index}
                id={item.courseId}
                title={item.title}
                description={item.describe}
                date={(jMoment(item.lastUpdate).format('jYYYY/jM/jD'))}
                levelName={item.levelName}
                dissLikeCount={item.dissLikeCount}
                likeCount={item.likeCount}
                teacherName={item.teacherName}
                courseRate={item.courseRate}
                cost={(parseInt(item.cost).toLocaleString('en-US'))}
              />

            })} 

            <div className='flex w-3/12 border justify-between bg-gray-100 rounded-xl'>

              <div className='group h-8 bg-gray-100 text-center cursor-pointer flex items-center'> <ArrowLeft01Icon className='text-gray-600 group-active:text-blue-500' /> </div>
              <div className='overflow-hidden w-7/12 flex relative'>
                <div className='group float-right w-40 text-nowrap relative p-1 rounded-md'>
                  <input type='radio' id='page1' name='pages' className='inputPages' checked/>
                  <label htmlFor='page1' className='labelPages font-semibold text-sm'> 1 </label>
                  <input type='radio' id='page2' name='pages' className='inputPages'/>
                  <label htmlFor='page2' className='labelPages font-semibold text-sm'> 2 </label>
                  <input type='radio' id='page3' name='pages' className='inputPages '/>
                  <label htmlFor='page3' className='labelPages font-semibold text-sm'> 3 </label>
                  <input type='radio' id='page4' name='pages' className='inputPages'/>
                  <label htmlFor='page4' className='labelPages font-semibold text-sm'> 4 </label>
                  <input type='radio' id='page5' name='pages' className='inputPages'/>
                  <label htmlFor='page5' className='labelPages font-semibold text-sm'> 5 </label>
                  <input type='radio' id='page6' name='pages' className='inputPages'/>
                  <label htmlFor='page6' className='labelPages font-semibold text-sm'> 6 </label>
                  <input type='radio' id='page7' name='pages' className='inputPages'/>
                  <label htmlFor='page7' className='labelPages font-semibold text-sm'> 7 </label>
                  <input type='radio' id='page8' name='pages' className='inputPages'/>
                  <label htmlFor='page8' className='labelPages font-semibold text-sm'> 8 </label>
                </div>
              </div>
              <div className='group h-8 text-center cursor-pointer flex items-center'> <ArrowRight01Icon className='text-gray-600 group-active:text-blue-500' /> </div>

            </div>

          </div>

        </div>
          
      </div>
    </div>
  )
}

export default CourseView1
