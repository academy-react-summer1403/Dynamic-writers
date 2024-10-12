import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import NotFoundPage from '../screens/NotFoundPage';
import Root from '../screens/Root';
import { NewDetail } from '../screens/NewsDetail/NewDetail';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children:[
        {
          index:"true",
          path: '/',
          element: <NewDetail />,
          errorElement:<Error/>
        }]
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
