import React from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import {TableRow, TableCell} from "@nextui-org/react";


const CardMyCourse = () => {
  return(
     <TableRow key="1" id='card' className='hover:bg-slate-100 hover:cursor-pointer rounded-xl' >

          <TableCell><div  className='rounded-lg border-1.5 relative bg-slate-500' style={{width: "104px" , height: "72px" , top: "3px" , overflow: "hidden"}}> <img className='block' style={{height:"100%"}} src="" alt="" /> </div> </TableCell>
          <TableCell  className='font-bold text-xl'>ری اکت</TableCell>
          <TableCell className='font-medium text-base'>محسن اسفندیاری</TableCell>
          <TableCell className='font-medium text-base mr-5'>25 اردیبهشت 1403</TableCell>
          <TableCell className='font-medium text-xl mr-8'>1،800،000تومان</TableCell>
          <TableCell className='flex text-base font-bold' style={{lineHeight: "75px", textIndent: "5px"}}>
            <div style={{ width: "48px", height: "48px" , marginTop: "16px"  }}>
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
                پرداخت شده
          </TableCell>

          <TableCell  className=''>
            <div className='cursor-pointer w-6 h-6'><img src={cheshm} alt="" /></div>
          </TableCell>
          
          <TableCell  className=''>
            <div className='cursor-pointer w-6 h-6'> <img src={parcham} alt="" /> </div>
          </TableCell>

        </TableRow>
  );
}

export default CardMyCourse