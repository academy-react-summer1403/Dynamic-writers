import React from 'react'
import RootCom from '../../components/Root/RootCom'

const Root = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <RootCom darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  )
}

export default Root
