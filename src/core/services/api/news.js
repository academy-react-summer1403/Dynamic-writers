import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const getNewsList = async(pageNumber) => {
  try {
  // alert(pageNumber)
  const result = await http.get(`/News?PageNumber=${pageNumber}&RowsOfPage=8`);

  return result.news;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}