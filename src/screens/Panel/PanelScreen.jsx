import React,{useState,useEffect} from 'react'
import Panel from '../../components/Panel/Panel'
import Loading from '../../core/services/common/Loading/loading'
import GetProfileInfo from '../../core/services/api/User/GetProfileInfo'
import { useParams } from 'react-router-dom'
import UserDetailsWithId from '../../core/services/api/User/UserDetailsWithId'
const PanelScreen = () => {
  const [profile, setProfile] = useState('')
  const[loading,setLoading]=useState(false)
  const {id}=useParams();


  const getProfile=async()=>{
    // const Prof=await GetProfileInfo()
    const Prof=await UserDetailsWithId(id)
    setProfile(Prof)
    setLoading(true)
  }
  useEffect(() => {
    getProfile()
  }, [])
  if(loading==false){
    return <Loading/>
  }
  return (
    <div>
        <Panel profile={profile}/>
    </div>
  )
}

export default PanelScreen