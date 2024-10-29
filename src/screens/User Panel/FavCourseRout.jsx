import React from 'react'
import FavCourseCom from '../../components/User Panel/Favorite Courses/FavCourseCom'
import Loading from '../../core/services/common/Loading/loading'
import { useOutletContext } from 'react-router'
import { motion } from "framer-motion"

const FavCourseRout = () => {

  const [loading] = useOutletContext()

  if(loading) {
    return <Loading />
  }

  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className='w-full h-full'>
      <FavCourseCom />
    </motion.div>
  )
}

export default FavCourseRout
