import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const getNewsList = async(pageNum) => {
  try {
  const result = await http.get(`/News?PageNumber=${pageNum}&RowsOfPage=8`);

  return result.news;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}