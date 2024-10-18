import http from '../../interceptor'

export const getSecurityInfo = async () => {
  try {
  const result = await http.put(`/SharePanel/GetSecurityInfo`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}