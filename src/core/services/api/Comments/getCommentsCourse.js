import http from '../../interceptor'

export const getCommentsCourse = async (params) => {
  try {
  const result = await http.get('/Course/GetCourseCommnets/' + params.id);

  return result
  
  } catch (error) {
    console.log(error.value.ErrorMessage)
  }
}