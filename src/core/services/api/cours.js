import http from '../interceptor'

<<<<<<< HEAD
export const getCourserList = async(count) => {
  try {
  const result = await http.get('/Home/GetCoursesTop?Count=' + count);
=======
export const getCourseList = async (
  pageNumber, 
  Query, 
  rowsPage, 
  idLevel, 
  idTeacher, 
  costUp, 
  costDown, 
  techCount, 
  techList, 
  sortType, 
  sortingCol, 
  startDate, 
  endDate) => {
  
    try {
  const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageNumber}
    &RowsOfPage=${rowsPage}&Query=${Query}&courseLevelId=${idLevel}&TeacherId=${idTeacher}&CostUp=${costUp}&CostDown=${costDown}
    &TechCount=${techCount}&ListTech=${techList}&SortingCol=${sortingCol}&SortType=${sortType}&StartDate=${startDate}
    &EndDate=${endDate}`);
>>>>>>> Develop

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}