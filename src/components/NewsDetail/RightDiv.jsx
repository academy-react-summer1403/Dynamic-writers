import React from 'react'
import Tags from './tags'
import Profile from './Profile'
import Options from './Options'

import { Calendar03Icon,ViewIcon } from 'hugeicons-react'

const RightDiv = ({New}) => {
  return (
    <div className='w-[538px] h-[460px] border-4 border-solid border-[#E4E4E4] rounded-[24px] flex flex-col gap-10 p-5'>
        <div className='w-[493px]'>
            <h1 className='text-[36px] font-[700] text-right leading-[50.73px] text-[#272727]'>ری اکت چیست و چرا باید ازش استفاده کنیم؟</h1>
        </div>
        <div className='flex justify-end gap-2'>
            <Tags name="برنامه نویسی"/>
            <Tags name="مقاله"/>
        </div>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row-reverse gap-2'>
                <Calendar03Icon color='black'/>
                <span className='text-[#272727] font-[700] text-[16px]'>20 اردیبهشت 1403</span>
            </div>
            <div className='flex flex-row-reverse gap-2'>
                <ViewIcon color='black'/>
                <span className='text-[#272727] font-[700] text-[16px]'>255</span>
            </div>
        </div>
        <div className='flex flex-col gap-6'>
            <div className='font-[700] text-[16px] text-right text-[#787878]'>منتشر کننده</div>
            <div className='flex flex-row-reverse mr-2 justify-between'>
                <Profile name="نیما علیزاده" img=""/>
                <Options News={New}/>
            </div>
        </div>
    </div>
  )
}

export default RightDiv