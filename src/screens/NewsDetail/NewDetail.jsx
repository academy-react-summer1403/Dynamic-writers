import React, { Fragment,useState,useEffect } from 'react'
import RightDiv from '../../components/NewsDetail/RightDiv'
import LeftDiv from '../../components/NewsDetail/LeftDiv'
import GetNewsById from '../../core/services/api/News/GetNewsById'
import {useParams} from 'react-router-dom'
import Loading from '../../core/services/common/Loading/loading'

const NewDetail = () => {
  const [News, setNews] = useState([])
  const {id}=useParams();
  const[loading,setLoading]=useState(false)

  const GetNews=async(id)=>{
    let New =await GetNewsById(id)
    setLoading(true)
    setNews(New)
  }
  useEffect(() => {
    GetNews(id)
  }, [])

  if(loading==false){
    return <Loading/>
  }
  return (
<div className='flex w-[100%] justify-evenly p-5 pt-20 gap-5 flex-row-reverse max-lg:flex-row-reverse max-md:flex-col max-xl:justify-evenly max-2xl:justify-evenly'>
      <RightDiv New={News}/>
      <LeftDiv New={News}/>
    </div>
   
    
  )
}

export {NewDetail}