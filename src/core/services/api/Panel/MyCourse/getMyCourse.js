import http from '../../../interceptor'

export const getMyCourse = async (query, rows, pageNumber, sortingCol, sortType) => {
  try {
  console.log(sortType, sortingCol)
  const result = await http.get(`/SharePanel/GetMyCourses?PageNumber=${pageNumber}&RowsOfPage=${rows}&Query=${query}&SortingCol=${sortingCol}&SortType=${sortType}`);

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}