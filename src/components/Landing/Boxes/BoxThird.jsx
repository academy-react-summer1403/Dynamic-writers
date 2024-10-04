import React, { useEffect, useState } from 'react'
import { getCourserList } from '../../../core/services/api/cours'
import CourseTops from './CourseTops'
import moment from 'moment-jalaali'
import { Button } from '@nextui-org/react'

const BoxThird = () => {

    const [course, setCourse] = useState([])

    const getCourse = async () => {

        const response = await getCourserList(4)

        // console.log(response)

        setCourse(response)

        // console.log('course:', course)
    }

    const [viewBetter, setViewBetter] = useState(false);

    useEffect(() => { 
      getCourse()
    }, [])

  return (
    <>
    <div className={`my-20 w-5/6 mx-auto flex flex-col gap-5 justify-center md:flex-row md:h-fit overflow-hidden`} style={{height: '800px'}}>
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
    <Button onClick={() => {setViewBetter(true)}} className='text-white bg-blue-500 w-32 rounded-full mx-auto mb-20'> نمایش بیشتر </Button>
    </>
  )
}

export default BoxThird
