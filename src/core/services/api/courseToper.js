import http from '../interceptor'

export const getCourserList = async (Count) => {
  
    try {
  const result = await http.get(`/Home/GetCoursesTop?Count=${Count}`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}