import { Button } from '@nextui-org/react'
import { Note01Icon, StudentIcon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import FaceDetection from '../../Face/FaceDetection'

const BoxSecond = () => {

  return (
    <div className='my-2 w-full mx-auto flex flex-col gap-10 justify-between md:flex-row'>
  
    <FaceDetection />
    
    </div>
  )
}

export default BoxSecond
