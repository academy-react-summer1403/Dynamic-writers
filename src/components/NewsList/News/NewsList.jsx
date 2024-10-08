import React from 'react'
import SortNews from './Sort/SortNews'
import FilterNews from './Filter/FilterNews'

const NewsList = () => {
  return (
    <div className='w-dvw'>
      <div className='flex flex-row-reverse border-3 rounded-3xl w-11/12 h-fit mx-auto p-3'>
        
        <div className='flex flex-col gap-5 w-9/12'>

            <SortNews />

        </div>


        <FilterNews />


      </div>
    </div>
  )
}

export default NewsList
