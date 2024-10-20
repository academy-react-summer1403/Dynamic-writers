import { Button } from '@nextui-org/react'
import React from 'react'
import { useNavigate } from 'react-router'
import round3 from '../../../assets/round3.png'
import round4 from '../../../assets/round4.png'


const Error400 = () => {
  const navigate = useNavigate()

  return (
    <div className='flex w-dvw h-fit py-32'>
      <div className='mx-auto h-fit w-fit flex gap-6 font-semibold flex-col items-center relative'>
        <span className='text-[30px] font-semibold text-blue-500' dir='rtl'> <h5 className='text-sm rotate-12 w-fit'> 400 </h5> تبریک شما ما رو شکست دادی </span>
        <span className='text-blue-500 w-60 text-base text-center'> درخواست شما نامعتبر است و تیم ما همچین چیزی را تا بحال به خود ندیده است </span>
        <div className='flex gap-5'>
            <Button onClick={() => navigate('/')} className='font-semibold text-sm text-white bg-blue-500 rounded-full'> صفحه اصلی </Button>
        </div>
        <img src={round3} className='absolute -left-36 -top-9' style={{width: '80px', height: '119px'}} />
        <img src={round4} className='absolute -right-36 bottom-0' style={{width: '79px', height: '78px'}} />
      </div>
    </div>
  )
}

export default Error400
