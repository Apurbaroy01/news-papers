import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import NewsHome from './Components/NewsHome/NewsHome';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Provider from './FireBase/Provider';
import { ToastContainer } from 'react-toastify';
import Error from './Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/login"}></Navigate>
      },

      {
        path: "/category/:id",
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element: <NewsHome></NewsHome>
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </StrictMode>,
)
