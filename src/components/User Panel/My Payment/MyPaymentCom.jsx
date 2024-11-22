import { Field, Formik, Form } from 'formik'
import { Calendar02Icon, Search01Icon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import { Button, Pagination, Select, SelectItem } from '@nextui-org/react';
import { getMyReserves } from '../../../core/services/api/Panel/MyReserve/getMyReserves';
import MyCourseTable from '../My Courses/MyCourseTable';
import MyPaymentTable from './Table/MyPaymentTable';
import GetAllPayment from '../../../core/services/api/Payment/GetAllPayment';

const MyReserveCom = () => {

    const [myPayment, setMyPayment] = useState([])
    
    const [isLoading, setIsLoading] = useState(true)
    const [render, setrender] = useState(false)

    useEffect(() => {
      getData()
    }, [])

    useEffect(() => {
      getData()
    }, [render])
    
    const getData=async()=>{
      const data = await GetAllPayment()
      if(data) {
        setMyPayment(data)
      }
      setIsLoading(false)
    }

  return (
    <div className='w-full flex p-2 flex-col gap-3 rounded-2xl h-full' dir='rtl'>
        <div className='flex flex-col w-full h-full gap-10'>
        <h2 className='text-[28px] font-bold mt-8'> پرداخت های من </h2>
        
      </div>
      <MyPaymentTable
        MyPayment={myPayment}
        isLoading={isLoading}
        renderMainPage={setrender}
      />
    </div>
  )
}

export default MyReserveCom
