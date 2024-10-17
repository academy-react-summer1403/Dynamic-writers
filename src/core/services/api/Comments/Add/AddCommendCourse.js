import http from '../../../interceptor'

export const addCommentCourse = async (formData) => {
  try {
  const result = await http.post('/Course/AddCommentCourse', formData);

  return result
  
  } catch (error) {
    // console.log(error.message)
  }
}