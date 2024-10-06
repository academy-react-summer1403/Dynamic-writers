import { useEffect } from 'react';
import { getItem } from '../common/storage';
import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const getCourseList = async() => {
  try {
  const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=9&SortingCol=Active&SortType=DESC&TechCount=0`)

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}