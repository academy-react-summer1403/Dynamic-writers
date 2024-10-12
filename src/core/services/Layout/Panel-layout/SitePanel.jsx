import React from 'react'
import Bahr from '../../../../assets/Bahr.png' 
import Bahr2 from '../../../../assets/Bahr2.png' 
import { Button } from '@nextui-org/react'
import { Book02Icon, BookBookmark02Icon, DashboardCircleIcon, DashboardCircleSettingsIcon, FileBookmarkIcon, Logout03Icon, MoneySend01Icon, MoneySend02Icon, TimeSetting03Icon, UserEdit01Icon, UserSettings01Icon } from 'hugeicons-react'
import { useNavigate } from 'react-router-dom'

const SitePanel = () => {

  const navigate = useNavigate()

  const handleClickButton = (event) => {
    event.stopPropagation()
  }

  return (
    <div className='bg-white rounded-2xl flex flex-col py-7 px-6 justify-between' style={{width: '276px', height: '976px'}}>
      <div className='flex flex-col gap-12'>
        <div className='flex flex-row-reverse justify-between gap-3 items-center'>
          <img src={Bahr} className='size-10' />
          <img src={Bahr2} className='h-8 w-48' />
        </div>

        <div className='flex flex-col w-full h-fit gap-10 justify-center' dir='rtl'>
          <div className='flex flex-col w-full h-fit gap-3 justify-center'>
              <h2 className='text-gray-600 font-semibold'> عمومی </h2>
              <input className='hidden inputDash' id='dash1' name='dash' type='radio' defaultChecked />
              <label htmlFor='dash1' className='labelDash w-full '> <Button onClick={(e) => handleClickButton(e)} className='buttonDash bg-white w-full p-2 rounded-full flex flex-row-reverse text-right text-lg justify-end gap-4 font-semibold'> داشبرد <DashboardCircleIcon /> </Button> </label> 
              <input className='hidden inputDash' id='dash2' name='dash' type='radio' />
              <label htmlFor='dash2' className='labelDash w-full '> <Button onClick={(e) => handleClickButton(e)} className='buttonDash bg-white w-full p-2 rounded-full flex flex-row-reverse text-right text-lg justify-end gap-4 font-semibold'> دوره من <Book02Icon /> </Button> </label>
              <input className='hidden inputDash' id='dash3' name='dash' type='radio' />
              <label htmlFor='dash3' className='labelDash w-full '> <Button onClick={(e) => handleClickButton(e)} className='buttonDash bg-white w-full p-2 rounded-full flex flex-row-reverse text-right text-lg justify-end gap-4 font-semibold'> رزرو من <TimeSetting03Icon /> </Button> </label>
              <input className='hidden inputDash' id='dash4' name='dash' type='radio' />
              <label htmlFor='dash4' className='labelDash w-full '> <Button onClick={(e) => handleClickButton(e)} className='buttonDash bg-white w-full p-2 rounded-full flex flex-row-reverse text-right text-lg justify-end gap-4 font-semibold'> علاقه مندی دوره <BookBookmark02Icon /> </Button> </label>
              <input className='hidden inputDash' id='dash5' name='dash' type='radio' />
              <label htmlFor='dash5' className='labelDash w-full '> <Button onClick={(e) => handleClickButton(e)} className='buttonDash bg-white w-full p-2 rounded-full flex flex-row-reverse text-right text-lg justify-end gap-4 font-semibold'> علاقه مندی مقالات <FileBookmarkIcon /> </Button> </label>
              <input className='hidden inputDash' id='dash6' name='dash' type='radio' />
              <label htmlFor='dash6' className='labelDash w-full '> <Button onClick={(e) => handleClickButton(e)} className='buttonDash bg-white w-full p-2 rounded-full flex flex-row-reverse text-right text-lg justify-end gap-4 font-semibold'> پروفایل <UserEdit01Icon /> </Button> </label>     
          </div>
          <div className='flex flex-col w-full h-fit gap-3 justify-center'>
            <h2 className='text-gray-600 font-semibold'> مالی </h2>
            <Button onClick={() => navigate('')} className='hover:bg-blue-700 hover:text-white bg-white w-full p-2 rounded-full flex flex-row-reverse text-right text-lg justify-end gap-4 font-semibold'> پرداخت ها <MoneySend02Icon /> </Button>
          </div>
        </div>
      </div>

      <div className='flex w-full h-fit gap-4 flex-col'>
        <Button onClick={() => navigate('')} className='hover:bg-blue-700 hover:text-white bg-white border w-full p-2 rounded-full flex text-right text-lg justify-end gap-4 font-semibold'>  حساب‌های کابری <UserSettings01Icon /> </Button>
        <Button onClick={() => navigate('')} className='hover:bg-red-500 hover:text-white bg-white border text-red-500 w-full p-2 rounded-full flex text-right text-lg justify-end gap-4 font-semibold'> خروج از حساب <Logout03Icon /> </Button>
      </div>
    </div>
  )
}

export default SitePanel
