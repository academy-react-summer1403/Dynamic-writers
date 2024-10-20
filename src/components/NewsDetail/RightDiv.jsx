import React,{useState,useEffect} from 'react'
import Tags from '../../common/tags/tags'
import Profile from './Profile'
import Options from './Options'
import UserDetailsWithId from '../../core/services/api/User/UserDetailsWithId'
import { Calendar03Icon,ViewIcon } from 'hugeicons-react'
import jMoment from 'moment-jalaali'

const RightDiv = ({New}) => {
    const [Image, setImage] = useState("")
    const GetUserProfile=async(New)=>{
        let response=await UserDetailsWithId(New.detailsNewsDto.userId)
        setImage(response.currentPictureAddress)
    }

    useEffect(() => {
      GetUserProfile(New)
    }, [])
    
  return (
    <div className='h-[460px] border-4 border-solid border-[#E4E4E4] rounded-[24px] flex flex-col gap-10 p-4 max-2xl:w-[500px] max-xl:w-[500px] max-md:w-[100%] max-sm:w-[100%] ' >
        <div className='w-[100%]'>
            <h1 className='text-[32px] dark:text-white font-[400] text-right leading-[50.73px] text-[#272727] max-lg:text-[28px] max-sm:text-[36px]'>{New.detailsNewsDto.title}</h1>
        </div>
        <div className='flex justify-end gap-2'>
            <Tags name={New.detailsNewsDto.newsCatregoryName}/>
        </div>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row-reverse gap-2'>
                <Calendar03Icon color='black'/>
                <span className='text-[#272727] font-[600] dark:text-white text-[16px]'> {(jMoment(New.detailsNewsDto.insertDate).locale('fa').format('jYYYY jMMMM jD'))} </span>
            </div>
            <div className='flex flex-row-reverse gap-2'>
                <ViewIcon color='black'/>
                <span className='text-[#272727] font-[600] text-[16px] dark:text-white'>{New.detailsNewsDto.currentView}</span>
            </div>
        </div>
        <div className='flex flex-col gap-6'>
            <div className='font-[700] text-[16px] text-right text-[#787878] dark:text-white'>منتشر کننده</div>
            <div className='flex flex-row-reverse mr-2 justify-between'>
                <Profile name={New.detailsNewsDto.addUserFullName} img={Image}/>
                <Options News={New}/>
            </div>
        </div>
    </div>
  )
}

export default RightDiv