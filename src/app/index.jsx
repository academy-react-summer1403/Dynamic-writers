import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import {getCourserList} from '../core/services/api/cours';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import Root from '../screens/Root/Root';
import Landing from '../screens/Landing/Landing';

function App() {

  // const getList = async() => {
  //   const result = await getCourserList(5);
  //   console.log(result);
  // }

  // useEffect(()=>{
  //   getList();
  // },[])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/landing',
          element: <Landing />
        },
      ]
    }
  ])

  return <NextUIProvider>
            <RouterProvider router={router}/>
        </NextUIProvider>
}

export default App
