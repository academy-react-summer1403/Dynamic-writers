import React,{useState} from 'react'
import { StarCircleIcon} from 'hugeicons-react'
import Rating from '@mui/material/Rating';
const Rate = () => {
  const [Rate, setRate] = useState(-1)
  return (
    <div className='text-[#272727] flex flex-row-reverse gap-5 text-[20px] items-center font-[700]'>
        <StarCircleIcon color='#3772FF'/>
         امتیاز دهید 
         <div className='flex flex-row items-center' >
         <Rating 
            name="simple-controlled"
            value={Rate}
            onChange={(event, newValue) => {
              setRate(newValue);
            }}
          />
         </div>
         

    </div>
  )
}

export default Rate