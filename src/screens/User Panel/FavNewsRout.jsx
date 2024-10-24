import React from 'react'
import FavNewsCom from '../../components/User Panel/Favorite News/FavNewsCom'
import { useOutletContext } from 'react-router'
import Loading from '../../core/services/common/Loading/loading'

const FavNewsRout = () => {
  const [loading] = useOutletContext()

  if(loading) {
    return <Loading />
  }

  return (
    <div className='w-full h-full'>
      <FavNewsCom />
    </div>
  )
}

export default FavNewsRout
