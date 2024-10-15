import React, { useEffect, useState } from 'react'
import HeaderPanel from '../../core/services/Layout/Panel-layout/HeaderPanel'
import SitePanel from '../../core/services/Layout/Panel-layout/SitePanel'
import EditImage from '../../core/services/Layout/Panel-layout/EditImage'
import { getProfileInfo } from '../../core/services/api/Panel/GetProfile/getProfileInfo'
import { Outlet } from 'react-router'

const PanelLayout = () => {

  const [editImage, setEditImage] = useState(false)
  const [editImag, setEditImag] = useState(1)

  const [profileInfo, setProfileInfo] = useState([])


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

  const getProfile = async () => {

    const response = await getProfileInfo()
    setProfileInfo(response)
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className='bg-gray-200 w-dvw md:h-fit h-full gap-5 flex py-5 px-5 iranSans md:flex-row-reverse flex-col'>

        <SitePanel />
            
        <div className='flex flex-col border items-end h-fit gap-2 relative w-full' style={{maxWidth: '1196px'}}>

            <HeaderPanel profileInfo={profileInfo} editingImage={editingImage} />
            { editImage && <EditImage /> }

            <Outlet />


        </div>

        <SitePanelRes />

    </div>
  )

}


export default PanelLayout