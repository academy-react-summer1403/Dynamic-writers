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

   if(!err.config.headers.Authorization){
      removeItem('token')
      window.location.pathname = '/Error401'
   }

   if(!token){
      removeItem('token')
      window.location.pathname = '/Error401'
   }

   if(err.response.status === 401){
      removeItem('token')
      window.location.pathname = '/Error401'
   }

   if(err.response.status === 400) {
      window.location.pathname = '/Error400'
   }

   if(err.response.status === 403) {
      window.location.pathname = '/Error403'
   }
   
   if(err.response.status === 408) {
      window.location.pathname = '/Error408'
   }
   
   if(err.response.status === 500) {
      window.location.pathname = '/Error500'
   }

   return Promise.reject(err);
}

instance.interceptors.response.use(onSuccess, onError)

instance.interceptors.request.use((opt) => {
   const token = getItem('token')

   if (token) opt.headers.Authorization = 'Bearer ' + JSON.parse(token);
   return opt
})

export default instance;