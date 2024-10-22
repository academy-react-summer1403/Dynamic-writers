import React, { useEffect, useState } from 'react'
import RootCom from '../../components/Root/RootCom'
import { useLocation } from 'react-router'
import { setItem } from '../../core/services/common/storage'

const Root = ({ darkMode, setDarkMode }) => {
  
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
      <RootCom darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  )
}

export default Root
