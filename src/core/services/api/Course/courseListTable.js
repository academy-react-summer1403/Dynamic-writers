import http from '../../interceptor'

export const getCourseListTable = async (
) => {
  
    try {
  const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=1
    &RowsOfPage=6`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}