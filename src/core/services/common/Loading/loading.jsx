import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const loading = () => {
  return (
    <div className='w-full h-[500px] flex justify-center items-center gap-4'>
    <span>...درحال بارگزاری</span>
    <CircularProgress />
  </div>
  )
}

export default loading