import React, { useEffect, useState } from 'react'
import HeaderPanel from '../../core/services/Layout/Panel-layout/HeaderPanel'
import SitePanel from '../../core/services/Layout/Panel-layout/SitePanel'
import EditImage from '../../core/services/Layout/Panel-layout/EditImage'
import { getProfileInfo } from '../../core/services/api/Panel/GetProfile/getProfileInfo'
import MyCourseRout from './MyCourseRout'
import { GetMyCource } from "../../core/services/api/Panel/getMyCource/getMyCource";
import { Outlet } from 'react-router-dom'

const PanelLayout = () => {

  const [editImage, setEditImage] = useState(false)
  const [editImag, setEditImag] = useState(1)

  const [profileInfo, setProfileInfo] = useState([]);

  const [dataCources, setDataCources] = useState([]);

  const reData = async()=> {
       const params = {
             Count: 5,
       }

       const courcesIs = await GetMyCource(params);
       setDataCources(courcesIs);
  }


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
    getProfile();
    reData();
  }, [])

  return (
    <div className='bg-gray-200 w-dvw h-fit gap-5 flex py-5 px-5 iranSans flex-row-reverse'>

        <SitePanel />
            
        <div className='flex flex-col border items-end h-fit' style={{width: '1196px'}}>

            <HeaderPanel profileInfo={profileInfo} editingImage={editingImage} />
            { editImage && <EditImage /> }

            <Outlet />
            
            {dataCources.map((el , index)=> <MyCourseRout 
           key={index} id={el.studentId} courseTitle={el.courseTitle} fullName={el.fullName}
           termName={el.termName} cost={el.cost} paymentStatus={el.paymentStatus} imaged={el.tumbImageAddress} 
           />)}

        </div>

    </div>
  )

}


export default PanelLayout