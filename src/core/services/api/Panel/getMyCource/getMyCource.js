import http from '../../../interceptor'

export const GetMyCource = async(count) => {
   try {
       
       const resulted = await http.get(`/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=${count}`);
       return resulted

   } catch (error) {
       return[]
   }
}