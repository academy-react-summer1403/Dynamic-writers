import http from '../../interceptor'

export const getCourseListAllTable = async (
    pageNumber,
    rows,
    query,
    teacher, 
    costDown, 
    costUp
) => {
  
    try {
  const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageNumber}
    &RowsOfPage=${rows}&Query=${query}&TeacherId=${teacher}&CostDown=${costDown}&CostUp=${costUp}`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}