import http from '../../../interceptor'

export const deleteFavCourse = async (formData) => {
  try {
  const result = await http.delete('/Course/DeleteCourseFavorite', formData);

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}