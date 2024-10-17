import http from '../../interceptor'

export const getCourseListAllTable = async (
    pageNumber,
    rows,
    query,
    teacher, 
    costDown, 
    costUp, 
    convertedDates
) => {
  
    try {
  const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageNumber}
    &RowsOfPage=${rows}&Query=${query}&TeacherId=${teacher}&CostDown=${costDown}&CostUp=${costUp}&
    StartDate=${convertedDates.startDate}&EndDate=${convertedDates.endDate}`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}