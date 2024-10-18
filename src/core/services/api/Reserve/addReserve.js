import http from '../../interceptor'

export const AddReserve = async (params) => {
  try {
  const result = await http.post('/CourseReserve/ReserveAdd', params);

  return result
  
  } catch (error) {
    return error
  }
}