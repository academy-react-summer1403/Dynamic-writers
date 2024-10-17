import http from '../../interceptor'

export const getCourseListTableRes = async (
) => {
  
    try {
  const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=1
    &RowsOfPage=3`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}