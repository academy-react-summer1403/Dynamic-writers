import http from '../../../interceptor'

export const addLikeComment = async (id) => {
  try {
  const result = await http.post(`/Course/AddCourseCommentLike?CourseCommandId=${id}`);

  return result
  
  } catch (error) {
    return [error.message, error.status]
  }
}