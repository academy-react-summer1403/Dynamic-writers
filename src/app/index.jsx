import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import Login from '../screens/Login/Login';
import Verify from '../screens/Login/verify';
import Register from '../screens/Register/Register';
import VerifyRegister from '../screens/Register/VerifyRegister';
import RegisterStep3 from '../screens/Register/RegisterStep3';
import ForgetPassword from '../screens/ResetPassword/ForgetPassword';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import NotFoundPage from '../screens/NotFoundPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import Root from '../screens/Root';
import CourseListRout from '../screens/CourseListRout';

function App() {

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/verify',
      element: <Verify />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/verifyRegister',
      element: <VerifyRegister />
    },
    {
      path: '/registerAccount',
      element: <RegisterStep3 />
    },
    {
      path: '/forgetPassword',
      element: <ForgetPassword />
    },
    {
      path: '/resetPassword/:configValue',
      element: <ResetPassword />
    },
    {
      path: '*',
      element: <NotFoundPage />
    },
    {
      path: '/',
      element: <Root />,
      children: [

        {
          path: '/courseList',
          element: <CourseListRout />
        },

      ]
    }

  ])

  return <NextUIProvider>
            <RouterProvider router={router}/>
        </NextUIProvider>
}

export default App
