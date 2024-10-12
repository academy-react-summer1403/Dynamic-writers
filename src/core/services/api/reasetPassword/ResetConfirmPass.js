import http from '../../interceptor'

export const ResetConfirmPass = async () => {
  try {

  const result = await http.get('/Sign/Reset/' + window.location.pathname.replace("/resetPassword/", "") );

  return result
  
  } catch (error) {
  console.log('Error:', error.response ? error.response.data : error.message);
    return [];
  }
}