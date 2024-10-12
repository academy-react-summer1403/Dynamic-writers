import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
<<<<<<< HEAD
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
=======
import Login from '../screens/Login/Login';
import Verify from '../screens/Login/verify';
import Register from '../screens/Register/Register';
import VerifyRegister from '../screens/Register/VerifyRegister';
import RegisterStep3 from '../screens/Register/RegisterStep3';
import ForgetPassword from '../screens/ResetPassword/ForgetPassword';
import ResetPassword from '../screens/ResetPassword/ResetPassword';

function App() {

  const getList = async() => {
    const result = await getCourserList(5);
    // console.log(result);
  }

  useEffect(()=>{
    getList();
  },[])

  const router = createBrowserRouter([
    {
      path: '/'
    },
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

>>>>>>> feature/Login
  ])

  return <NextUIProvider>
            <RouterProvider router={router}/>
        </NextUIProvider>
}

export default App
