import React, { useEffect, useState } from 'react'
import { getCourserList } from '../../../core/services/api/cours'
import CourseTops from './CourseTops'

const BoxThird = () => {

    const [course, setCourse] = useState([])

    const getCourse = async () => {

        const response = await getCourserList()

        // setCourse(response)

        console.log(response)
    }

    useEffect(() => {
        getCourse()
    }, [])

  return (
    <>
        <CourseTops courseList={course} />
    </>
  )
}

export default BoxThird
