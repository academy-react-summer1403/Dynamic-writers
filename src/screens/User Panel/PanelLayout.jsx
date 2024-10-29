import HeaderPanel from '../../core/services/Layout/Panel-layout/HeaderPanel'
import SitePanel from '../../core/services/Layout/Panel-layout/SitePanel'
import EditImage from '../../core/services/Layout/Panel-layout/EditImage'
import { Outlet } from 'react-router'
import SitePanelRes from '../../core/services/Layout/Panel-layout-res/SitePanelRes'
import GetProfileInfo from '../../core/services/api/User/GetProfileInfo'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { getItem, setItem } from '../../core/services/common/storage';
import { motion } from "framer-motion"

const PanelLayout = ({ darkMode, setDarkMode ,reloadProf}) => {

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

  const [editImage, setEditImage] = useState(false)
  const [editImag, setEditImag] = useState(1)

  const [profileInfo, setProfileInfo] = useState([])
  const[loading,setLoading] = useState(true)
  const [Rerender,setRerender] = useState(false)

  const editingImage = () => {
    if(editImag === 1){
      setEditImage(true)
      setEditImag(2)
    }
    else if(editImag === 2){
      setEditImage(false)
      setEditImag(1)
    }
  } 

  const getProfile=async()=>{
    const Prof=await GetProfileInfo()
    
    setProfileInfo(Prof)
    if(profileInfo !== null){
      setLoading(false)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  useEffect(() => {
    getProfile()
  }, [Rerender])

  useEffect(() => {
    getProfile()
  }, [reloadProf])

  return (
    <motion.div    
    initial={{ opacity: 0, x: 1000 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}  className='w-dvw flex justify-center max-w-[3000px]'>
      <div className='flex w-full h-full justify-center p-6 fixed bg-gray-100 dark:bg-black gap-4' dir='rtl'>

        <SitePanel />
          
        <div className='flex flex-col items-end h-full gap-2 relative w-full' dir='rtl'>

          <HeaderPanel darkMode={darkMode} setDarkMode={setDarkMode} profileInfo={profileInfo} editingImage={editingImage} />
          { editImage && <EditImage /> }

          <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 1}} className='overflow-y-scroll over overflow-x-hidden w-full'>
            <Outlet context={[loading]} />
          </motion.div>


        </div>

        <SitePanelRes profileInfo={profileInfo} />

      </div>
    </motion.div>
  )

}


export default PanelLayout