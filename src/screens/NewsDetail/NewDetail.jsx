import React, { Fragment } from 'react'
import RightDiv from '../../components/NewsDetail/RightDiv'
import LeftDiv from '../../components/NewsDetail/LeftDiv'

const NewDetail = () => {
  return (
    <div className='flex flex-row-reverse w-[100%]  justify-evenly pt-20'>
        <RightDiv/>
        <LeftDiv/>
    </div>
    
  )
}

export {NewDetail}