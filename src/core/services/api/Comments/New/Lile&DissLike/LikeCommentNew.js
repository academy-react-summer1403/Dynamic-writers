import http from '../../../../interceptor'

export const addLikeCommentNew = async (id, likeType) => {
  try {
  const result = await http.post(`/News/CommentLike/${id}?LikeType=${likeType}` );

  return result
  
  } catch (error) {
    return [error.message, error.status]
  }
}