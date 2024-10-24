import https from '../../../../core/services/interceptor'
import { getItem } from "../../common/storage";


export const Login2Step = async () => {
  try {

  const VrifyCode = getItem('verifyCode')
  const phoneOrGmail = getItem('phoneOrGmail')
  const password = getItem('password')
  const rememberMe = getItem('rememberMe')

  const user = {password: JSON.parse(password), phoneOrGmail: JSON.parse(phoneOrGmail), rememberMe: JSON.parse(rememberMe)}

  const result = await https.post(`/Sign/LoginTwoStep?VrifyCode=${JSON.parse(VrifyCode)}`, user);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}