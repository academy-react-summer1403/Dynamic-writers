import React from 'react'
import searching from '../../assets/search.png'
import searching2 from '../../assets/search2.png'
import date from '../../assets/date.png'
import cheshm from '../../assets/cheshm.png'
import parcham from '../../assets/parcham.png'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import {Pagination, PaginationItem, PaginationCursor} from "@nextui-org/react";

const MyCourseRout = (props) => {
  const {id , courseTitle , fullName , termName , cost , paymentStatus , imaged} = props;
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

      <div className="bg-slate-50 rounded-xl mx-auto relative" style={{ width: '1096px', height: '681px' }}>

        <div className='h-12 rounded-2xl m-auto relative flex pr-1' style={{width: "1064px" ,backgroundColor: "#F0F0F0" , top: "15px", gap: "110px" , direction: "rtl"}}>
          <div className='font-medium text-base mt-3'>#</div>
          <div className='font-medium text-base mt-3'>نام دوره</div>
          <div className='font-medium text-base mt-3'>استاد دوره</div>
          <div className='font-medium text-base mt-3'>شروع دوره</div>
          <div className='font-medium text-base mt-3'>قیمت دوره</div>
          <div className='font-medium text-base mt-3'>وضعیت پرداختی</div>
        </div>

        <div id='list' className='mt-6 m-auto rounded-xl h-3/4' style={{width:"1064px"}}>

            <div id='card' className='rounded-xl h-20 m-auto flex gap-4 relative hover:bg-slate-100 hover:cursor-pointer' style={{width: "99.5%" , direction: "rtl"}}>

              <div id='photo' className='rounded-lg border-1.5 relative bg-slate-500' style={{width: "104px" , height: "72px" , top: "3px" , overflow: "hidden"}}>
                <img className='block' style={{height: "100%"}} src={imaged} alt="" />
              </div>

              <div id='isName' className='font-bold text-xl' style={{lineHeight: "75px"}}>{courseTitle}</div>
              <div id='isName' className='font-medium text-base' style={{lineHeight: "75px"}}>{fullName}</div>
              <div id='isName' className='font-medium text-base mr-5' style={{lineHeight: "75px"}}>{termName}</div>
              <div id='isName' className='font-medium text-xl mr-8' style={{lineHeight: "75px"}}>{cost}</div>

              <div className='flex text-base font-bold' style={{lineHeight: "75px", textIndent: "5px"}}>
                  <div style={{ width: "48px", height: "48px" , marginTop: "16px", marginRight: "55px"  }}>
                    <CircularProgressbar 
                      value={66}
                      text={`${66}%`}
                      styles={buildStyles({
                        textColor: "#FFC619",
                        textSize: "30px",
                        pathColor: "#FFC619",
                        trailColor: "#f0f0f0"
                      })}
                    />
                </div>
                 {paymentStatus}
              </div>

              <div className='cursor-pointer' style={{width: "24px" , height: "24px" , marginTop: "25px" , marginRight: "50px"}}><img src={cheshm} alt="" /></div>
              <div className='cursor-pointer' style={{width: "24px" , height: "24px" , marginTop: "25px"}}> <img src={parcham} alt="" /> </div>

            </div>

        </div>

        <Pagination className='mx-auto mt-6' style={{width: "322px" , height: "48px"}} isCompact showControls total={10} initialPage={1} />

      </div>
    </div>
  )
}

export default MyCourseRout
