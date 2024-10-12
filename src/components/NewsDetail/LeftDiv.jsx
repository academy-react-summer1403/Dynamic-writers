import React, { useEffect,useState } from 'react'
import Rate from '../../common/Rate/Rate'
const LeftDiv = ({New}) => {
  const [text, setText] = useState(New.detailsNewsDto.describe);
  const [firstPart, setFirstPart] = useState('');
  const [secondPart, setSecondPart] = useState('');

  useEffect(() => {
    textCalc();
  },[])

  function textCalc(){
    if (text.length > 0) {

      const firstPartLength = Math.ceil(text.length / 3);

      const lastIndexOfDot = text.lastIndexOf('.', firstPartLength);

      const splitIndex = lastIndexOfDot !== -1 ? lastIndexOfDot + 1 : firstPartLength;

      setFirstPart(text.slice(0, splitIndex).trim()); 
      setSecondPart(text.slice(splitIndex).trim()); 
    }
  }
  return (
    <div className='w-[50%] flex gap-10 flex-col max-sm:w-[100%] max-md:w-[100%]  max-lg:w-[45%]  max-2xl:w-[700px] max-xl:w-[700px]'>
        <img className='w-[100%] h-[460px] bg-[#4DBFFF] rounded-[24px]' src={New.detailsNewsDto.currentImageAddress}/>
        <div className='text-[#272727] font-[700] text-[20px] text-right leading-[30px]' style={{direction:"rtl"}}>
          <p className='text-justify'>{firstPart}</p>
          <br/>
          <p className='text-justify'>{secondPart}</p>
        </div>
        <Rate RateNews={New.detailsNewsDto.currentUserRateNumber} Flag={New.detailsNewsDto.currentUserSetRate} id={New.detailsNewsDto.id}/>
        <div className='font-[700] text-[50px] text-[#272727] text-right'>نظرات</div>

        {/* Put Comment <Comment/> */}
    </div>
  )
}

export default LeftDiv