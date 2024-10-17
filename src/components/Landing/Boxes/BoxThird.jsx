import React, { useEffect, useState } from 'react'
import CourseTops from './CourseTops'
import moment from 'moment-jalaali'
import { Button } from '@nextui-org/react'
import { getCourserList } from '../../../core/services/api/courseToper'

const BoxThird = () => {

    const [course, setCourse] = useState([])

    const getCourse = async () => {

        const response = await getCourserList(4)
        setCourse(response)

    }

    const [viewBetter, setViewBetter] = useState(false);

    console.log(viewBetter)

    useEffect(() => { 
      getCourse()

      if(window.innerWidth > 768){
        setViewBetter(true)
      }

    }, [])


  return (
    <>
    <div className={` my-20 w-5/6 mx-auto flex flex-col gap-5 justify-center md:flex-row md:h-fit overflow-hidden md:overflow-visible`} style={viewBetter ? {height: 'fit-content'} : {height: '800px'}}>
      {course.map((item, index) => {

        return <CourseTops 
          key={index}
          id={item.courseId}
          title={item.title}
          describe={item.describe}
          date={(moment(item.lastUpdate).locale('fa').format('jD jMMMM jYYYY'))}
          levelName={item.levelName}
          dissLikeCount={item.dissLikeCount}
          likeCount={item.likeCount}
          teacherName={item.teacherName}
          currentUserRateNumber={item.currentUserRateNumber}
          cost={(parseInt(item.cost).toLocaleString('en-US'))}
          tumbImageAddress={item.tumbImageAddress}
          statusName={item.statusName}
          typeName={item.typeName}
        />

        })}
    </div>
    <Button onClick={() => {viewBetter ? setViewBetter(false) : setViewBetter(true)}} className='md:hidden text-white bg-blue-500 w-32 rounded-full mx-auto mb-20'>

        {viewBetter ? "نمایش کمتر" : "نمایش بیشتر"}

    </Button>
    </>
  )
}

export default BoxThird
