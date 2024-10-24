import http from '../../interceptor'

export const AddReserve = async (courseId) => {
  try {
  // alert(courseId)
  const result = await http.post('/CourseReserve/ReserveAdd', {'courseId': courseId});

  return result
  
  } catch (error) {
    return error
  }
}