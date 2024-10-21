import React from 'react'
import Dashboard from '../../components/User Panel/Dashboard/Dashboard'
import Loading from '../../core/services/common/Loading/loading'

const DashboardRout = ({ loadingR }) => {
  
  
  if(loadingR === false){
    return <Loading/>
  }
  
  return (
    <div className='w-full'>
      <Dashboard />
    </div>
  )
}

export default DashboardRout
