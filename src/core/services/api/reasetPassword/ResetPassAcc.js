import { getItem } from '../../common/storage';
import http from '../../interceptor'

export const ResetPass = async (passwordObj) => {
  try {

  const result = await http.post('/SharePanel/ChangePassword' ,passwordObj);

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}