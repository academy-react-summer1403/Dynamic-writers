import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import Root from '../screens/Root';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [

        {

        }

      ]
    }
  ])

  return <NextUIProvider>
            <RouterProvider router={router}/>
        </NextUIProvider>
}

export default App
