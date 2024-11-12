import { ArrowLeft01Icon, Calendar03Icon, Clock01Icon, PencilEdit01Icon, WifiError01Icon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import { getProfileInfo } from '../../../core/services/api/Panel/GetProfile/getProfileInfo'
import CurrentTime from './Time/CurrentTime'
import CurrentShamsiDate from './Time/CurrentShamsiDate'
import { Link, NavLink } from 'react-router-dom'
import TableDashboard from './Tabel/TableDashboard'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import MyComment from './Comments/Comment/MyComment'
import { getMyCommentsCourse } from '../../../core/services/api/MyComments/getMyCommentCourse'
import { getMyCommentsNew } from '../../../core/services/api/MyComments/getMyCommentsNew'
import CommentModal from '../../Comment&Reply/CommentModal'
import { useDisclosure } from '@nextui-org/react'
import MyCommentModal from './Comments/MyCommentModal'
import Loading from '../../../core/services/common/Loading/loading'
import { motion } from 'framer-motion'

const Dashboard = () => {

  const [profileInfo, setProfileInfo] = useState([])
  const [commentsCourse, setCommentsCourse] = useState([])
  const [commentsNew, setCommentsNew] = useState([])

  const [hello, setHello] = useState('')

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(intervalId);

  }, []);

  const hours = time.getHours().toString().padStart(2, "0");

  useEffect(() => {
    if(hours >= 6) {
      setHello(' صبح بخیر ')
    }
    if(hours >= 12) {
      setHello(' ظهر بخیر ')
    }
    if(hours >= 15) {
      setHello('بعد از ظهرت بخیر ')
    }
    if(hours >= 19) {
      setHello(' شب بخیر ')
    }
  }, [])

  const getProfile = async () => {

    const response = await getProfileInfo()
    setProfileInfo(response)
  }

  const getCommentsCourse = async () => {

    const response = await getMyCommentsCourse()
    setCommentsCourse(response.myCommentsDtos)
  }

  const getCommentsNew = async () => {

    const response = await getMyCommentsNew()
    setCommentsNew(response.myNewsCommetDtos)
  }

  useEffect(() => {
    getProfile()
    getCommentsCourse()
    getCommentsNew()
  }, [])

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className='flex p-2 flex-col gap-3 rounded-2xl h-full' dir='rtl'>
    <div className='h-full w-full flex flex-col gap-5 iranSans'>
      <div className='flex-col md:flex-row flex w-full h-full' dir='rtl'>
        <div className='grow items-center py-5'>
          <h2 className='font-bold text-2xl'> سلام , {hello} {profileInfo.fName} 😍 </h2>
        </div>
        <div className='md:grow flex md:justify-start justify-between grow-0 md:gap-24 items-center'>
          <div className='flex gap-4'>
            <div className='rounded-full size-12 bg-white dark:bg-slate-700 dark:text-white flex justify-center items-center'> <Clock01Icon className='size-6' /> </div>
            <div className='flex flex-col'> <h5 className='text-gray-600 dark:text-slate-400 text-base'> ساعت </h5> <CurrentTime /> </div>
          </div>
          <div className='flex gap-4'>
            <div className='rounded-full size-12 bg-white dark:bg-slate-700 dark:text-white flex justify-center items-center'> <Calendar03Icon className='size-6' /> </div>
            <div className='flex flex-col'> <h5 className='text-gray-600 dark:text-slate-400 text-base'> تاریخ </h5> <CurrentShamsiDate /> </div>
          </div>
        </div>
      </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-5 md:h-[288px] h-full' dir='rtl'>
        
        <div className='md:h-full overflow-hidden col-span-2 bg-white dark:bg-slate-700 dark:text-white rounded-2xl py-3 px-4'>
          <div className='flex w-full justify-between'> <h2 className='text-base font-semibold'> نظرات شما </h2> <button onClick={onOpen} className='flex items-center text-blue-500 text-sm font-semibold'> مشاهده همه <ArrowLeft01Icon className='size-4'/> </button> </div>
        
          <MyComment
            comments={commentsCourse}
            commentsNew={commentsNew}
          />
          <MyCommentModal
            isOpen={isOpen}
            onOpen={onOpen}
            onOpenChange={onOpenChange}
            comments={commentsCourse}
            commentsNew={commentsNew}
          />
        </div>
        
        <div className='h-full dark:bg-slate-700 dark:text-white bg-white overflow-hidden rounded-2xl py-3 px-4 text-center hidden md:block'>
          <div className='bg-red-500 text-yellow-300 text-sm truncate font-semibold flex justify-center items-center rotate-12 translate-x-[60px] md:w-[150%] w-96 my-28 h-10 gap-3'> <WifiError01Icon />  این باکس ار ماتریکس خارج شده است <WifiError01Icon /> </div>
        </div>
        
        <div className='md:h-full h-72 dark:bg-slate-700 md:col-auto col-span-2 dark:text-white bg-white rounded-2xl py-3 px-4 flex flex-col justify-between'>
          <div className='w-full h-fit flex justify-between items-center'>
            <h2 className='font-bold text-base'> وضعیت اطلاعات حساب </h2>
            <NavLink to='/layoutPanel/profile'> <PencilEdit01Icon className='text-blue-500 size-6 cursor-pointer' /> </NavLink>
          </div>

          <div className='flex items-center justify-center size-32 mx-auto'>
            <CircularProgressbar value={(profileInfo.profileCompletionPercentage) ? profileInfo.profileCompletionPercentage : "0"} text={`${(profileInfo.profileCompletionPercentage) ? profileInfo.profileCompletionPercentage : "0"}%`} className={buildStyles({
              textColor: `${profileInfo.profileCompletionPercentage >= 80 ? 'blue' : 'orange'}`,
              textSize: '25px',
              display: 'flex',
              pathColor: `${profileInfo.profileCompletionPercentage >= 80 ? 'blue' : 'orange'}`,
              trailColor: 'transparent'
            })} />
          </div>
          <span className={`${profileInfo.profileCompletionPercentage >= 80 ? 'text-blue-500 dark:text-blue-400' : 'text-red-500'} text-sm text-center font-semibold`}> {profileInfo.profileCompletionPercentage === 100 ? ' اطلاعات حساب‌کابری شما تکمیل است' : ` ${100 - profileInfo.profileCompletionPercentage}% از کامل کردن اطلاعات شما مانده است` } </span>
        </div>
      
      </div>

      <div className='bg-white dark:bg-slate-700 dark:text-white w-full rounded-2xl flex flex-col gap-4 h-fit' dir='rtl'>
        <div className='w-full h-full flex justify-between px-4 pt-3'>
          <h2 className='text-base font-bold'> جدیدترین دوره ها </h2>
          <Link to='/allNewCourses' className='flex text-blue-500 items-center font-semibold text-sm'> <span> مشاهده همه </span> <ArrowLeft01Icon className='size-4' /> </Link>
        </div>
        <TableDashboard />
      </div>
    </div>
    </div>
  )
}

export default Dashboard
