import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import {getCourserList} from '../core/services/api/cours';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import NotFoundPage from '../screens/NotFoundPage';

function App() {

  const getList = async() => {
    const result = await getCourserList(5);
    console.log(result);
  }

  useEffect(()=>{
    getList();
  },[])

  const router = createBrowserRouter([
    {
      path: '/'
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])

  return <NextUIProvider>
            <RouterProvider router={router}/>
        </NextUIProvider>
}

export default App
