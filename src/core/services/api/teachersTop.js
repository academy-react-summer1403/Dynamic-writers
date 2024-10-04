import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const GetTeachersList = async() => {
  try {
  const result = await http.get('/Home/GetTeachers');

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}