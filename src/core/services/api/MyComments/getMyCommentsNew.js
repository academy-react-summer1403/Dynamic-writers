import http from '../../interceptor'

export const getMyCommentsNew = async () => {
  try {
  const result = await http.get('/SharePanel/GetMyNewsComments');

  return result
  
  } catch (error) {
    console.log(error.message)
  }
}