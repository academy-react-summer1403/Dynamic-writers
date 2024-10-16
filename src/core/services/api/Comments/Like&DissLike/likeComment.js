import http from '../../../interceptor'

export const addLikeComment = async (courseId) => {
  try {
  const result = await http.get(`/Course/AddCourseCommentLike?CourseCommandId=${courseId}`);

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}