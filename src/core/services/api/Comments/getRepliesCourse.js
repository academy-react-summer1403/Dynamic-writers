import http from '../../interceptor'

export const getRepliesCourse = async (params) => {
  try {
  const result = await http.get(`/Course/GetCourseReplyCommnets/${params.courseId}/${params.commentId}`);

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}