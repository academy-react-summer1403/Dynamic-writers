import React, { useEffect, useState } from 'react'
import RootCom from '../../components/Root/RootCom'
import { useLocation } from 'react-router'
import { setItem } from '../../core/services/common/storage'
import { reportLanding } from '../../core/services/api/Landing/lanfing'
import { FourSquare } from 'react-loading-indicators'

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

  const [landingReport, setLandingReport] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

  const ReportLanding = async () => {
    const response = await reportLanding()
    setLandingReport(response)
  }

  useEffect(() => {
    ReportLanding()
  }, [])

  useEffect(() => {
    if(landingReport){
      setIsLoaded(true)
    }
    else{
      setIsLoaded(false)
    }
  }, [landingReport])


  return (
    <>
      {!isLoaded &&  <div className='flex h-dvh items-center justify-center'>
        <FourSquare color="blue" size="medium" />
      </div>}
      {isLoaded && <RootCom darkMode={darkMode} setDarkMode={setDarkMode} />} 
    </>
  )
}

export default Root
