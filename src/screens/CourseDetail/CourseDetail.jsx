import React, { Fragment,useState,useEffect } from 'react'
import {Course} from '../../components/CourseDetail/Course'

const CourseDetail = () => {

  return (
    <div className='w-dvw max-w-[3000px]'>
      <Course/>
    </div>
    
    
  )
}

export {CourseDetail}