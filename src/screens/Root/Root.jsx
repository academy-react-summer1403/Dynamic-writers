import React, { useEffect, useState } from 'react'
import RootCom from '../../components/Root/RootCom'
import { useLocation } from 'react-router'
import { setItem } from '../../core/services/common/storage'
import { reportLanding } from '../../core/services/api/Landing/landing'
import { FourSquare } from 'react-loading-indicators'
import { useQuery } from '@tanstack/react-query'

const Root = ({ darkMode, setDarkMode }) => {

  const { isLoading } = useQuery({queryKey:['reportLanding'], queryFn:reportLanding})
  
  const location = useLocation()

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark')
      setItem('darkMode', true)
    } else {
      document.documentElement.classList.remove('dark')
      setItem('darkMode', false)
    }
  }, [location])

  return (
    <>
      {isLoading &&  <div className='flex h-dvh items-center justify-center'>
        <FourSquare color="blue" size="medium" />
      </div>}
      {!isLoading && <RootCom darkMode={darkMode} setDarkMode={setDarkMode} />} 
    </>
  )
}

export default Root
