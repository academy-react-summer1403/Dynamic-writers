import http from '../../../interceptor'

export const DelFav = async(formData) => {
  try {
       const delData = await http.delete("/Course/DeleteCourseFavorite" , formData);
       return delData
  } catch (error) {
         console.log(error);
       return []
  }
}