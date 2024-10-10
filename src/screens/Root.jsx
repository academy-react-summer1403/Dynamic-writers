import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='iranSans'>
     <Header />

     <Outlet /> 
    </div>
  )
}

export default Root