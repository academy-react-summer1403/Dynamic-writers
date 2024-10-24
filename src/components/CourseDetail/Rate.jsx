import React,{useState,useEffect} from 'react'
import { StarCircleIcon} from 'hugeicons-react'
import Rating from '@mui/material/Rating';
import CourseRate from '../../core/services/api/Course/CourseRate';

import { ToastContainer, toast } from 'react-toastify';

const Rate = ({RateCourse,Flag,id}) => {

  const [Rate, setRate] = useState(RateCourse)
  const [flag,setFlag]=useState(Flag)

  const notifySuccess = (massage) => toast.success(massage,{position:"top-center",theme:"dark"});

  
  return (
    <div className='text-[#272727] flex flex-row-reverse gap-5 text-[20px] dark:text-white items-center font-[700]'>
        <StarCircleIcon color='#3772FF'/>
         امتیاز دهید 
         <div className='flex flex-row items-center' >
         <Rating 
            name="half-rating"
            defaultValue={0} 
            precision={0.5}
            value={Rate}
            readOnly={flag}
            onChange={async(event, newValue) => {
              if(flag==false){
                setRate(newValue);
                let message = await CourseRate(id,newValue)
                notifySuccess(message.message)
                setFlag(true)
              }
            }}
          />
         </div>
         

    </div>
  )
}

export default Rate