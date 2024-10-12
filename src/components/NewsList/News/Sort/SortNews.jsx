import { Cancel01Icon } from 'hugeicons-react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SortNews = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const updateParams = (value, value2) => {
    searchParams.set('SortingCol', value)
    searchParams.set('SortType', value2)
    setSearchParams(searchParams)
  }

  return (
    <div className='md:flex hidden gap-3 w-full h-fit flex-row-reverse items-center px-2 font-semibold text-sm'>
      <span className='text-sm font-semibold text-gray-600'> ترتیب </span>
      <input type='radio' name='sortNews' id='sortNew1' className='hidden inputSortNews' />
      <label onClick={() => {updateParams('CurrentView', 'DESC')}} htmlFor='sortNew1' className='labelSortNews border px-4 py-2 rounded-full'> پربازدید ترین </label>
      <input type='radio' name='sortNews' id='sortNew2' className='hidden inputSortNews' />
      <label onClick={() => {updateParams('InsertDate', 'DESC')}} htmlFor='sortNew2' className='labelSortNews border px-4 py-2 rounded-full'> جدید ترین </label>
      <input type='radio' name='sortNews' id='sortNew3' className='hidden inputSortNews' />
      <label onClick={() => {updateParams('UpdateDate', 'DESC')}} htmlFor='sortNew3' className='labelSortNews border px-4 py-2 rounded-full'> بروز ترین </label>
      <span className='border h-5 border-gray-300'></span>
      <input type='radio' name='sortNews' id='sortNew4' className='hidden' />
      <label onClick={() => {updateParams('', '')}} htmlFor='sortNew4' className='group items-center hover:bg-red-500 hover:text-white border border-red-500 text-red-500 px-4 py-2 rounded-full flex gap-2 flex-row-reverse'>
        <Cancel01Icon className='size-4 group-hover:text-white' />
        <span> حذف </span>
      </label>
    </div>
  )
}

export default SortNews
