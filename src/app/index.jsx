import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import NotFoundPage from '../screens/NotFoundPage';
import Root from '../screens/Root';
import PanelLayout from '../screens/PanelLayOut';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />
    },
    {
      path: '/panel',
      element: <PanelLayout />
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
