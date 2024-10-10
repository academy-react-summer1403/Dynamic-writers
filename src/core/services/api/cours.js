import http from '../interceptor'

export const getCourseList = async (pageNumber, Query, rowsPage, idLevel, idTeacher, costUp , costDown, techCount, techList) => {
  try {
  const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageNumber}
    &RowsOfPage=${rowsPage}&Query=${Query}&courseLevelId=${idLevel}&TeacherId=${idTeacher}&CostUp=${costUp}&CostDown=${costDown}
    &TechCount=${techCount}&ListTech=${techList}`);

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}