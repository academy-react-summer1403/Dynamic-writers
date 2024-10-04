import { Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { GetTeachersList } from '../../../core/services/api/teachersTop'

const BoxFourth = () => {

  const [teachers, setTeachers] = useState([])

  const getTeachers = async () => {

    const response = await GetTeachersList()

    console.log(response)

    setTeachers(response) 

    console.log(teachers)
  } 

  useEffect(() => {
    getTeachers()
  }, [])

  return (
    <div className='my-20 flex w-5/6 mx-auto gap-40'>
      <div className='border-3 rounded-xl grow h-64 relative flex flex-col items-center'>
        <div className='bg-gray-500 rounded-full p-7 size-10 absolute -top-7 '>
          <img />
        </div>

        <div className='mx-auto text-center mt-9'> 
          {/* <h2 className='text-base font-semibold'> {(teachers[2].fullName).replace('-', ' ')} </h2> */}
          <span className='text-gray-400 text-sm'> دکتری برنامه نویسی  </span>
        </div>

        <div className='font-semibold text-xl my-3'> 🥉 4.0 </div>

        <div className='w-full h-12 overflow-hidden my-2 text-center'>
          <span className='text-sm text-gray-600' dir='rtl'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. </span>
        </div>

        <Button href='' className='bg-blue-500 text-white text-sm iranSansBold w-5/6 rounded-full'> صفحه استاد </Button>
      </div>
      <div className='border-2 rounded-xl grow scale-125 relative border-blue-500 h-64 flex flex-col items-center'>
        <div className='bg-gray-500 border-2 border-blue-500 rounded-full p-6 size-10 absolute -top-7 '>
          <img />
        </div>

        <div className='mx-auto text-center mt-9'> 
          {/* <h2 className='text-base font-semibold'>{(teachers[0].fullName).replace('-', ' ')}</h2> */}
          <span className='text-gray-400 text-sm'> دکتری هوش مصنوعی </span>
        </div>

        <div className='font-semibold text-xl my-3'> 🥇 5.0 </div>

        <div className='w-full h-12 overflow-hidden my-2 text-center'>
          <span className='text-sm text-gray-600' dir='rtl'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. </span>
        </div>

        <Button className='bg-blue-500 text-white text-sm iranSansBold w-5/6 rounded-full'> صفحه استاد </Button>

      </div>
      <div className='border-3 rounded-xl grow h-64 flex flex-col items-center relative'>
        <div className='bg-gray-500 rounded-full p-7 size-10 absolute -top-7'>
          <img />
        </div>

        <div className='mx-auto text-center mt-9'> 
          {/* <h2 className='text-base font-semibold'>{(teachers[1].fullName).replace('-', ' ')}</h2> */}
          <span className='text-gray-400 text-sm'> دکتری هوش مصنوعی </span>
        </div>

        <div className='font-semibold text-xl my-3'> 🥈 4.5 </div>

        <div className='w-full h-12 overflow-hidden my-2 text-center'>
          <span className='text-sm text-gray-600' dir='rtl'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. </span>
        </div>
              
        <Button className='bg-blue-500 text-white text-sm iranSansBold w-5/6 rounded-full'> صفحه استاد </Button>

      </div>
    </div>
  )
}

export default BoxFourth
