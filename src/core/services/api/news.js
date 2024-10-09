import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const getNewsList = async(pageNum, rowsPage, query) => {
  try {
  const result = await http.get(`/News?PageNumber=${pageNum}&RowsOfPage=${rowsPage}&Query=${query}`);

  return result.news;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}