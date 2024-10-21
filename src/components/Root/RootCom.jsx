import React from 'react'
import Header from '../../core/services/common/Header/Header'
import Footer from '../../core/services/common/Footer/Footer'
import { Outlet } from 'react-router-dom'

const RootCom = ({ darkMode, setDarkMode }) => {
  return (
    <div className='flex flex-col items-center'>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <Outlet />
      
      <Footer />
    </div>
  )
}

export default RootCom
