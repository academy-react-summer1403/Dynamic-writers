import React, { useEffect , useState } from 'react'
import searching from '../../../assets/search.png'
import searching2 from '../../../assets/search2.png'
import date from '../../../assets/date.png'
import 'react-circular-progressbar/dist/styles.css';
import {Pagination} from "@nextui-org/react";
import { GetMyCource } from "../../../core/services/api/Panel/getMyCource/getMyCource";
import CardMyCourse from '../cardMyCourse';

const MyCourse = () => {

  return (
    <div className='min-w-full rounded-xl mx-auto my-1'>
      <div className='rounded-xl mb-3' style={{direction: "rtl"}}>

          <span className='block iranSans my-6 mr-4 text-3xl font-bold text-right' style={{width: "108px" , height: "45px" , lineHeight: "45.09px"}}>دوره من</span>

          <div className='min-w-full h-20 rounded-xl flex gap-3 mr-4'>

            <div className='relative' style={{width: "292px" , height: "80px"}}>
              <label htmlFor="reSearch" className='block text-base font-medium' style={{width: "121px" , height: "23px"}}><img src={searching} className='inline-block h-6 w-6 ml-1' alt="" /> جست‌جو دوره</label>
              <input type="search" id='reSearch' className='mt-2 rounded-2xl bg-gray-300 outline-none placeholder-gray-600' style={{width: "289px" , height: "48px" , textIndent: "10px"}} name='searched' placeholder='جست جو کنید ...' />
              <button className='rounded-2xl absolute left-0' style={{width: "48px" , height: "48px" , backgroundColor: "#3772ff" , marginRight: "240px" , marginTop: "8px"}}><img className='block mx-auto' src={searching2} alt="" /></button>
            </div>

            <div className='relative' style={{width: "292px" , height: "80px"}}>
              <label htmlFor="reSearch" className='block text-base font-medium' style={{width: "121px" , height: "23px"}}><img src={date} className='inline-block h-6 w-6 ml-1' alt="" /> تاریخ برگزاری</label>
              <input type="date" id='reSearch' className='mt-2 rounded-2xl bg-gray-300 outline-none' style={{width: "289px" , height: "48px" , textIndent: "10px"}} name='searched' />
            </div>

          </div>

      </div>

      <div className=" rounded-xl mx-auto relative" style={{ width: '1096px', height: '681px' }}>

        {/* {dataCources.map((el , index) => <CardMyCourse key={index} id={el.studentId}
         courseTitle={el.courseTitle} fullName={el.fullName} 
         termName={el.termName} cost={el.cost} paymentStatus={el.paymentStatus} imaged={el.tumbImageAddress}
         />)} */}

         <CardMyCourse />

    <Pagination className='mx-auto mt-6' style={{width: "322px" , height: "48px"}} isCompact showControls total={10} initialPage={1} />
    </div>
    </div>
  )
}

export default MyCourse