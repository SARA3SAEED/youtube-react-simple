import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import * as React from "react";
import Home from '../pages/Home';
import Singup from '../pages/Singup';
import Login from '../pages/Login';
import Details from '../pages/Details';



  export default function Router(){
   const router = createBrowserRouter ([
    {path: "/", element: <Home />,},
    {path: "/singup", element: <Singup />,},
    {path: "/login", element: <Login />,},
    {path: "/details/:id", element: <Details />,}

   ])

    return (
        <RouterProvider  router={router}/>
    )
  }