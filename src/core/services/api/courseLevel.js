import http from '../interceptor'

export const getCourseLevels = async () => {
  try {
  const result = await http.get(`/CourseLevel/GetAllCourseLevel`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}