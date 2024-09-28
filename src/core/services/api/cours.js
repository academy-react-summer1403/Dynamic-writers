import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const getCourserList = async(count) => {
  try {
  const result = await http.get(`/Home/GetCoursesTop?Count=${count}`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}