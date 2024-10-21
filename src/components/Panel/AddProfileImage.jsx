import React,{useEffect, useState} from 'react'
import { MoreVerticalCircle01Icon,Tick03Icon,Delete02Icon,CheckmarkCircle02Icon,ImageAdd02Icon } from 'hugeicons-react'
import { useOutletContext } from 'react-router-dom'
import UpdateImageProf from '../../core/services/api/Panel/UpdateImageProf';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChooseProfilePic from '../../core/services/api/Panel/ChooseProfilePic';
import DeleteImage from '../../core/services/api/Panel/DeleteImage';
const AddProfileImage = () => {
  
  const [profile,setRerender]=useOutletContext();
  const [keyNum, setkeyNum] = useState(-1)
  const [Flag, setFlag] = useState(false)
  const [ImageProf, setImageProf] = useState(profile.currentPictureAddress)
  const notifySuccess = (massage) => toast.success(massage,{position:"top-center",theme:"dark"});

  const handleClick=(index)=>{
    if(Flag==false){
      setkeyNum(index);
      setFlag(true)
    }else{
      setkeyNum(-1);
      setFlag(false)
    }
  }
  const DeleteImageProf=async(ImageId)=>{
    setkeyNum(-1)
    setFlag(false)
    const massage=await DeleteImage(ImageId)
    notifySuccess(massage.message)
    setRerender(prev => !prev); 
  }
  const AddImage=async (image)=>{
    const massage=await UpdateImageProf(image)
    notifySuccess(massage.message)
    setRerender(prev => !prev); 
  }
  const chooseProfile=async(ImageId)=>{
    setkeyNum(-1)
    setFlag(false)
    const massage=await ChooseProfilePic(ImageId)
    notifySuccess(massage.message)
    setImageProf(ImageId)
    setRerender(prev => !prev); 
  }
 
  
  return (
    <div className='flex flex-row flex-wrap gap-5 justify-end overflow-y-scroll max-h-[1000px] p-[40px]'>
        
      
      {profile.userImage.map((value,index)=>{
        return <div className='w-[148px] h-[148px] md:w-[235px] md:h-[235px]  rounded-[16px] overflow-hidden shrink-0 relative' key={index}>
                  {(ImageProf==value.puctureAddress || ImageProf==value.id) && 
                      <div className='w-[32px] h-[32px] rounded-[100%] absolute z-10 top-2 right-12 flex justify-center items-center bg-[#17C964]'>
                        <Tick03Icon color='white'/>
                      </div>
                  }
                  
                  <div className='flex justify-center dark:bg-slate-900 items-center w-[32px] h-[32px] rounded-[100%] absolute top-2 right-2 z-10 bg-white cursor-pointer' onClick={()=>handleClick(index)}>
                    <MoreVerticalCircle01Icon/>
                  </div>
<<<<<<< HEAD
                  <div className='absolute top-11 md:right-2 right-0'>
                    {keyNum==index && <ul className='md:w-[200px] h-[112px] w-[85%] bg-white z-30 rounded-[16px] p-[10px] m-0 list-none relative border-[#E4E4E4] overflow-hidden border-[3px]'>
                      <CheckmarkCircle02Icon color='green' className='md:w-[24px] w-[15px] md:h-[24px] h-[15px] absolute md:top-4 top-5 md:right-2 right-0'/>
                      <li className='w-[100%] h-[50%] md:text-[16px] text-[12px] whitespace-nowrap leading-9 text-right pr-7 cursor-pointer' onClick={()=>chooseProfile(value.id)}>انتخاب عکس اصلی</li>
                      <Delete02Icon color='red' className='md:w-[24px] w-[15px] md:h-[24px] h-[15px] absolute md:top-[69px] top-[72px] md:right-2 right-0' />
                      <li className='w-[100%] h-[50%]  md:text-[16px] text-[12px]  border-t-1 border-[#E4E4E4] leading-[45px] text-right md:pr-7 pr-4 cursor-pointer' onClick={()=>DeleteImageProf(value.id)}>حذف عکس</li>
=======
                  <div className='absolute top-11 right-2'>
                    {keyNum==index && <ul className='w-[200px] h-[112px] bg-white dark:bg-slate-900 dark:border-none z-30 rounded-[16px] p-[10px] m-0 list-none relative border-[#E4E4E4] overflow-hidden border-[3px]'>
                      <CheckmarkCircle02Icon color='green' className='w-[24px] h-[24px] absolute top-4 right-2'/>
                      <li className='w-[100%] h-[50%] leading-9 text-right pr-7 cursor-pointer' onClick={()=>chooseProfile(value.id)}>انتخاب عکس اصلی</li>
                      <Delete02Icon color='red' className='w-[24px] h-[24px] absolute top-[69px] right-2' />
                      <li className='w-[100%] h-[50%] border-t-1 dark:text-red-500 border-[#E4E4E4] leading-[45px] text-right pr-7 cursor-pointer' onClick={()=>DeleteImageProf(value.id)}>حذف عکس</li>
>>>>>>> 237a49f5cfdfadee0edc01115d7540ed0ac1d852
                    </ul>}
                  </div>
                  
                  <img className='w-[100%] h-[100%] bg-slate-500' src={value.puctureAddress}/>
                </div>
      })}
      <label className='rounded-[16px] overflow-hidden shrink-0 flex flex-col justify-center items-center border-[4px] w-[148px] h-[148px] border-[#E4E4E4] cursor-pointer md:w-[235px] md:h-[235px] ' htmlFor='choiceImage'>
          <ImageAdd02Icon color='blue'/>
          <input type='file' id='choiceImage' className='hidden' accept='image/*' onChange={(el)=>AddImage(el.target.files[0])}/>
          <span className='text-[14px] md:text-[16px]'>اضافه کردن عکس</span>
          <span className='text-[14px] text-[#787878]'>اندازه فریم ( 236*236 )</span>
      </label>

      <ToastContainer/>
    </div>
  )
}

export default AddProfileImage