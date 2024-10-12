import http from '../interceptor'

export const getTechList = async () => {
  try {
  const result = await http.get(`/Home/GetTechnologies`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}