import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import Context from './Context/Context';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/signin",
    element: <Signin></Signin>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
