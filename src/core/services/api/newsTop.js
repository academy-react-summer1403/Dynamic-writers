import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const getNewsList = async() => {
  try {
  const result = await http.get('/News/');

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}