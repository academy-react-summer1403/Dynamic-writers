import React from 'react'
import { useOutletContext } from 'react-router'
import Loading from '../../core/services/common/Loading/loading'
import { motion } from "framer-motion"
import MultiAcc from '../../components/User Panel/MultiAccounts/MultiAcc'

const Multi = () => {
  const [loading] = useOutletContext()

  if(loading) {
    return <Loading />
  }

  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className='w-full h-full'>
      <MultiAcc />
    </motion.div>
  )
}

export default Multi
