import http from '../../../interceptor'

export const getRepliesNew = async (id) => {
  try {
  const result = await http.get(`/News/GetRepliesComments?Id=${id}`);

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}