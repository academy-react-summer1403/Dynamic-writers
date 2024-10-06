import { getItem } from '../common/storage';
import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const getCourseCount = async() => {
  try {
  const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=9&RowsOfPage=1&SortingCol=Active&SortType=DESC&TechCount=0`);

  return result.totalCount;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}