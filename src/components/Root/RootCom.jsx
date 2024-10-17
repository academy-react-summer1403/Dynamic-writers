import React from 'react'
<<<<<<< HEAD
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
=======
import Header from '../../core/services/common/Header/Header'
import Footer from '../../core/services/common/Footer/Footer'
>>>>>>> Develop
import { Outlet } from 'react-router-dom'

const RootCom = () => {
  return (
    <div className='flex flex-col items-center'>
      <Header />

      <Outlet />
<<<<<<< HEAD

=======
      
>>>>>>> Develop
      <Footer />
    </div>
  )
}

export default RootCom
