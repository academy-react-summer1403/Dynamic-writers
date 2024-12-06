import React from 'react'
import Loading from '../../core/services/common/Loading/loading'
import { useOutletContext } from 'react-router'
import { motion } from "framer-motion"
import HomeWorksCom from '../../components/User Panel/HomeWorks/HomeWorksCom'

const HomeWorks = () => {

  const [loading] = useOutletContext()

  if(loading) {
    return <Loading />
  }

  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className='w-full h-full'>
      <HomeWorksCom />
    </motion.div>
  )
}

export default HomeWorks
