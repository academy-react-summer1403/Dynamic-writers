import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const getNewsList = async(
  pageNum, 
  rowsPage, 
  query, 
  sortingCol , 
  sortType

  ) => {
  try {
  const result = await http.get(`/News?PageNumber=${pageNum}&RowsOfPage=${rowsPage}&Query=${query}&SortType=${sortType}&SortingCol=${sortingCol}`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}