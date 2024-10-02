import React from 'react'
import Bahr from '../../assets/Bahr.png'
import Bahr2 from '../../assets/Bahr2.png'

const Header = () => {
  return (
    <div className='h-20 w-dvw flex justify-end items-center gap-5'>
      <div className='flex gap-1 border border-red-500'>
        <img src={Bahr} className='w-12 h-3' />
        <img src={Bahr2} className='w-12 h-3' />
      </div>
    </div>
  )
}

export default Header
