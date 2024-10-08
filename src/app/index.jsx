import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import {getCourserList} from '../core/services/api/cours';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import Root from '../screens/Root';
import News from '../screens/News';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/newsList',
          element: <News />
        }
      ]
    }
  ])

  return <NextUIProvider>
            <RouterProvider router={router}/>
        </NextUIProvider>
}

export default App
