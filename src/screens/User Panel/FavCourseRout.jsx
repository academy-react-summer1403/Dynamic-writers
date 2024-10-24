import React from 'react'
import FavCourseCom from '../../components/User Panel/Favorite Courses/FavCourseCom'
import Loading from '../../core/services/common/Loading/loading'
import { useOutletContext } from 'react-router'

const FavCourseRout = () => {

  const [loading] = useOutletContext()

  if(loading) {
    return <Loading />
  }

  return (
    <div className='w-full h-full'>
      <FavCourseCom />
    </div>
  )
}

export default FavCourseRout
