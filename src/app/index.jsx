import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import NotFoundPage from '../screens/NotFoundPage';
import Root from '../screens/Root';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />
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
