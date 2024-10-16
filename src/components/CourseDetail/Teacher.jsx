import React, { useEffect,useState } from 'react'

const Teacher = ({image,name,ability}) => {
    const [text, settext] = useState('')
    useEffect(()=>{
        let text = "";
        for (const item of ability) {
            text += item; 
            settext(text)
            if (item !== ability[ability.length - 1]) {
                text += ","; 
                settext(text)
            }
        }

    },[])
  return (
    <div className='flex flex-row-reverse gap-4'>
        <div><img className='w-[56px] h-[56px] rounded-[100%] bg-[#D9D9D9]' src={image}/></div>
        <div className='flex flex-col flex-nowrap'>
            <div className='text-[20px] font-[700] text-[#272727] text-right'>{name}</div>
            <div className='text-[16px] font-[500] text-[#787878] text-right'>{text}</div>
        </div>
    </div>
  )
}

export default Teacher