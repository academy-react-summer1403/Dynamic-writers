import http from '../../../interceptor'

export const getFavNews = async () => {
  try {
  const result = await http.get('/SharePanel/GetMyFavoriteNews');

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}