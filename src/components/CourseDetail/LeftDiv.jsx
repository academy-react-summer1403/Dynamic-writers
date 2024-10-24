import React, { useEffect,useState } from 'react'
import Rate from '../../components/CourseDetail/Rate'
import Teacher from './Teacher';
import UserDetailsWithId from '../../core/services/api/User/UserDetailsWithId'
import Comment from '../Comment&Reply/Comment';
import { getCommentsCourse } from '../../core/services/api/Comments/getCommentsCourse';
import jMoment from 'moment-jalaali'

const LeftDiv = ({Course}) => {
  const [text, setText] = useState(Course.describe);
  const [firstPart, setFirstPart] = useState('');
  const [secondPart, setSecondPart] = useState('');
  const [Image, setImage] = useState("")

  const [comments, setComment] = useState([])

  const GetUserProfile = async () => {
        const res = await UserDetailsWithId(Course.teacherId)
        setImage(res.currentPictureAddress)
    }
  
  const getComments = async () => {
    const params = {
      id: Course.courseId
    }

    const response2 = await getCommentsCourse(params)
    setComment(response2)
  }

    useEffect(() => {
      GetUserProfile()
      getComments()
    }, [])

  useEffect(() => {
    textCalc();
  },[])

  function textCalc(){
    if (text.length > 0) {

      const firstPartLength = Math.ceil(text.length / 3);

      const lastIndexOfDot = text.lastIndexOf('.', firstPartLength);

      const splitIndex = lastIndexOfDot !== -1 ? lastIndexOfDot + 1 : firstPartLength;

      setFirstPart(text.slice(0, splitIndex).trim()); 
      setSecondPart(text.slice(splitIndex).trim()); 
    }
  }
  return (

    <div className='w-[50%] flex gap-10 flex-col dark:text-white max-sm:w-[100%] max-md:w-[100%]  max-lg:w-[80%]  max-2xl:w-[700px] max-xl:w-[700px]'>
      <img className='w-[100%] h-[460px] bg-[#4DBFFF] rounded-[24px]' src={Course.imageAddress}/>
        <div className='text-[16px] font-[700] text-[#787878] text-right dark:text-white'>مدرس</div>
        <Teacher image={Image} ability={Course.techs} name={Course.teacherName}/>
        <div className='text-[16px] font-[700] text-[#787878] text-right dark:text-white'>توضیحات</div>
        <div className='text-[#272727] font-[500] text-[20px] text-right leading-[30px] dark:text-gray-300' style={{direction:"rtl"}}>
          <p className='text-justify'>{firstPart}</p>
          <br/>
          <p className='text-justify'>{secondPart}</p>
        </div>
        <Rate RateCourse={Course.currentUserRateNumber} Flag={Course.currentUserSetRate} id={Course.courseId}/>
        <div className='font-[700] text-[30px] text-[#272727] text-right dark:text-white'>نظرات</div>

        <Comment 
          comments= {comments}
          Oid={Course.courseId}
          title={Course.title}
        />
    </div>
  )
}

export default LeftDiv