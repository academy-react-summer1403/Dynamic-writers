import { Cancel01Icon } from 'hugeicons-react'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SortNews = () => {

  const [deleteFilter, setDeleteFilter] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const updateParams = (value, value2) => {
    searchParams.set('SortingCol', value)
    searchParams.set('SortType', value2)
    setSearchParams(searchParams)
  }

  const handleDeleteFilter = (value) => {
    setDeleteFilter(value)
  }

  return (
    <div className='md:flex hidden gap-3 w-full h-fit flex-row-reverse items-center px-2 font-semibold text-sm'>
      <span className='text-sm font-semibold text-gray-600 dark:text-white'> ترتیب </span>
      <input type='radio' name='sortNews' id='sortNew1' className='hidden inputSortNews' />
      <label onClick={() => {updateParams('CurrentView', 'DESC'), handleDeleteFilter(true)}} htmlFor='sortNew1' className='labelSortNews border-2 px-4 py-2 rounded-full cursor-pointer'> پربازدید ترین </label>
      <input type='radio' name='sortNews' id='sortNew2' className='hidden inputSortNews' />
      <label onClick={() => {updateParams('InsertDate', 'DESC'), handleDeleteFilter(true)}} htmlFor='sortNew2' className='labelSortNews border-2 px-4 py-2 rounded-full cursor-pointer'> جدید ترین </label>
      <input type='radio' name='sortNews' id='sortNew3' className='hidden inputSortNews' />
      <label onClick={() => {updateParams('UpdateDate', 'DESC'), handleDeleteFilter(true)}} htmlFor='sortNew3' className='labelSortNews border-2 px-4 py-2 rounded-full cursor-pointer'> بروز ترین </label>
      <span className={`border h-5 ${deleteFilter ? 'flex' : 'hidden'} border-gray-300`}></span>
      <input type='radio' name='sortNews' id='sortNew4' className='hidden' />
      <label onClick={() => {updateParams('', ''), handleDeleteFilter(false)}} htmlFor='sortNew4' className={` ${deleteFilter ? 'flex' : 'hidden'} group items-center cursor-pointer hover:bg-red-500 hover:text-white border border-red-500 text-red-500 px-4 py-2 rounded-full flex gap-2 flex-row-reverse`}>
        <Cancel01Icon className='size-4 group-hover:text-white' />
        <span> حذف </span>
      </label>
    </div>
  )
}

export default SortNews
