import http from '../interceptor'

export const postLogin = async (user) => {
  try {
  const result = await http.post('/Sign/Login' , user);

  alert(result.message)

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}