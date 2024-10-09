import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const getNewsCount = async() => {
  try {
  const result = await http.get(`/News`);

  return result.totalCount;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}