import React from 'react'
import SecurityCom from '../../components/User Panel/Secutiry/SecurityCom'
import { motion } from "framer-motion"

const SecurityPanel = () => {
  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className='w-full h-full'>
      <SecurityCom />
    </motion.div>
  )
}

export default SecurityPanel
