import http from '../../../interceptor'

export const addReplyComment = async (formData) => {
  try {
  const result = await http.post('/Course/AddReplyCourseComment', formData);

  return result
  
  } catch (error) {
    // console.log(error.message)
  }
}