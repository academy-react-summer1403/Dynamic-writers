import React from 'react'
import MyCourseCom from '../../components/User Panel/My Courses/MyCourseCom'
import { useOutletContext } from 'react-router'
import Loading from '../../core/services/common/Loading/loading'

const MyCourseRout = () => {

  const [loading] = useOutletContext()

  if(loading) {
    return <Loading />
  }

  return (
    <div className='w-full h-full'>
      <MyCourseCom />
    </div>
  )
}

export default MyCourseRout