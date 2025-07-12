import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router";
import Root from './Router/Root';
import AllNews from './Layout/News/AllNews';
import SignUp from './NavBar/SignUp/SignUp';
import Register from './NavBar/Register/Register';
import FireBaseAuth from './FireBaseAuth/FireBaseAuth';
import NewsDetails from './Layout/NewsDetails/NewsDetails';
import PrivetRouter from './PrivetRouter/PrivetRouter';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '',
        element: <Navigate to='/category/01'></Navigate>
      },
      {
        path: '/category/:id',
        element: <AllNews></AllNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
      
    ]
  },
  {
    path: '/login',
    element: <SignUp></SignUp>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path:'/news/:id',
    element:<PrivetRouter><NewsDetails></NewsDetails></PrivetRouter>,
    loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FireBaseAuth>
      <RouterProvider router={router}></RouterProvider>
    </FireBaseAuth>
  </StrictMode>,
)
