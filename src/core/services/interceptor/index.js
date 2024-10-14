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
   const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYWJkNTdlYS1lNzU2LTQ3MGEtOTBiZS1iODMyMjI5NGY4ZDMiLCJqdGkiOiI4N2EwYjJmZS04ZTZjLTQxNjYtOTNjOS0zYWY1NjFlYzNmNDIiLCJlbWFpbCI6Im1hc2cxMzc3QGdtYWlsLmNvbSIsIlVpZCI6IjBkTzFMQWsxOG5XMG81aVBIckNwYjFTd0hiOEFSK2c2RkJtY3hUVUNmS2M9RXM3ODg5OGQ5NjllZWY2ZWNhZDNjMjlhM2E2MjkyODBlNjg2Y2YwYzNmNWQ1YTg2YWZmM2NhMTIwMjBjOTIzYWRjNmM5MiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJSZWZlcmVlIiwiQWRtaW5pc3RyYXRvciIsIlN0dWRlbnQiXSwiZXhwIjoxNzI4OTE0MjMxLCJpc3MiOiJTZXBlaHJBY2FkZW15IiwiYXVkIjoiU2VwZWhyQWNhZGVteSJ9.-L8GZZDC84ryq_vu8XFFdCa0qdfl58QKxQ86dE3GXC8"
   if (token) opt.headers.Authorization = 'Bearer ' + token;
   console.log(opt)

   return opt
})

export default instance;