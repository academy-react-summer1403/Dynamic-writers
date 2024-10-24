import React, { Fragment,useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import GetCourseById from '../../core/services/api/Course/GetCourseById'
import Loading from '../../core/services/common/Loading/loading'
import RightDiv from '../../components/CourseDetail/RightDiv'
import LeftDiv from '../../components/CourseDetail/LeftDiv'
import CourseReserve from '../CourseReserve/CourseReserve'
import AllCourse from '../../core/services/api/Course/AllCourse'
import CoursesView1 from '../Course/CourseView1/CoursesView1'
import { AddReserve } from '../../core/services/api/Reserve/addReserve'
import { toast, ToastContainer } from 'react-toastify'
import { Card } from '@nextui-org/react'
import jMoment from 'jalali-moment'

const Course = () => {
  const [Course, setCourse] = useState([])
  const [allCourse, setAllCourse] = useState([])
  const[tecknologyList,setTecknologyList]=useState('')
  const[number,setNumber]=useState(0)

  const notifyError = (message) => {
    toast.dismiss()

    toast.error(message)
  }

  const [isLoaded, setIsLoaded] = useState(false)

  const {id}=useParams();
  const[loading,setLoading]=useState(false)
  const[Flag,setFlag]=useState(false)
  const[isFlag,setIsFlag]=useState(false)

  const GetCourse=async(id)=>{
    let course =await GetCourseById(id)
    let Courses=await AllCourse()
    const point=Courses.filter((value)=>{return value.courseId==id})
    setTecknologyList(point.technologyList)

    setAllCourse(Courses)
    setLoading(true)
    setCourse(course)
  }
  useEffect(() => {
    GetCourse(id)
  }, [])

  const addReserve = async (id) => {
    const response = await AddReserve(id)
    if(response.state === true){
      setIsFlag(true)
    }
    else if(response.status === 422){
      notifyError(' این کورس یکبار رزو شده و نمیتواند دوباره رزرو شود.')
    }
  }

  useEffect(() => {
    if(allCourse.length > 0) {
      setIsLoaded(true)
    }
  }, [Course])

  useEffect(() => {
    if(Flag === true){
      addReserve(id)
    }
  }, 
  [Flag])

  if(loading==false){
    return <Loading/>
  }
  return (
    <Fragment>
        {isFlag && <div className='absolute top-0 w-[100%] h-[100%] z-30 flex justify-center  bg-opacity-80 bg-[#000000] transition-opacity duration-300 ease-in-out'><CourseReserve Flags={setFlag}/></div>}
        <div className='flex w-[100%] justify-evenly p-5 pt-20 gap-5 flex-row-reverse  max-md:flex-col max-lg:flex-col items-center lg:items-start max-xl:justify-evenly xl:items-start  max-2xl:justify-evenly'>
        <RightDiv Course={Course} Flags={setFlag}/>
        <LeftDiv Course={Course}/>
        </div>
        <div className='w-[100%]'>
          <div className='w-[95%] text-[48px] font-[800] text-right p-5'>دوره های دیگر</div>
          <Card classNames={{base: 'shadow-none'}} className='w-[95%] bg-transparent p-6 flex flex-row items-center justify-end gap-5 flex-wrap'>
          {allCourse.slice(0,4).map((value,index)=>{
              return <CoursesView1 key={index} isLoaded={isLoaded} levelName={value.levelName} id={value.courseId} title={value.title} describe={value.describe} dissLikeCount={value.dissLikeCount} likeCount={value.likeCount} cost={(value.cost).toLocaleString('en-US')} teacherName={value.teacherName} date={jMoment(value.lastUpdate).locale('fa').format('jD jMMMM jYYYY')} currentRegistrants={value.currentRegistrants} technologyList={value.technologyList} tumbImageAddress={value.tumbImageAddress} statusName={value.statusName}/>
          })}
          </Card>
        </div>
        <ToastContainer />
    </Fragment>
    
    
  )
}

export {Course}