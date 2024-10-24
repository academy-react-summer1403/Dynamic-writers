import http from '../../interceptor'

export const editSecurity = async (recoveryEmail, isSelected) => {
  try {
  const result = await http.put(`/SharePanel/EditSecurity`, {
    twoStepAuth: isSelected,
    recoveryEmail: recoveryEmail,
    baseUrl: "http://localhost:5173/"
  });

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}