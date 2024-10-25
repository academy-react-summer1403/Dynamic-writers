import http from '../interceptor'

export const postLogin = async (user) => {
  try {
  const result = await http.post('/Sign/Login' , user);

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}