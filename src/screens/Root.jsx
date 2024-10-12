import React from 'react'
import RootCom from '../components/Root/RootCom'
import Header from '../core/services/common/Header/Header'
import Footer from '../core/services/common/Footer/Footer'
import {Outlet} from 'react-router-dom'

const Root = () => {
  return (
    <div className='iranSans'>
     <Header />

     <Outlet />

     <Footer />
    </div>
  )
}

export default Root
