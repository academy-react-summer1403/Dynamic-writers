import React from 'react'
import Loading from '../../core/services/common/Loading/loading'
import { motion } from "framer-motion"
import { useOutletContext } from 'react-router'
import MyJobsCom from '../../components/Panel/My Jobs/MyJobsCom'

const MyJobs = () => {
    return (
      <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className='w-full h-full'>
        <MyJobsCom />
      </motion.div>
    )
}

export default MyJobs
