import http from '../../interceptor'

export const ForgetPass = async (gmail) => {
  try {

  const result = await http.post('/Sign/ForgetPassword' , {email: gmail, baseUrl: 'http://localhost:5173/resetPassword'});

  return result
  
  } catch (error) {
  console.log('Error:', error.response ? error.response.data : error.message);
    return [];
  }
}