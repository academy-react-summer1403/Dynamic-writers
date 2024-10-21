import React,{useState,useEffect} from 'react'
import { ImageAdd02Icon,SmartPhone01Icon,AccountSetting03Icon,Mail01Icon,PencilEdit01Icon } from 'hugeicons-react'
import { NavLink, Outlet,useNavigate } from 'react-router-dom'
import UserDetailsWithId from '../../core/services/api/User/UserDetailsWithId'


const Panel = ({profile,setRerender}) => {
    const navigate=useNavigate();
    const [Text, setText] = useState('')

   {/*for roles*/}
    // const getRole=async()=>{
    //     const Prof=await UserDetailsWithId(id)
    //     let text = "";
    //     for (const item of profile.roles) {
    //         text += item.roleName; 
    //         setText(text)
    //         if (item.roleName !== profile.roles[profile.roles.length - 1].roleName) {
    //             text += ","; 
    //             setText(text)
    //         }
    //     }
    // }

    // useEffect(() => {
    //     getRole()
    // }, [])
    
    return (
    <div className='md:w-[100%] lg:w-[100%]  rounded-[16px] border-4 border-blue-500 dark:border-blue-900 bg-white h-auto mx-auto mt-[30px] overflow-hidden '>
        <div className='w-[100%] md:h-[113px] dark:bg-blue-900 h-[100px] bg-[#2A67F9]'></div>
        <div className='rounded-[100%] w-[128px] h-[128px] border-[7px] dark:bg-blue-900 bg-[#2A67F9] absolute md:top-[85px] top-[70px] right-8 overflow-hidden'>
            <img className='w-[100%] h-[100%] bg-purple-400 dark:bg-blue-800' src={profile.currentPictureAddress}/>
            
        </div>
        <div className='border-[3px] border-white bg-[#2A67F9] w-[24px] h-[24px] absolute md:top-[185px] top-[172px] right-12 flex justify-center items-center cursor-pointer rounded-[100%]' >
                <ImageAdd02Icon color='white' size={15} onClick={()=>navigate("AddProfileImage")}/>
         </div>
         <div className='flex flex-col pr-10 items-end justify-center gap-4 h-[500px] md:flex-row-reverse md:flex-wrap md:h-[300px]'>
            <div className='w-[50%] h-[200px] flex flex-col items-end gap-5'>
                <div className='font-[700] text-[32px] text-[#272727] dark:text-white text-right'><span className='font-[500] text-[16px] dark:text-white text-[#787878]'> </span>{profile.lName} {profile.fName}</div>
                <div className='flex flex-row-reverse gap-3 w-[100%] flex-wrap items-end justify-start'><div className='flex flex-row gap-2'>{profile.phoneNumber} <SmartPhone01Icon color='gray'/></div><div className='flex flex-row gap-2'>{profile.nationalCode}<AccountSetting03Icon color='gray'/></div><div className='flex flex-row-reverse gap-3'><div className='flex flex-row gap-2'>{profile.email}<Mail01Icon color='gray'/></div><span className='cursor-pointer'><PencilEdit01Icon color='blue' onClick={()=>navigate("profileInfo")}/></span></div></div>
            </div>
            <div className='w-[40%] h-[200px] flex flex-col items-end gap-5'>
                <div className='font-[700] text-[16px] text-[#787878]'>درباره من</div>
                <div className='font-[700] text-[16px] text-[#272727] dark:text-white text-justify'>{profile.userAbout}</div>
            </div>
        </div>

        <div className='w-[100%] gap-4 h-12 flex flex-row-reverse justify-start pr-10 overflow-x-scroll scrollbar-hide md:pr-[60px]'>
            <NavLink to="/layoutPanel/profile" end className={({isActive})=> `${isActive ?  "border-b-5 border-[#3772FF] ":"border-0 text-[#787878]"} whitespace-nowrap h-full border-solid text-center font-[700] text-[20px] p-1`}>اطلاعات شخصی</NavLink>
            <NavLink to="/layoutPanel/profile" end className={({isActive})=> `${isActive ?  "border-b-5 border-[#3772FF] ":"border-0 text-[#787878]"} whitespace-nowrap h-full border-solid text-center font-[700] text-[20px] p-1`}>اطلاعات شخصی</NavLink>
            <NavLink to="/layoutPanel/profile/AddProfileImage" end className={({isActive})=> `${isActive ?  "border-b-5  border-[#3772FF] ":"border-0 text-[#787878] "}whitespace-nowrap h-full border-solid  text-center font-[700] text-[20px]  p-1`}>عکس پروفایل</NavLink>
            <NavLink to="/layoutPanel/profile/AddAddress" end className={({isActive})=> `${isActive ?  "border-b-5  border-[#3772FF]":"border-0 text-[#787878]"} whitespace-nowrap h-full border-solid  text-center font-[700] text-[20px]  p-1`}>آدرس سکونت</NavLink>
            <NavLink to="/layoutPanel/profile/Linkes" end className={({isActive})=> `${isActive ?  "border-b-5 border-[#3772FF]":"border-0 text-[#787878] "} whitespace-nowrap h-full border-solid text-center font-[700] text-[20px]  p-1`}>لینک ها</NavLink>
        </div>
        <div className='border-t-1 dark:border-gray-500'>
            <Outlet context={[profile,setRerender]}/>
        </div>
    </div>
  )
}

export default Panel