import React from 'react'
import Dashboard from '../../components/User Panel/Dashboard/Dashboard'
import Loading from '../../core/services/common/Loading/loading'
import { useOutletContext } from 'react-router'

const DashboardRout = () => {

  const [loading] = useOutletContext()

  if(loading) {
    return <Loading />
  }

  return (
    <div className='w-full h-full'>
      <Dashboard />
    </div>
  )
}

export default DashboardRout
