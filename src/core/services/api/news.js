import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const getNewsList = async(count) => {
  try {
  const result = await http.get(`/News?PageNumber=1&RowsOfPage=9`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}