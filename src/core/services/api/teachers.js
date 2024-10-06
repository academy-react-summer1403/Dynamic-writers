import { useEffect } from 'react';
import { getItem } from '../common/storage';
import http from '../interceptor'
// import { baseUrl } from "../../../config";

export const getTeacherList = async() => {
  try {
  const result = await http.get(`/Home/GetTeachers`)

  return result;
  
  } catch (error) {
  console.log(error);
    return [];
  }
}