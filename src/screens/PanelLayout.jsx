import React, { useEffect, useState } from 'react'
import HeaderPanel from '../core/services/Layout/Panel-layout/HeaderPanel'
import SitePanel from '../core/services/Layout/Panel-layout/SitePanel'
import EditImage from '../core/services/Layout/Panel-layout/EditImage'

const PanelLayout = () => {

  const [editImage, setEditImage] = useState(false)

  const [editImag, setEditImag] = useState(1)

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

  return (
    <div className='bg-gray-200 w-dvw h-fit gap-5 flex py-5 px-5 iranSans flex-row-reverse'>

        <SitePanel />
            
        <div className='flex flex-col border items-end h-fit' style={{width: '1196px'}}>

            <HeaderPanel editingImage={editingImage} />
            { editImage && <EditImage /> }


        </div>

    </div>
  )

}


export default PanelLayout