import React, { Fragment } from 'react'
import RightDiv from './RightDiv'
import LeftDiv from './LeftDiv'

const NewDetail = () => {
  return (
    <div className='flex flex-row-reverse w-[100%]  justify-evenly pt-20'>
        <RightDiv/>
        <LeftDiv/>
    </div>
    
  )
}

export {NewDetail}