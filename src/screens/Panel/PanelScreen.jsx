import React,{useState,useEffect} from 'react'
import Panel from '../../components/Panel/Panel'
import Loading from '../../core/services/common/Loading/loading'
import GetProfileInfo from '../../core/services/api/User/GetProfileInfo'
import { motion } from "framer-motion"

const PanelScreen = () => {
  const [profile, setProfile] = useState('')
  const[loading,setLoading]=useState(false)
  const [Rerender,setRerender]=useState(false)

  const getProfile=async()=>{
    const Prof=await GetProfileInfo()
    
    setProfile(Prof)
    setLoading(true)
  }
  useEffect(() => {
    getProfile()
  }, [Rerender])
  
  if(loading==false){
    return <Loading/>
  }
  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className='w-full pt-[10px]' >
        <Panel profile={profile} setRerender={setRerender}/>
    </motion.div>
  )
}

export default PanelScreen