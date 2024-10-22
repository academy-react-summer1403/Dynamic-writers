import React, { useEffect, useState } from 'react'
import HeaderPanel from '../../core/services/Layout/Panel-layout/HeaderPanel'
import SitePanel from '../../core/services/Layout/Panel-layout/SitePanel'
import EditImage from '../../core/services/Layout/Panel-layout/EditImage'
import { Outlet } from 'react-router'
import SitePanelRes from '../../core/services/Layout/Panel-layout-res/SitePanelRes'
import GetProfileInfo from '../../core/services/api/User/GetProfileInfo'

const PanelLayout = ({ darkMode, setDarkMode }) => {

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
  

  return (
    <div className='bg-gray-100 dark:bg-black w-dvw md:h-full h-full gap-5 flex py-5 px-5 iranSans md:flex-row-reverse flex-col'>

        <SitePanel />
            
        <div className='flex flex-col items-end h-full gap-2 relative md:w-full' style={{maxWidth: '1196px'}}>

            <HeaderPanel darkMode={darkMode} setDarkMode={setDarkMode} profileInfo={profileInfo} editingImage={editingImage} />
            { editImage && <EditImage /> }

            <Outlet context={[loading]} />


        </div>

        <SitePanelRes />

    </div>
  )

}


export default PanelLayout