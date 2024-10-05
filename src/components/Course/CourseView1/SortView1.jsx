import React from 'react'
import { Button, Input, Select } from '@nextui-org/react'
import { Cancel01Icon, CellsIcon, GridViewIcon, Layers01Icon, Layout3RowIcon, Money03Icon, Search01Icon, TeacherIcon } from 'hugeicons-react'

const SortView1 = () => {
  return (
    <div className='flex gap-5 items-center flex-row-reverse px-3 py-2'>
        <div className='flex gap-2 flex-row-reverse'>
            <GridViewIcon className='size-5 text-blue-500' />
            <Layout3RowIcon className='size-5' />
            </div>
            <span className='border h-6 border-gray-400'> </span>
            <span> ترتیب </span>
            <div className='flex gap-5 flex-row-reverse'>
                <input type='radio' name='sort' id='sort1' className='hidden'/>
                <label htmlFor='sort1' className='cursor-pointer font-bold bg-blue-500 text-white text-sm border-2 p-2 px-3 rounded-full'>  پرطرفدار تین  </label>
                <input type='radio' name='sort' id='sort1' className='hidden'/>
                <label htmlFor='sort1' className='cursor-pointer font-bold text-sm border-2 p-2 px-3 rounded-full'>  محبوب تین  </label>
                <input type='radio' name='sort' id='sort1' className='hidden'/>
                <label htmlFor='sort1' className='cursor-pointer font-bold text-sm border-2 p-2 px-3 rounded-full'>  پرامتیاز تین  </label>
            </div>
            <span className='border h-6 border-gray-400'> </span>
            <Button className='border border-red-500 text-red-500 rounded-full bg-white flex flex-row-reverse'>
            <Cancel01Icon className='size-4' />
            حذف
        </Button>
    </div>
  )
}

export default SortView1
