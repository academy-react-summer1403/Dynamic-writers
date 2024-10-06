import React, { useEffect, useState } from 'react'
import SortView1 from './SortView1'
import CoursesView1 from './CoursesView1'
import { getCourseList } from '../../../core/services/api/cours'
import jMoment from 'moment-jalaali'
import { getItem, setItem } from '../../../core/services/common/storage'
import { Pagination } from '@nextui-org/react'
import { getCourseCount } from '../../../core/services/api/courseCount'
import FilterCourse from '../FilterCourse/FilterCourse'
import { getTeacherList } from '../../../core/services/api/teachers'
import { useNavigate } from 'react-router-dom'

const CourseView1 = () => {

  const [courses, setCourses] = useState([])
  const [searchData, setSearchData] = useState()
  const [totalCount, setTotalCount] = useState()
  const [teachers, setTeachers] = useState()

  const navigate = useNavigate()

  const getCourses = async () => {

    const response = await getCourseList()
    // console.log(response.courseFilterDtos)
    const res = await getCourseCount()

    setItem('totalCount', res)
    setTotalCount(parseInt(getItem('totalCount') / 9));
    setCourses(response.courseFilterDtos)

  }

  const getTeachers = async () => {

    const resT = await getTeacherList()

    setTeachers(resT)

  }
  

  useEffect(() => {
    getCourses()
    getTeachers()
  }, [])

  return (
    <div className='my-20 h-fit w-dvw iranSans font-semibold'>
      <div className='rounded-3xl mx-auto border-3 px-3 h-fit' style={{width: '94%'}}>

        <SortView1 />

        <div className='flex'>

          <FilterCourse 
            teachers={teachers}
          />

          <div className='w-9/12 h-fit flex flex-wrap gap-6 flex-row-reverse py-5'>

            {courses.map((item, index) => {

              return <CoursesView1
                key={index}
                id={item.courseId}
                title={item.title}
                describe={item.describe}
                date={(jMoment(item.lastUpdate).format('jYYYY/jM/jD'))}
                levelName={item.levelName}
                dissLikeCount={item.dissLikeCount}
                likeCount={item.likeCount}
                teacherName={item.teacherName}
                currentRegistrants={item.currentRegistrants}
                technologyList={(item.technologyList)}
                tumbImageAddress={item.tumbImageAddress}
                cost={(parseInt(item.cost).toLocaleString('en-US'))}
                statusName={item.statusName}
              />

            })}

          </div>

        </div>

        <div className='w-full flex justify-end px-8 py-10'>
          <Pagination onChange={(PageNumber) => navigate(`?PageNumber=${PageNumber}`)} isCompact showControls total={totalCount} initialPage={1} />
        </div>
          
      </div>
    </div>
  )
}

export default CourseView1
