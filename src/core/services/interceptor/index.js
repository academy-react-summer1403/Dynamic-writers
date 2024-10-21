import axios from "axios";
import {getItem, removeItem } from "../common/storage";

const baseURL = import.meta.env.VITE_BASE_URL

const instance = axios.create({
   baseURL: baseURL
})

const onSuccess = (response) => {
   return response.data;
}

const onError = (err) => {
   console.log(err);

   if(err.response) {
      const status = err.response.status
      
      if(status === 400) {
         window.location.pathname = '/Error400'
      }
   
      if(status === 403) {
         window.location.pathname = '/Error403'
      }
      
      if(status === 408) {
         window.location.pathname = '/Error408'
      }
      
      if(status === 500) {
         window.location.pathname = '/Error500'
      }
   }
   else if(err.request && err.request.status === 401) {
      window.location.pathname = '/Error401'
   }
   else if(err.request && err.request.status === 403) {
      window.location.pathname = '/Error403'
   }
   else {
      // window.location.pathname = '/Error500'
      console.log(err.request)
   }
}

instance.interceptors.response.use(onSuccess, onError)

instance.interceptors.request.use((opt) => {
   const token = getItem('token')

   if (token) opt.headers.Authorization = 'Bearer ' + JSON.parse(token);
   return opt
})

export default instance;