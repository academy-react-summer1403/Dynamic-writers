import http from '../../../interceptor'

export const GetFavCourse = async() => {
   try {
       const resultData = await http.get(`/SharePanel/GetMyFavoriteCourses`);
       return resultData
   } catch (error) {
       return []
   }
}