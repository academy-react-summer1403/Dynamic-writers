import { Cancel01Icon } from 'hugeicons-react'
import React from 'react'

const SortNews = () => {
  return (
    <div className='flex gap-3 w-full h-fit flex-row-reverse items-center px-2 font-semibold text-sm'>
      <span className='text-sm font-semibold text-gray-600'> ترتیب </span>
      <input type='radio' name='sortNews' id='sortNew1' className='hidden inputSortNews' />
      <label htmlFor='sortNew1' className='labelSortNews border px-4 py-2 rounded-full'> پرطرفدار ترین </label>
      <input type='radio' name='sortNews' id='sortNew2' className='hidden inputSortNews' />
      <label htmlFor='sortNew2' className='labelSortNews border px-4 py-2 rounded-full'> محبوب ترین </label>
      <input type='radio' name='sortNews' id='sortNew3' className='hidden inputSortNews' />
      <label htmlFor='sortNew3' className='labelSortNews border px-4 py-2 rounded-full'> ارزان ترین </label>
      <span className='border h-5 border-gray-300'></span>
      <input type='radio' name='sortNews' id='sortNew4' className='hidden' />
      <label htmlFor='sortNew4' className='group items-center hover:bg-red-500 hover:text-white border border-red-500 text-red-500 px-4 py-2 rounded-full flex gap-2 flex-row-reverse'>
        <Cancel01Icon className='size-4 group-hover:text-white' />
        <span> حذف </span>
      </label>
    </div>
  )
}

export default SortNews
