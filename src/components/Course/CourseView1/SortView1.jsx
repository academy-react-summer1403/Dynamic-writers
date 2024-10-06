import React, { useState } from 'react'
import { Button, Input, Select } from '@nextui-org/react'
import { Cancel01Icon, CellsIcon, GridViewIcon, Layers01Icon, Layout3RowIcon, Money03Icon, Search01Icon, TeacherIcon } from 'hugeicons-react'
import { useNavigate } from 'react-router-dom'

const SortView1 = () => {

  return (
    <div className='flex gap-5 items-center flex-row-reverse px-3 py-2 iranSans'>
        <div className='flex gap-2 flex-row-reverse'>
            <GridViewIcon className='size-5 text-blue-500' />
            <Layout3RowIcon className='size-5' />
            </div>
            <span className='border h-5 border-gray-400'> </span>
            <span className='text-gray-600'> ترتیب </span>
            <div className='flex gap-4 flex-row-reverse items-center'>
                <input type='radio' name='sort' id='sort1' className='hidden inputSort'/>
                <label htmlFor='sort1' className='cursor-pointer text-sm border py-2 px-4 labelSort rounded-full'>  پرطرفدار ترین  </label>
                <input type='radio' name='sort' id='sort2' className='hidden inputSort'/>
                <label htmlFor='sort2' className='cursor-pointer text-sm border py-2 px-4 rounded-full labelSort'>  محبوب ترین  </label>
                <input type='radio' name='sort' id='sort3' className='hidden inputSort'/>
                <label htmlFor='sort3' className='cursor-pointer text-sm border py-2 px-4 rounded-full labelSort'> ارزان ترین </label>
                <span className='border h-5 border-gray-400'> </span>
                <input type='radio' name='sort' id='sort4' className='hidden' />
                <label htmlFor='sort4' className='group hover:bg-red-500 hover:text-white border py-1.5 px-3 border-red-500 text-red-500 rounded-full bg-white flex flex-row-reverse items-center gap-2 text-sm cursor-pointer'>
                  <Cancel01Icon className='size-4 group-hover:text-white' />
                  حذف
                </label>
            </div>


            
    </div>
  )
}

export default SortView1
