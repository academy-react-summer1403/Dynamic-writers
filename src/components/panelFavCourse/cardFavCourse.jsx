import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { GetFavCourse } from "../../core/services/api/Panel/getFavCourse/getFavCourse";
import { DelFav } from "../../core/services/api/Panel/deleteFavCourse/delFavCourse";
import { Pagination } from "@nextui-org/pagination";
import Parcham from '../../assets/parcham.png'
import ViewCardFav from "./viewFav";
import Canceltion from "./cancelFav";

const CardFavCourses = (props) => {

  const {countSearch} = props;

  const [dataFavCourses, setDataFavCourses] = useState([]);
  const [total, setTotal] = useState();
  const [searchedIs, setSearchedIs] = useState()
//   const [slider, setSlider] = useState(1);

  const reData = async()=> {
       // const params = {
       //       Count: 7,
       // }

       const courcesIs2 = await GetFavCourse();
       setDataFavCourses(courcesIs2.favoriteCourseDto);
       setTotal(Number(courcesIs2.totalCount / 5));
       setSearchedIs(countSearch)
  }

  const deletedFav = async(favoriteId) => {

       const formData = new FormData();
       formData.append('CourseFavoriteId', favoriteId);
       console.log(favoriteId);

       const delFaved = await DelFav(formData);
       console.log(delFaved);
  }

  const reSearch = searchedIs ? dataFavCourses.filter(el => el.courseTitle.toLowerCase().indexOf(searchedIs.toLowerCase()) !== -1) : dataFavCourses ;

  useEffect(() => {
    reData();
  },[countSearch])


  return(
    <>
       <Table aria-label="Example static collection table" dir='rtl'>

      <TableHeader>
        <TableColumn className='font-medium text-base mt-3'>#</TableColumn>
        <TableColumn className='font-medium text-base mt-3'>نام دوره</TableColumn>
        <TableColumn className='font-medium text-base mt-3'>استاد دوره</TableColumn>
        <TableColumn className='font-medium text-base mt-3'>شروع دوره</TableColumn>
        <TableColumn className='font-medium text-base mt-3'>قیمت دوره</TableColumn>
        <TableColumn className='font-medium text-base mt-3'></TableColumn>
        <TableColumn className='font-medium text-base mt-3'></TableColumn>
        <TableColumn className='font-medium text-base mt-3'></TableColumn>
      </TableHeader>

      <TableBody id='list'>

       {reSearch.map((el , index) => <TableRow key={index} id='carded' className='hover:bg-slate-100 hover:cursor-pointer rounded-xl' >

          <TableCell><div  className='rounded-lg border-1.5 relative bg-slate-500' style={{width: "104px" , height: "72px" , top: "3px" , overflow: "hidden"}}> <img className='block' style={{height:"100%"}} src={el.tumbImageAddress} alt="" /> </div> </TableCell>
          <TableCell  className='font-bold text-xl'>{el.courseTitle}</TableCell>
          <TableCell className='font-medium text-base'>{el.teacheName.replace('-', ' ')}</TableCell>
          <TableCell className='font-medium text-base mr-5'>{el.typeName}</TableCell>
          <TableCell className='font-medium text-xl mr-8'>{(parseInt(el.teacherId).toLocaleString('en-US')) + " تومان"}</TableCell>

          <TableCell>
            <ViewCardFav imaged={el.tumbImageAddress} nameTitle={el.courseTitle}  price={el.teacherId}
                      modares={el.teacheName} termNameed={el.termName}
             />
          </TableCell>
          
          <TableCell>
            <div className='cursor-pointer w-6 h-6 mt-[-5px]'> <img src={Parcham} alt="" /> </div>
          </TableCell>

          <TableCell>
            <div className='cursor-pointer w-6 h-6 mt-[-5px]'> <Canceltion favoriteId={el.favoriteId} deletedFav={deletedFav} /> </div>
          </TableCell>

        </TableRow>)}

      </TableBody>
    </Table>

      <Pagination className='w-[322px] h-[48px] mx-auto mt-6' isCompact showControls onChange={(e) => setSlider(e)} total={total} initialPage={1} />
    </>
  );
}

export default CardFavCourses