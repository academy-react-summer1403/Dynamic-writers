import http from '../../../interceptor'

export const getCommentsNew = async (params) => {
  try {
  const result = await http.get('/News/GetNewsComments?NewsId=' + params.id);

  return result
  
  } catch (error) {
    console.log(error.message)
  }
}