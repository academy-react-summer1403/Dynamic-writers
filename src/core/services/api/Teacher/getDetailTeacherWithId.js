import http from '../../interceptor'

export const getDetailIdTeacher = async (teacherId) => {
  try {
  const result = await http.get(`/Home/GetTeacherDetails?TeacherId=${teacherId}`);

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}