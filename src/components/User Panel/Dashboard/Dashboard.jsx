import { ArrowLeft01Icon, Calendar03Icon, Clock01Icon, PencilEdit01Icon, WifiError01Icon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import { getProfileInfo } from '../../../core/services/api/Panel/GetProfile/getProfileInfo'
import CurrentTime from './Time/CurrentTime'
import CurrentShamsiDate from './Time/CurrentShamsiDate'
import { Link, NavLink } from 'react-router-dom'
import TableDashboard from './Tabel/TableDashboard'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {

  const [profileInfo, setProfileInfo] = useState([])

  const getProfile = async () => {

    const response = await getProfileInfo()
    setProfileInfo(response)
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className='border h-fit w-full flex flex-col gap-5 iranSans'>
      <div className='border flex-col md:flex-row flex w-full h-fit' dir='rtl'>
        <div className='grow border items-center py-5'>
          <h2 className='font-bold text-2xl'> سلام , صبح بخیر {profileInfo.lName} 😍 </h2>
        </div>
        <div className='md:grow flex md:justify-start justify-between grow-0 md:gap-24 items-center'>
          <div className='flex gap-4'>
            <div className='rounded-full size-12 bg-white flex justify-center items-center'> <Clock01Icon className='size-6' /> </div>
            <div className='flex flex-col'> <h5 className='text-gray-600 text-base'> ساعت </h5> <CurrentTime /> </div>
          </div>
          <div className='flex gap-4'>
            <div className='rounded-full size-12 bg-white flex justify-center items-center'> <Calendar03Icon className='size-6' /> </div>
            <div className='flex flex-col'> <h5 className='text-gray-600 text-base'> تاریخ </h5> <CurrentShamsiDate /> </div>
          </div>
        </div>
      </div>

      <div className='w-full flex gap-5 flex-col-reverse md:flex-row md:h-72 h-fit' dir='rtl'>
        
        <div className='md:h-full h-72 md:grow-8 bg-white rounded-2xl py-3 px-4'>
          <div className='flex w-full justify-between'> <h2 className='text-base font-semibold'> نظرات شما </h2> <Link className='flex items-center text-blue-500 text-sm font-semibold'> مشاهده همه <ArrowLeft01Icon className='size-4'/> </Link> </div>
        </div>
        
        <div className='h-full md:w-80 bg-white rounded-2xl py-3 px-4 overflow-hidden text-center hidden md:block'>
        <div className='bg-red-500 text-yellow-300 text-sm font-semibold flex justify-center items-center rotate-12 translate-x-8 w-96 my-28 h-10 gap-3'> <WifiError01Icon />  این باکس ار ماتریکس خارج شده است <WifiError01Icon /> </div>
        </div>
        
        <div className='md:h-full h-72 md:w-72 bg-white rounded-2xl py-3 px-4 flex flex-col justify-between'>
          <div className='w-full h-fit flex justify-between items-center'>
            <h2 className='font-bold text-base'> وضعیت اطلاعات حساب </h2>
            <NavLink to='/layoutPanel/profile'> <PencilEdit01Icon className='text-blue-500 size-6 cursor-pointer' /> </NavLink>
          </div>

          <div className='flex items-center justify-center size-32 mx-auto'>
            <CircularProgressbar value={profileInfo.profileCompletionPercentage} text={`${profileInfo.profileCompletionPercentage}%`} styles={buildStyles({
              textColor: `${profileInfo.profileCompletionPercentage > 70 ? 'blue' : 'orange'}`,
              textSize: '25px',
              display: 'flex',
              pathColor: `${profileInfo.profileCompletionPercentage > 70 ? 'blue' : 'orange'}`,
              trailColor: 'transparent'
            })} />
          </div>
          <span className={`${profileInfo.profileCompletionPercentage >= 60 ? 'text-blue-500' : 'text-red-500'} text-sm text-center font-semibold`}> {profileInfo.profileCompletionPercentage === 100 ? ' اطلاعات حساب‌کابری شما تکمیل است' : ` ${100 - profileInfo.profileCompletionPercentage}% از کامل کردن اطلاعات شما مانده است` } </span>
        </div>
      
      </div>

      <div className='bg-white w-full rounded-2xl flex flex-col gap-4 py-3 px-4 h-471' dir='rtl'>
        <div className='w-full h-fit flex justify-between'>
          <h2 className='text-base font-bold'> جدیدترین دوره ها </h2>
          <Link to='/allNewCourses' className='flex text-blue-500 items-center font-semibold text-sm'> <span> مشاهده همه </span> <ArrowLeft01Icon className='size-4' /> </Link>
        </div>
        <TableDashboard />
      </div>
    </div>
  )
}

export default Dashboard
