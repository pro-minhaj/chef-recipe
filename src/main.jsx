import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Blog from './Pages/Blog/Blog';
import Auth_Context from './Auth_Context/Auth_Context';
import Privete_Route from './Privete_Route/Privete_Route';
import Profile from './Pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Privete_Route>
          <Home></Home>
        </Privete_Route>,
      },
      {
        path: 'blog',
        element: <Privete_Route><Blog></Blog></Privete_Route>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'profile',
        element: <Privete_Route><Profile></Profile></Privete_Route>
      },
      {
        path: '/*',
        element: <div className='text-center my-8 text-5xl'>404 Page No Found</div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth_Context>
      <RouterProvider router={router} />
    </Auth_Context>
  </React.StrictMode>,
)
