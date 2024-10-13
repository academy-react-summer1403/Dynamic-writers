import React from 'react'
import RootCom from '../components/Root/RootCom'
import Header from '../core/services/common/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../core/services/common/Footer/Footer'

const Root = () => {
  return (
    <div className='iranSans'>
     <Header />

     <Outlet />

     <Footer />
     <RootCom /> 
    </div>
  )
}

export default Root
