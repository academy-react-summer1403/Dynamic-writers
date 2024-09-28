import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import {getCourserList} from '../core/services/api/cours';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

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
    }
  ])

  return <NextUIProvider>
            <RouterProvider router={router}/>
        </NextUIProvider>
}

export default App
