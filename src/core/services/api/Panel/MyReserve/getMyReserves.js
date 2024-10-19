import http from '../../../interceptor'

export const getMyReserves = async () => {
  try {
  const result = await http.get(`/SharePanel/GetMyCoursesReserve`);

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}