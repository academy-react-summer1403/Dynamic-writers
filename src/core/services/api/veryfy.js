import http from '../interceptor'

export const sendVerifyCode = async (phoneNumber) => {
  try {
  const result = await http.post('/Sign/SendVerifyMessage' , phoneNumber);

//   alert(result.message)
  console.log(result)

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}