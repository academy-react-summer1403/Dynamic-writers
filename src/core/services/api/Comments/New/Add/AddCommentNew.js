import http from '../../../../interceptor'

export const addCommentNew = async (raw) => {
  try {
  const result = await http.post('/News/CreateNewsComment', raw);

  return result
  
  } catch (error) {
    // console.log(error.message)
  }
}