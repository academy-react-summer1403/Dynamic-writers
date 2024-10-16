import React,{useState} from 'react'
import { MoreVerticalCircle01Icon,Tick03Icon,Delete02Icon,CheckmarkCircle02Icon,ImageAdd02Icon } from 'hugeicons-react'
import { Form,useOutletContext } from 'react-router-dom'

const AddProfileImage = () => {
  const profile=useOutletContext();
  const [keyNum, setkeyNum] = useState(-1)
  const [Flag, setFlag] = useState(false)

  const handleClick=(index)=>{
    if(Flag==false){
      setkeyNum(index);
      setFlag(true)
    }else{
      setkeyNum(-1);
      setFlag(false)
    }
  }

  return (
    <div className='flex flex-row flex-wrap gap-5 justify-end overflow-y-scroll max-h-[500px] p-[40px]'>
        
      <label className='w-[235px] h-[235px] rounded-[16px] overflow-hidden shrink-0 flex flex-col justify-center items-center border-[4px] border-[#E4E4E4] cursor-pointer inline-block' htmlFor='choiceImage'>
          <ImageAdd02Icon color='blue'/>
          <input type='file' id='choiceImage' className='hidden' accept='image/*'/>
          <span>اضافه کردن عکس</span>
          <span className='text-[14px] text-[#787878]'>اندازه فریم ( 236*236 )</span>
      </label>

      {profile.userImage.map((value,index)=>{
        return <div className='w-[235px] h-[235px] rounded-[16px] overflow-hidden shrink-0 relative' key={index}>
                  <div className='w-[32px] h-[32px] rounded-[100%] absolute z-10 top-2 right-12 flex justify-center items-center bg-[#17C964]'>
                    <Tick03Icon color='white'/>
                  </div>
                  <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[100%] absolute top-2 right-2 z-10 bg-white cursor-pointer' onClick={()=>handleClick(index)}>
                    <MoreVerticalCircle01Icon/>
                  </div>
                  <div className='absolute top-11 right-2'>
                    {keyNum==index && <ul className='w-[200px] h-[112px] bg-white z-30 rounded-[16px] p-[10px] m-0 list-none relative border-[#E4E4E4] overflow-hidden border-[3px]'>
                      <CheckmarkCircle02Icon color='green' className='w-[24px] h-[24px] absolute top-4 right-2'/>
                      <li className='w-[100%] h-[50%]  leading-9 text-right pr-7 cursor-pointer'>انتخاب عکس اصلی</li>
                      <Delete02Icon color='red' className='w-[24px] h-[24px] absolute top-[69px] right-2'/>
                      <li className='w-[100%] h-[50%] border-t-1 border-[#E4E4E4] leading-[45px] text-right pr-7 cursor-pointer'>حذف عکس</li>
                    </ul>}
                  </div>
                  
                  <img className='w-[100%] h-[100%] bg-slate-500' src={value.puctureAddress}/>
                </div>
      })}

    </div>
  )
}

export default AddProfileImage