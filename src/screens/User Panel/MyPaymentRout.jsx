import React from 'react'
import MyPaymentCom from '../../components/User Panel/My Payment/MyPaymentCom'
import Loading from '../../core/services/common/Loading/loading'
import { useOutletContext } from 'react-router'
import { motion } from "framer-motion"

const MyReserveRout = () => {

  const [loading] = useOutletContext()

  if(loading) {
    return <Loading />
  }

  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className='w-full h-full'>
      <MyPaymentCom />
    </motion.div>
  )
}

export default MyReserveRout
