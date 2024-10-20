import http from '../../../interceptor'

export const addDissLikeComment = async (id) => {
  try {
  const result = await http.post(`/Course/AddCourseCommentDissLike?CourseCommandId=${id}`);

  return result
  
  } catch (error) {
  console.log(error);
    return error.message;
  }
}