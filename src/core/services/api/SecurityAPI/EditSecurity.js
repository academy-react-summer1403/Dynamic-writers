import http from '../../interceptor'

export const editSecurity = async () => {
  try {
  const result = await http.put(`/SharePanel/EditSecurity`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}