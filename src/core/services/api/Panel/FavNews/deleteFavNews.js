import http from '../../../interceptor'

export const deleteFavNews = async (deleteEntityId) => {
  try {
  const result = await http.delete('/News/DeleteFavoriteNews', deleteEntityId);

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}