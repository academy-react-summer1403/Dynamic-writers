import { Button, Card, Skeleton } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { GetTeachersList } from '../../../core/services/api/teachersTop'
import { Link, useNavigate } from 'react-router-dom'

const BoxFourth = () => {

  const [teachers, setTeachers] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);

  const getTeachers = async () => {

    const response = await GetTeachersList()
    setTeachers(response.slice(0,3))
  } 

  const navigate = useNavigate()

  useEffect(() => {
    getTeachers()
  }, [])

  useEffect(() => {
    if(teachers.length > 0) {
      setIsLoaded(true)
    }
  }, [teachers])

  return (
    <Card classNames={{base: 'shadow-none overflow-visible'}} className='bg-transparent my-20 flex w-full mx-auto gap-20 md:gap-40 md:flex-row flex-col'>
      {teachers.map((teacher, index) => {
        return (
            <div key={index} className={`${index === 1 ? 'md:w-[570px] md:h-[341px] border-[#3772FF]' : 'md:w-[450px] md:h-[297px] border-[#E4E4E4] dark:border-none'} dark:text-white dark:bg-slate-900 py-5 h-[297px] border-3 rounded-xl relative p-2 flex flex-col justify-between items-center`}>
              <img src={teacher.pictureAddress} className='bg-gray-500 rounded-full size-14 border-2 absolute -top-7' />
              <div className='mx-auto text-center mt-9'> 
                <h2 className='text-base font-semibold'> {teacher.fullName === null ? 'ناشناس' : (teacher.fullName).replace('-', ' ') } </h2>
                <span className='text-gray-400 text-sm'> دکتری برنامه نویسی  </span>
              </div>

              <div className='font-semibold text-2xl my-3'> {index === 1 && '🥇 4.8'} {index === 0 && '🥉 4.2'} {index === 2 && '🥈 4.5'} </div>

              <div className='w-full h-12 overflow-hidden my-2 text-center'>
                <span className='text-sm text-gray-600' dir='rtl'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. </span>
              </div>

              <Button className='bg-blue-500 text-white text-sm iranSansBold w-5/6 rounded-full'> <Link to={teacher.linkdinProfileLink}>  صفحه استاد  </Link></Button>
          </div>
        )
      })}
    </Card>
  )
}

export default BoxFourth
