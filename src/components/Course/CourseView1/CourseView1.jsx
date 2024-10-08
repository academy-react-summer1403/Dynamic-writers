import React, { useEffect, useState } from 'react'
import SortView1 from './SortView1'
import CoursesView1 from './CoursesView1'
import { getCourseList } from '../../../core/services/api/cours'
import jMoment from 'moment-jalaali'
import { getItem, setItem } from '../../../core/services/common/storage'
import { Button, Pagination } from '@nextui-org/react'
import { getCourseCount } from '../../../core/services/api/courseCount'
import FilterCourse from '../FilterCourse/FilterCourse'
import { getTeacherList } from '../../../core/services/api/teachers'
import { useNavigate, useSearchParams } from 'react-router-dom'
import CoursesView2 from './CoursesView2'
import FilterCourseRes from '../FilterCourse/FilterCourseRes'
import { Search01Icon } from 'hugeicons-react'
import SearchRes from '../FilterCourse/SearchRes'

const CourseView1 = () => {

  const [courses, setCourses] = useState([])
  const [searchData, setSearchData] = useState()
  const [totalCount, setTotalCount] = useState()
  const [teachers, setTeachers] = useState()

  const [filterRes, setFilterRes] = useState(false)
  const [searchDiv, setSearchDiv] = useState(false)
  
  const initialView = getItem('view') || "view1"
  const [view, setView] = useState(initialView)

  const [windowWidth , setWindowWidth] = useState(window.innerWidth)

  const [searchParams, setSearchParams] = useSearchParams()
  const pageNumber = searchParams.get('PageNumber') || 1
  const Query = searchParams.get('Query') || null
  const RowsOfPage = searchParams.get('RowsOfPage')

  useEffect(() => {
    if(pageNumber || Query || RowsOfPage) {
      getCourses()
    }
  }, [pageNumber, Query, RowsOfPage])

  const handleResize = () => {
    setWindowWidth(windowWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if(windowWidth < 768) {
      navigate('?RowsOfPage=3')
    }
  }, [windowWidth])

  const navigate = useNavigate()

  const getCourses = async () => {

    const response = await getCourseList(pageNumber, Query, RowsOfPage)
    const res = await getCourseCount()

    setTotalCount(parseInt(res / 9));
    setCourses(response.courseFilterDtos)

  }

  const getTeachers = async () => {

    const resT = await getTeacherList()

    setTeachers(resT)

  }

  const closeFilter = () => {

    setFilterRes(false)
  }

  useEffect(() => {
    getCourses()
    getTeachers()

    setView('view1')
  }, [])

  useEffect(() => {
    setItem('view', view)
  }, [view])

  const changeView = (viewO) => {
    setView(viewO)
  }
  

  return (
    <>
    {filterRes === true && <FilterCourseRes closeFilter={closeFilter} />}
    <div className='my-20 h-fit w-dvw iranSans font-semibold'>
      <div className='rounded-3xl mx-auto border-3 pl-3 h-fit' style={{width: '94%'}}>

        <SortView1 
          changeView={changeView}
        />

        <div className='flex justify-between w-full items-center'>
          {windowWidth < 768 && <Button className='bg-blue-500 rounded-full px-3 h-9 text-white text-sm font-semibold my-4' onClick={() => {setFilterRes(true)}}> ترتیب و فیلتر </Button>}
          {windowWidth < 768 && searchDiv === false && <Search01Icon className='size- cursor-pointer mx-3' onClick={() => {setSearchDiv(true)}} />}
          {searchDiv === true && <SearchRes />}
        </div>

        <div className='flex'>

          <FilterCourse 
            teachers={teachers}
            pageNumber={pageNumber}
          />

          <div className='md:w-9/12 w-full overflow-hidden flex flex-wrap gap-6 flex-row-reverse py-5 justify-center md:justify-normal' style={windowWidth < 768 ? {height: '1600px'} : {height: 'fit-content'}}>

            {view === 'view1' && courses.map((item,index) => {
            
              return <CoursesView1
                key={index}
                id={item.courseId}
                title={item.title}
                describe={item.describe}
                date={(jMoment(item.lastUpdate).format('jYYYY / jM / jD'))}
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

            {view === 'view2' && courses.map((item,index) => {
            
            return <CoursesView2
              key={index}
              id={item.courseId}
              title={item.title}
              describe={item.describe}
              date={(jMoment(item.lastUpdate).format('jYYYY / jM / jD'))}
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

        <div className='w-full flex justify-center md:justify-end md:px-3 py-10'>
          <Pagination className='min-w-80 w-fit' onChange={(PageNumber) => navigate(`?PageNumber=${PageNumber}`)} isCompact showControls total={totalCount} initialPage={1} />
        </div>
          
      </div>
    </div>
    </>
  )
}

export default CourseView1
