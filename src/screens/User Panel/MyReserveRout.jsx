import React from 'react'
import MyReserveCom from '../../components/User Panel/My Reserves/MyReserveCom'
import Loading from '../../core/services/common/Loading/loading'
import { useOutletContext } from 'react-router'

const MyReserveRout = () => {

  const [loading] = useOutletContext()

  if(loading) {
    return <Loading />
  }

  return (
    <div className='w-full h-full'>
      <MyReserveCom />
    </div>
  )
}

export default MyReserveRout
