import http from '../interceptor'

export const getCourseTops = async () => {
  try {
  const result = await http.get(`/Home/GetCoursesTop?Count=5`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}