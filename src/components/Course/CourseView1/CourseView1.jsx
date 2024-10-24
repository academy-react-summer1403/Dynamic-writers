import React, { useEffect, useState } from 'react'
import SortView1 from './SortView1'
import CoursesView1 from './CoursesView1'
import { getCourseList } from '../../../core/services/api/cours'
import jMoment from 'moment-jalaali'
import { getItem, setItem } from '../../../core/services/common/storage'
import { Button, Card, Pagination, Skeleton } from '@nextui-org/react'
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

  const [costTop , setCostTop] = useState()

  const [searchParams] = useSearchParams()

  const pageNumber = searchParams.get('PageNumber') || 1
  const query = searchParams.get('Query') || {}
  const rowsPage = searchParams.get('RowsOfPage') || 9
  const idLevel = searchParams.get('courseLevelId') || ""
  const idTeacher = searchParams.get('TeacherId') || ""
  const costUp = searchParams.get('CostUp') || 1000000000
  const costDown = searchParams.get('CostDown') || 0
  const techList = searchParams.get('ListTech') || 0
  const techCount = searchParams.get('TechCount') || 0
  const sortingCol = searchParams.get('SortingCol') || 'Active'
  const sortType = searchParams.get('SortType') || 'DESC'
  const startDate = searchParams.get('StartDate') || ''
  const endDate = searchParams.get('EndDate') || ''

  useEffect(() => {
    if(pageNumber || idLevel || query || rowsPage || idTeacher || costUp || costDown || techList ||
      techCount || sortingCol || sortType || startDate || endDate) {
      getCourses()
    }
  }, [pageNumber, idLevel, query, rowsPage, idTeacher, costUp , costDown, techCount, techList, sortType, sortingCol, startDate, endDate])

  useEffect(() => {
    if(window.innerWidth < 768) {
      updateParams('RowsOfPage', 3)
    }
    else if(window.innerWidth > 768) {
      updateParams('RowsOfPage', 9)
    }
  }, [window.innerWidth])

  const navigate = useNavigate()

  const getCourses = async () => {

    const response = await getCourseList(pageNumber, query, rowsPage, idLevel, idTeacher, 
    costUp , costDown, techCount, techList, sortType, sortingCol, startDate, endDate)

    setTotalCount(parseInt(response.totalCount / rowsPage));
    setCourses(response.courseFilterDtos)
    if(courses.length > 0) {
      setIsLoaded(true)
    }
  }

  const updateParams = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set(key, value)
    navigate(`?${newParams.toString()}`)
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

  const [isLoaded, setIsLoaded] = useState(false);
  

  return (
    <>
    {filterRes === true && <FilterCourseRes closeFilter={closeFilter} updateParams={updateParams}
            getCourses={getCourses} />}
    <div className='my-20 h-fit w-dvw iranSans font-semibold'>
      <div className='rounded-3xl mx-auto border-3 dark:border-gray-600 pl-3 h-fit' style={{width: '94%'}}>

        <SortView1 
          changeView={changeView}
          updateParams={updateParams}
        />

        <div className='flex justify-between w-full items-center px-2'>
          <Button className='bg-blue-500 rounded-full px-3 h-9 text-white text-sm font-semibold my-4 lg:hidden block' onClick={() => {setFilterRes(true)}}> ترتیب و فیلتر </Button>
          {!searchDiv && searchDiv === false && <Search01Icon className='size-6 cursor-pointer mx-3 lg:hidden block' onClick={() => {setSearchDiv(true)}} />}
          {searchDiv && <SearchRes updateParams={updateParams} />}
        </div>

        <div className='flex'>

          <FilterCourse 
            updateParams={updateParams}
            getCourses={getCourses}
          />

          {view === 'view1' && <Card classNames={{base: 'bg-transparent shadow-none'}} className='bg-transparent px-8 w-full overflow-hidden flex flex-wrap gap-6 flex-row-reverse py-5 justify-center lg:justify-normal' style={window.innerWidth < 1024 ? {height: '1600px'} : {height: 'fit-content'}}>

            {courses.map((item,index) => {
            
              return <CoursesView1
                key={index}
                id={item.courseId}
                title={item.title}
                describe={item.describe}
                date={(jMoment(item.lastUpdate).locale('fa').format('jD jMMMM jYYYY'))}
                levelName={item.levelName}
                dissLikeCount={item.dissLikeCount}
                likeCount={item.likeCount}
                teacherName={item.teacherName}
                currentRegistrants={item.currentRegistrants}
                technologyList={(item.technologyList)}
                tumbImageAddress={item.tumbImageAddress}
                cost={(parseInt(item.cost).toLocaleString('en-US'))}
                statusName={item.statusName}
                isLoaded={isLoaded}
              />
              
            })}

            </Card>
          }

          {view === 'view2' && <Card classNames={{base: 'bg-transparent shadow-none'}} className='bg-transparent items-center lg:items-stretch w-full overflow-hidden flex gap-6 flex-col px-5 lg:py-5'>

            {courses.map((item,index) => {
            
            return <CoursesView2
              key={index}
              id={item.courseId}
              title={item.title}
              describe={item.describe}
              date={(jMoment(item.lastUpdate).locale('fa').format('jD jMMMM jYYYY'))}
              levelName={item.levelName}
              dissLikeCount={item.dissLikeCount}
              likeCount={item.likeCount}
              teacherName={item.teacherName}
              currentRegistrants={item.currentRegistrants}
              technologyList={(item.technologyList)}
              tumbImageAddress={item.tumbImageAddress}
              cost={(parseInt(item.cost).toLocaleString('en-US'))}
              statusName={item.statusName}
              isLoaded={isLoaded}
            />
            
          })}

          {window.innerWidth < 1024 && courses.map((item,index) => {

            return <CoursesView1
              key={index}
              id={item.courseId}
              title={item.title}
              describe={item.describe}
              date={(jMoment(item.lastUpdate).locale('fa').format('jD jMMMM jYYYY'))}
              levelName={item.levelName}
              dissLikeCount={item.dissLikeCount}
              likeCount={item.likeCount}
              teacherName={item.teacherName}
              currentRegistrants={item.currentRegistrants}
              technologyList={(item.technologyList)}
              tumbImageAddress={item.tumbImageAddress}
              cost={(parseInt(item.cost).toLocaleString('en-US'))}
              statusName={item.statusName}
              isLoaded={isLoaded}
            />

            })}

          </Card>

          }

        </div>

        <div className='w-full flex justify-center md:justify-end md:px-10 py-5'>
          <Pagination className='min-w-80 w-fit z-0 float-start' onChange={(pageNumber) => updateParams('PageNumber', pageNumber)} isCompact showControls total={totalCount} initialPage={1} />
        </div>
          
      </div>
    </div>
    </>
  )
}

export default CourseView1
