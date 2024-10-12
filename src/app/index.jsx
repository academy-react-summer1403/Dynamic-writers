import { NextUIProvider } from '@nextui-org/react';
import Login from '../screens/Login/Login';
import Verify from '../screens/Login/verify';
import Register from '../screens/Register/Register';
import VerifyRegister from '../screens/Register/VerifyRegister';
import RegisterStep3 from '../screens/Register/RegisterStep3';
import ForgetPassword from '../screens/ResetPassword/ForgetPassword';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import NotFoundPage from '../screens/NotFoundPage';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Root from '../screens/Root';
<<<<<<< HEAD
import { NewDetail } from '../screens/NewsDetail/NewDetail';
=======
import CourseListRout from '../screens/CourseListRout';
import News from '../screens/News';
import { getItem } from '../core/services/common/storage';
import { useState } from 'react';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
>>>>>>> Develop

function App() {

  // const [token, setToken] = useState(getItem('token'))

  // return token ? element : <Navigate to='/login' />

  const router = createBrowserRouter([
    {
<<<<<<< HEAD
      path: '/',
      element: <Root />,
      children:[
        {
          index:"true",
          path: '/',
          element: <NewDetail />,
          errorElement:<Error/>
        }]
=======
      path: '/login',
      element: (
        <Login />
      ),
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
>>>>>>> Develop
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
