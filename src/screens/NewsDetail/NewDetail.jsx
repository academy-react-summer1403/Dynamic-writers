import React, { Fragment,useState,useEffect } from 'react'
import RightDiv from '../../components/NewsDetail/RightDiv'
import LeftDiv from '../../components/NewsDetail/LeftDiv'
import GetNewsById from '../../core/services/api/News/GetNewsById'

const NewDetail = () => {
  const [News, setNews] = useState([])

  const GetNews=async(id)=>{
    let New =await GetNewsById(id)
    console.log(New)
    setNews(New)
  }
  useEffect(() => {
    GetNews('eed400fe-4e77-ef11-b6da-8f406465b439')
  }, [])
  
  return (
    <div className='flex flex-row-reverse w-[100%]  justify-evenly pt-20'>
        <RightDiv New={News}/>
        <LeftDiv New={News}/>
    </div>
    
  )
}

export {NewDetail}