import React, { useEffect, useState } from 'react'
import { getCourserList } from '../../../core/services/api/cours'
import CourseTops from './CourseTops'
import moment from 'moment-jalaali'

const BoxThird = () => {

    const [course, setCourse] = useState([])

    const getCourse = async () => {

        const response = await getCourserList(4)

        // console.log(response)

        setCourse(response)

        // console.log('course:', course)
    }

    useEffect(() => { 
      getCourse()
    }, [])

  return (
    <div className='my-20 w-5/6 mx-auto flex gap-5 justify-between'>
      {course.map((item, index) => {

        return <CourseTops 
          key={index}
          id={item.courseId}
          title={item.title}
          description={item.describe}
          date={(moment(item.lastUpdate).format('jYYYY/jM/jD'))}
          levelName={item.levelName}
          dissLikeCount={item.dissLikeCount}
          likeCount={item.likeCount}
          teacherName={item.teacherName}
          courseRate={item.courseRate}
          cost={(parseInt(item.cost).toLocaleString('en-US'))}
        />

        })}
        </div>
  )
}

export default BoxThird
