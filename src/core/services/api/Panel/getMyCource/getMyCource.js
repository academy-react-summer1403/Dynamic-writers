import http from '../../../interceptor'

export const GetMyCource = async(count, slider , countSearch) => {
   try {
       
       console.log(countSearch);
       const resulted = await http.get(`/SharePanel/GetMyCourses?PageNumber=${slider}&RowsOfPage=2&SortingCol=DESC&SortType=LastUpdate&Query=${countSearch}`);
       return resulted

   } catch (error) {
       return[]
   }
}