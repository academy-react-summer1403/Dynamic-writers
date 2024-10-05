import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const getCourseList = async() => {
  try {
  const result = await http.get(`/Home/GetCoursesTop/`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}