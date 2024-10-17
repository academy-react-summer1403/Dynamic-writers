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

<<<<<<< HEAD
   // if(err.response.status === 401){
   //    removeItem('token')
   //    window.location.pathname = '/login'
   // }

   // if(err.response.status >= 400 && err.response.status < 500){
   //     alert("error:" + err.response.status);
   // }
=======
   if(!err.config.headers.Authorization){
      removeItem('token')
      window.location.pathname = '/Error401'
   }

   if(err.response.status === 400) {
      window.location.pathname = '/Error400'
   }
>>>>>>> Develop
   
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

<<<<<<< HEAD
   if (token) opt.headers.Authorization = 'Bearer ' + token;
=======
   if (token) opt.headers.Authorization = 'Bearer ' + JSON.parse(token);
>>>>>>> Develop
   return opt
})

export default instance;