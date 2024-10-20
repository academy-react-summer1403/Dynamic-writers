import http from '../../interceptor'

export const getMyCommentsCourse = async () => {
  try {
  const result = await http.get('/SharePanel/GetMyCoursesComments');

  return result
  
  } catch (error) {
    console.log(error.message)
  }
}