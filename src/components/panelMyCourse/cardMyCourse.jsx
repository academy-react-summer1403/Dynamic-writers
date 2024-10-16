import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { GetMyCource } from "../../core/services/api/Panel/getMyCource/getMyCource";



const CardMyCourse = () => {

//   const {id , courseTitle , fullName , termName , cost , paymentStatus , imaged} = props;

  const [dataCources, setDataCources] = useState([]);

  const reData = async()=> {
       const params = {
             Count: 5,
       }

       const courcesIs = await GetMyCource(params);
       setDataCources(courcesIs.listOfMyCourses);
  }

  useEffect(() => {
    reData();
  },[])

  return(

<Table aria-label="Example static collection table" dir='rtl'>

      <TableHeader>
        <TableColumn className='font-medium text-base mt-3'>#</TableColumn>
        <TableColumn className='font-medium text-base mt-3'>نام دوره</TableColumn>
        <TableColumn className='font-medium text-base mt-3'>استاد دوره</TableColumn>
        <TableColumn className='font-medium text-base mt-3'>شروع دوره</TableColumn>
        <TableColumn className='font-medium text-base mt-3'>قیمت دوره</TableColumn>
        <TableColumn className='font-medium text-base mt-3'>وضعیت پرداختی</TableColumn>
        <TableColumn className='font-medium text-base mt-3'></TableColumn>
        <TableColumn className='font-medium text-base mt-3'></TableColumn>
      </TableHeader>

      <TableBody id='list'>

       {dataCources.map((el , index) => <TableRow key={index} id='card' className='hover:bg-slate-100 hover:cursor-pointer rounded-xl' >

          <TableCell><div  className='rounded-lg border-1.5 relative bg-slate-500' style={{width: "104px" , height: "72px" , top: "3px" , overflow: "hidden"}}> <img className='block' style={{height:"100%"}} src={el.tumbImageAddress} alt="" /> </div> </TableCell>
          <TableCell  className='font-bold text-xl'>{el.courseTitle}</TableCell>
          <TableCell className='font-medium text-base'>{el.fullName.replace('-', ' ')}</TableCell>
          <TableCell className='font-medium text-base mr-5'>{el.termName}</TableCell>
          <TableCell className='font-medium text-xl mr-8'>{(parseInt(el.cost).toLocaleString('en-US'))}</TableCell>
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
                 {el.paymentStatus}
          </TableCell>

          <TableCell  className=''>
            <div className='cursor-pointer w-6 h-6'><img src="" alt="" /></div>
          </TableCell>
          
          <TableCell  className=''>
            <div className='cursor-pointer w-6 h-6'> <img src="" alt="" /> </div>
          </TableCell>

        </TableRow>)}

      </TableBody>
    </Table>
  );
}

export default CardMyCourse