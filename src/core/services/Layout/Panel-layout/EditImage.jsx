import { Button } from '@nextui-org/react'
import { CheckmarkCircle01Icon, Delete02Icon } from 'hugeicons-react'
import React from 'react'

const EditImage = () => {
  return (
    <div className='bg-white rounded-2xl flex flex-col items-center justify-around p-4 gap-2 absolute top-20 shadow-xl' style={{width: '234px', height: '112px'}}>
      <div className='flex gap-3 justify-end w-full'> <Button className='bg-white w-full flex gap-3 justify-end'> انتخاب عکس اصلی <CheckmarkCircle01Icon className='text-green-500'/>  </Button> </div>
      <div className='border' style={{width: '202px'}}></div>
      <div className='w-full'> <Button className='bg-white w-full flex gap-3 justify-end text-red-500 '>  حذف عکس <Delete02Icon />  </Button> </div>
    </div>
  )
}

export default EditImage
