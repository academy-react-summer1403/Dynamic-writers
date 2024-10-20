import http from '../../../interceptor'

export const getFavCourse = async () => {
  try {
  const result = await http.get('/SharePanel/GetMyFavoriteCourses');

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}