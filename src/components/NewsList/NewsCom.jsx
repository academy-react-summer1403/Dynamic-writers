import React, { useEffect, useState } from 'react'
import round2 from '../../assets/round2.png'
import { ArrowDown01Icon, CircleIcon, StarIcon } from 'hugeicons-react'
import NewsList from './News/NewsList'

const NewsCom = () => {
  
  const [scrollPos, setScrollPos] = useState(0)

  const handleScroll = () => {
      const pos = window.scrollY
      setScrollPos(pos)
  }

  useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => {
          window.removeEventListener('scroll', handleScroll)
      }
  }, [])

  return (
    <div className='my-10 iranSans'>

      <div className='flex flex-col items-center justify-center relative w-fit mx-auto gap-6'>
        <h2 className='text-3xl iranSansBold'> اخبار و مقالات آکادمی </h2>
        <span className='text-sm text-gray-500 text-center w-96 font-semibold'> اخبار و مقالات که میتوانند برای پیشرفت و یادگیری شما مفید باشند رو ما در اختیار شما قرار میدیم </span>
        <img src={round2} className='size-7 absolute top-14 -right-8 hidden md:inline-block' />
        <CircleIcon className='text-blue-500 size-3 bg-blue-500 rounded-full absolute -top-8 left-20' />
        <StarIcon className='text-blue-500 rounded-full bg-blue-500 size-1 absolute -bottom-5 left-5' />
      </div>

      <div className='flex flex-col items-center justify-center gap-2 text-gray-500 text-sm my-10'  style={scrollPos > 0 ? {display: 'none'} : {display: 'flex'}}>
        <span className='text-sm' > لیست اخبار و مقالات </span>
        <ArrowDown01Icon />
      </div>

      <NewsList />
    </div>
  )
}

export default NewsCom