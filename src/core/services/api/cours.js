import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const getCourseList = async(pageNumber, tech) => {
  try {
  const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=${tech}`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}