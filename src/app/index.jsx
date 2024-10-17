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
import Root from '../screens/Root';
import { NewDetail } from '../screens/NewsDetail/NewDetail';
import CourseListRout from '../screens/CourseListRout';
import {CourseDetail} from '../screens/CourseDetail/CourseDetail';
import News from '../screens/News';
import MyCourseRout from '../screens/User Panel/MyCourseRout';
import FavCourseRout from '../screens/User Panel/FavCourseRout';
import FavNewsRout from '../screens/User Panel/FavNewsRout';
import ProfileRout from '../screens/User Panel/ProfileRout';
import PanelLayout from '../screens/User Panel/PanelLayout';
import DashboardRout from '../screens/User Panel/DashboardRout';
import MyReserveRout from '../screens/User Panel/MyReserveRout';
import AllNewCourses from '../screens/User Panel/AllNewCourses';
import { getItem } from '../core/services/common/storage';
import { useState } from 'react';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import CourseReserve from '../components/CourseReserve/CourseReserve';
import Error401 from '../screens/Error/401/Error401';
import Error400 from '../screens/Error/400/Error400';
import Error403 from '../screens/Error/403/Error403';
import Error500 from '../screens/Error/500/Error500';
import Error408 from '../screens/Error/408/Error408';

function App() {

  const router = createBrowserRouter([
    {
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
    },

    {
      path: '/layoutPanel',
      element: <PrivateRoute element={<PanelLayout />} />,
      children: [
        {
          path: 'dashboard',
          element: <DashboardRout />
        },
        {
          path: 'myCourse',
          element: <MyCourseRout />
        },
        {
          path: 'myReserve',
          element: <MyReserveRout />
        },
        {
          path: 'favCourse',
          element: <FavCourseRout />
        },
        {
          path: 'favNews',
          element: <FavNewsRout />
        },
        {
          path: 'profile',
          element: <ProfileRout />
        },
      ]
    },
    {
      path: '/allNewCourses',
      element: <AllNewCourses />
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
        },
        {
          path: '/NewDetail/:id',
          element: <NewDetail />
        },
        {
          path:'/CourseDetail/:id',
          element:<CourseDetail/>
        },
        {
          path: 'Error401',
          element: <Error401 />
        },
        {
          path: 'Error400',
          element: <Error400 />
        },
        {
          path: 'Error403',
          element: <Error403 />
        },
        {
          path: 'Error500',
          element: <Error500 />
        },
        {
          path: 'Error408',
          element: <Error408 />
        },
      ]
    },

  ])

  return <NextUIProvider>
            <RouterProvider router={router}/>
        </NextUIProvider>
}

export default App
