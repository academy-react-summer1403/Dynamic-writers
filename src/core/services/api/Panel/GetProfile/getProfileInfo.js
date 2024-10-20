import http from '../../../interceptor'

export const getProfileInfo = async () => {
  try {
  const result = await http.get('/SharePanel/GetProfileInfo');

  return result
  } catch (error) {
  console.log(error);
    return [];
  }
}