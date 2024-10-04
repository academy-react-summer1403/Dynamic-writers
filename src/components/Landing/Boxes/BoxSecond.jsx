import { Button } from '@nextui-org/react'
import { Note01Icon, StudentIcon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import { GetTeachersList } from '../../../core/services/api/teachersTop'
import Teachers from './Teachers'

const BoxSecond = () => {

  const [teachers, setTeachers] = useState([])

  const getTeachers = async () => {

    const response = await GetTeachersList()

    setTeachers(response.slice(0,4)) 

    console.log(teachers)

  } 

  useEffect(() => {
    getTeachers()
  }, [])

  return (
    <div className='my-20 w-5/6 mx-auto flex flex-col gap-10 justify-between md:flex-row'>
  
      {teachers.map((item, index) => {

        return <Teachers
          key={index}
          id={item.teacherId}
          fullName={item.fullName}
          linkdinProfileLink={item.linkdinProfileLink}
          pictureAddress={item.pictureAddress}
          courseCounts={item.courseCounts}
          newsCount={item.newsCount}
        />

      })}

    </div>
  )
}

export default BoxSecond
