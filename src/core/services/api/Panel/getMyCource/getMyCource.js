import http from '../../../interceptor'

export const GetMyCource = async(count, slider , countSearch) => {
   try {
       
       const resulted = await http.get(`/SharePanel/GetMyCourses?PageNumber=${slider}&RowsOfPage=1&SortingCol=DESC&SortType=LastUpdate&Query=${countSearch ? countSearch : count}`);
       return resulted

   } catch (error) {
       return[]
   }
}