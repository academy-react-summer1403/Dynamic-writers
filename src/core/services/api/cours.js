import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const getCourserList = async() => {
  try {
  const result = await http.get('/Home/GetCoursesTop');

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}