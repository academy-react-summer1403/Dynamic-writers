import http from '../../interceptor'

export const AddReserve = async (courseId) => {
  try {
<<<<<<< HEAD
  // alert(courseId)
=======
>>>>>>> 1f0b08358666844bcdc356c4eb4c8fc734016298
  const result = await http.post('/CourseReserve/ReserveAdd', {'courseId': courseId});

  return result
  
  } catch (error) {
    return error
  }
}