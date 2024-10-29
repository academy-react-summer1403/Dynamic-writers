import React from 'react'
import Dashboard from '../../components/User Panel/Dashboard/Dashboard'
import Loading from '../../core/services/common/Loading/loading'
import { useOutletContext } from 'react-router'
import { motion } from "framer-motion"

const DashboardRout = () => {

  const [loading] = useOutletContext()

  if(loading) {
    return <Loading />
  }

  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className='w-full h-full'>
      <Dashboard />
    </motion.div>
  )
}

export default DashboardRout
