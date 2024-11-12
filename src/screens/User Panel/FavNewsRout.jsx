import React from 'react'
import FavNewsCom from '../../components/User Panel/Favorite News/FavNewsCom'
import { useOutletContext } from 'react-router'
import Loading from '../../core/services/common/Loading/loading'
import { motion } from "framer-motion"

const FavNewsRout = () => {
  const [loading] = useOutletContext()

  if(loading) {
    return <Loading />
  }

  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className='w-full h-full'>
      <FavNewsCom />
    </motion.div>
  )
}

export default FavNewsRout
