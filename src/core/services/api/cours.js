import { useEffect } from 'react';
import { getItem } from '../common/storage';
import http from '../interceptor'
import { useSearchParams } from 'react-router-dom';
// import { baseUrl } from "../../../config";

export const getCourseList = async (pageNumber, Query, RowsOfPage) => {
  try {
  const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${Number(pageNumber)}&RowsOfPage=9&Query=${Query}`)

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}