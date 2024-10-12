import http from '../interceptor'

export const getTeacherList = async() => {
  try {
  const result = await http.get(`/Home/GetTeachers`)

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}