import { getItem } from '../../common/storage';
import http from '../../interceptor'

export const ResetPassword = async (password) => {
  try {

  const result = await http.post('/Sign/Reset' , { userId: getItem('userId'), newPassword: password.newPassword, resetValue: getItem('resetValue')});

  return result
  
  } catch (error) {
  console.log('Error:', error.response ? error.response.data : error.message);
    return [];
  }
}