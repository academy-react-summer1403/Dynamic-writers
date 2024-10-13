import React from 'react'
import Header from '../../core/services/common/Header/Header'
import Footer from '../../core/services/common/Footer/Footer'
import { Outlet } from 'react-router-dom'

const RootCom = () => {
  return (
    <div className='flex flex-col items-center'>
      {/* <Header />

      <Outlet />
      
      <Footer /> */}
    </div>
  )
}

export default RootCom
