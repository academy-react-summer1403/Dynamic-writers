import { useEffect } from 'react';
import { getItem } from '../common/storage';
import http from '../interceptor'
import { useSearchParams } from 'react-router-dom';
// import { baseUrl } from "../../../config";

export const getCourseList = async (pageNumber, Query, rowsPage) => {
  try {
  const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=${rowsPage}&Query=${Query}`);

  return result.courseFilterDtos;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}