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
import Panel from '../screens/Panel/PanelScreen';
import InformationUser from '../components/Panel/InformationUser'
import AddProfileImage from '../components/Panel/AddProfileImage'
import AddAddress from '../components/Panel/AddAddress'
import Likes from '../components/Panel/Linkes'

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
        }
      ]
    },
    // {
    //   path:'/',
    //   element:<Panel/>,
    //   children:[
    //     {
    //       path:"/",
    //       element:<InformationUser/>,
    //       index:true
    //     },
    //     {
    //       path:"/AddProfileImage",
    //       element:<AddProfileImage/>
    //     },
    //     {
    //       path:"/AddAddress",
    //       element:<AddAddress/>
    //     },
    //     {
    //       path:"/Linkes",
    //       element:<Likes/>
    //     }
    //   ]
    // }

  ])

  return <NextUIProvider>
            <RouterProvider router={router}/>
        </NextUIProvider>
}

export default App
