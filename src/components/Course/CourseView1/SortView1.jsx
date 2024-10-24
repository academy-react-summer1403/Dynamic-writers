import React, { useState } from 'react'
import { Button, Input, Select } from '@nextui-org/react'
import { Cancel01Icon, CellsIcon, GridViewIcon, Layers01Icon, Layout3RowIcon, Money03Icon, Search01Icon, TeacherIcon } from 'hugeicons-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { setItem } from '../../../core/services/common/storage'

const SortView1 = ({ changeView }) => {

  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate()

  const updateParams = (value, value2) => {
    searchParams.set('SortingCol', value)
    searchParams.set('SortType', value2)
    setSearchParams(searchParams)
  }

  return (
    <div className='hidden gap-5 items-center flex-row-reverse px-9 py-2 iranSans lg:flex'>
        <div className='flex gap-2 flex-row-reverse'>
          <input type='radio' name='view' id='view1' defaultChecked className='hidden inputView'/>
          <label htmlFor='view1' className='labelView' onClick={() => {changeView('view1')}} > <GridViewIcon className='size-5' /> </label>
          <input type='radio' name='view' id='view2' className='hidden inputView'/>
          <label onClick={() => {changeView('view2')}} htmlFor='view2' className='labelView'> <Layout3RowIcon className='size-5' /> </label>
        </div>
            <span className='border h-5 border-gray-400'> </span>
            <span className='text-gray-600 dark:text-gray-200'> ترتیب </span>
            <div className='flex gap-4 flex-row-reverse items-center'>
                <input type='radio' name='sort' id='sort1' className='hidden inputSort'/>
                <label onClick={() => {updateParams('LastUpdate', 'DESC')}} htmlFor='sort1' className='cursor-pointer text-sm border py-2 px-4 labelSort rounded-full'>  جدید ترین  </label>
                <input type='radio' name='sort' id='sort2' className='hidden inputSort'/>
                <label onClick={() => {updateParams('LastUpdate', 'ASC')}} htmlFor='sort2' className='cursor-pointer text-sm border py-2 px-4 rounded-full labelSort'>  قدیمی ترین  </label>
                <input type='radio' name='sort' id='sort3' className='hidden inputSort'/>
                <label onClick={() => {updateParams('Cost', 'ASC')}} htmlFor='sort3' className='cursor-pointer text-sm border py-2 px-4 rounded-full labelSort'> ارزان ترین </label>
                <span className='border h-5 border-gray-400'> </span>
                <input type='radio' name='sort' id='sort4' className='hidden' />
                <label onClick={() => {updateParams('', '')}} htmlFor='sort4' className='group hover:bg-red-500 hover:text-white border py-1.5 px-3 dark:bg-black border-red-500 text-red-500 rounded-full bg-white flex flex-row-reverse items-center gap-2 text-sm cursor-pointer'>
                  <Cancel01Icon className='size-4 group-hover:text-white' />
                  حذف
                </label>
            </div>


            
    </div>
  )
}

export default SortView1
