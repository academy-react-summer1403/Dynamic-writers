import React from 'react'
import MyCourseCom from '../../components/User Panel/My Courses/MyCourseCom'
import { useOutletContext } from 'react-router'
import Loading from '../../core/services/common/Loading/loading'
import { motion } from "framer-motion"

const MyCourseRout = () => {

  const [loading] = useOutletContext()

  if(loading) {
    return <Loading />
  }

  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className='w-full h-full'>
      <MyCourseCom />
    </motion.div>
  )
}

export default MyCourseRout