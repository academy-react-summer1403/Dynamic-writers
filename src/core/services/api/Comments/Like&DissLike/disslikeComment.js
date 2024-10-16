import http from '../../../interceptor'

export const addDissLikeComment = async (courseId) => {
  try {
  const result = await http.get(`/Course/AddCourseCommentDissLike?CourseCommandId=${courseId}`);

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}