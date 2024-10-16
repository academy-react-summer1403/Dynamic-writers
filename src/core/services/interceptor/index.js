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

   // if(err.response.status === 401){
   //    removeItem('token')
   //    window.location.pathname = '/login'
   // }

   // if(err.response.status >= 400 && err.response.status < 500){
   //     alert("error:" + err.response.status);
   // }
   
   return Promise.reject(err);
}

instance.interceptors.response.use(onSuccess, onError)

instance.interceptors.request.use((opt) => {
   // const token = getItem('token')
   const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYWJkNTdlYS1lNzU2LTQ3MGEtOTBiZS1iODMyMjI5NGY4ZDMiLCJqdGkiOiI3ZDYwOGM3MC00MzFmLTQyNjEtYjNlZS04NjZjOWQxNTVkNjAiLCJlbWFpbCI6Im1hc2cxMzc3QGdtYWlsLmNvbSIsIlVpZCI6IkdGd0hqVERMNkV1a0lGU0QwQmk0RU5xaEYzbjlwLzN1a1ZXTkh5TkNsNU09RXM3ODg5OGQ5NjllZWY2ZWNhZDNjMjlhM2E2MjkyODBlNjg2Y2YwYzNmNWQ1YTg2YWZmM2NhMTIwMjBjOTIzYWRjNmM5MiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJSZWZlcmVlIiwiQWRtaW5pc3RyYXRvciIsIlN0dWRlbnQiXSwiZXhwIjoxNzI5MTE1OTczLCJpc3MiOiJTZXBlaHJBY2FkZW15IiwiYXVkIjoiU2VwZWhyQWNhZGVteSJ9.tuhfzRuS8T5il2DWpRRGKvbos0KP_hvtHv_zvYM0MtA"
   if (token) opt.headers.Authorization = 'Bearer ' + token;
   console.log(opt)

   return opt
})

export default instance;