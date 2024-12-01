import React from 'react'
import Loading from '../../core/services/common/Loading/loading'
import { motion } from "framer-motion"
import MyJobsCom from '../../components/User Panel/My Jobs/MyJobsCom'
import { useOutletContext } from 'react-router'

const MyJobs = () => {
    const [loading] = useOutletContext()

    if(loading) {
      return <Loading />
    }
  
    return (
      <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className='w-full h-full'>
        <MyJobsCom />
      </motion.div>
    )
}

export default MyJobs
