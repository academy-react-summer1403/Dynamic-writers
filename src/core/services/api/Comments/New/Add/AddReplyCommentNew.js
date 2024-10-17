import http from '../../../../interceptor'

export const addReplyNew = async (raw) => {
  try {
  const result = await http.post('/News/CreateNewsReplyComment', raw);

  return result
  
  } catch (error) {
    // console.log(error.message)
  }
}