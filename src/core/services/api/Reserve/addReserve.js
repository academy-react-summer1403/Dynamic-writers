import http from '../../interceptor'

export const AddReserve = async (courseId) => {
  try {
  const result = await http.post('/CourseReserve/ReserveAdd', {'courseId': courseId});

  return result
  
  } catch (error) {
    return error
  }
}