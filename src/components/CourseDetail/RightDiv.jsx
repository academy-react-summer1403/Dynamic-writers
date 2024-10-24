import React,{useState,useEffect} from 'react'
import Tags from '../../common/tags/tags'
import Profile from './Profile'
import Options from './Options'
import jMoment from 'moment-jalaali'
import { Calendar03Icon,StarIcon,Calendar02Icon,ViewIcon,StudentsIcon } from 'hugeicons-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddReserve } from '../../core/services/api/Reserve/addReserve'

const RightDiv = ({Course}) => {

    const[Flag,setFlag]=useState(Number(Course.isCourseReseve))
    const notifyError = (massage) => toast.warn(massage,{position:"top-center",theme:"dark"});
    const notifySuccess = (massage) => toast.success(massage,{position:"top-center",theme:"dark"});

    // const addReserve = async (id) => {
  //   console.log(response)
  //   if(response.state === true){
  //     setIsFlag(true)
  //   }
  //   else if(response.status === 422){
  //   }
  // }
    const isClick=async()=>{
        if(Flag==0){
            const response = await AddReserve(Course.courseId)
            console.log(response)
            notifySuccess(response.message)
            setFlag(1)
        }
    }
    
  return (
    <div className='h-[550px] w-[500px] border-4 border-solid dark:text-white border-[#E4E4E4] rounded-[24px] items-end  flex flex-col  gap-8 p-5 max-sm:w-[100%] max-md:w-[100%] max-xl:w-[50%]  xl:sticky  max-lg:w-[80%] relative top-[-10px] lg:sticky top-10 max-2xl:w-[500px]' >
        <div className={`${Course.courseStatusName=="درحال برگزاری" ? "bg-yellow-300 dark:bg-yellow-600" : Course.courseStatusName=="منقضی شده" ? "bg-red-400 dark:bg-red-600" : "bg-green-400 dark:bg-green-600"} py-1 flex flex-row items-center gap-2 justify-end pr-[7px]  w-[120px] rounded-[30px] text-center text-[14px] font-[500] `}>{Course.courseStatusName}<div className={`${Course.courseStatusName=="درحال برگزاری" ? "bg-yellow-800" : Course.courseStatusName=="منقضی شده" ? "bg-red-800" : "bg-green-800"} rounded-[100%] w-[10px] h-[10px]`}></div></div>
        <div className='w-[100%] flex-row flex-wrap'>
           
            <h1 className='text-[40px] dark:text-white font-[600] text-right flex flex-row items-center justify-end leading-[50.73px] text-[#272727] max-lg:text-[28px] max-sm:text-[36px] '> <span className=' flex flex-row text-right text-[16px] mb-3 items-center'>
                (<StarIcon color='yellow' size={16}/>{Course.currentRate})
            </span>{Course.title}</h1>
        </div>
        <div className='flex justify-end gap-2'>
            <Tags name={Course.courseLevelName}/>
            {Course.techs.map((value,index)=>{
               return <Tags name={value} key={index}/>
            })}
        </div>
        <div className='flex flex-col gap-2 items-end'>
            <div className='flex flex-row-reverse gap-2 text-[16px] font-[500] items-center'>
                <div className='flex flex-row-reverse gap-2'>
                    <StudentsIcon color='black'/>
                    <span className='text-[#272727] font-[500] text-[20px] dark:text-white'>{Course.currentRegistrants}</span>
                </div>
                /
                <div className='flex flex-row-reverse gap-2 font-[500] text-[20px] dark:text-white'>
                    <span className='text-[#272727] dark:text-white'>{Course.capacity}</span>
                    دانشجو
                </div>
            </div>
            <div className='flex flex-row-reverse gap-2'>
                <Calendar03Icon color='black'/>
                <span className='text-[#272727] font-[500] text-[20px] dark:text-white'><span className='font-[500] text-[16px] text-[#787878]'>(شروع) </span>{(jMoment(Course.startTime).locale('fa').format('jD  jMMMM  jYYYY'))}</span>
            </div>
            <div className='flex flex-row-reverse gap-2'>
                <Calendar02Icon color='black'/>
                <span className='text-[#272727] font-[500] text-[20px] dark:text-white'><span className='font-[500] text-[16px] text-[#787878]'>(پایان) </span>{jMoment(Course.endTime).locale('fa').format('jD  jMMMM  jYYYY')}</span>
            </div>
            <div className='text-[#3772FF] text-[16px] font-[700] flex-row'>
                 تومان    
                <div className='text-[28px] font-[700] text-[#272727] inline-block pl-2 mt-4 dark:text-white'>{Course.cost.toLocaleString()}</div>
            </div>
        </div>
        <div className='flex flex-col gap-6 w-[100%]'>
            <div className='flex flex-row-reverse justify-between'>
                <div className={`w-[50%] h-[100%]  ${Flag==0 ? "bg-[#3772FF] cursor-pointer":"bg-red-500 "} rounded-[28px]  font-[800] text-[20px] text-center leading-[60px] text-[#FFFFFF] `} onClick={isClick}>{Flag==0 ? "رزرو دوره":"دوره رزرو شده است"} </div>
                <Options Course={Course}/>
            </div>
        </div>
    </div>
  )
}

export default RightDiv