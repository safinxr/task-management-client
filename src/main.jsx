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
import Dashboard from './Pages/Dashboard/Dashboard';
import Task from './Pages/Task/Task';
import AddTask from './Pages/AddTask/AddTask';


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
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path: "/dashboard",
        element: <Task></Task>,
      },
      {
        path: "/dashboard/addtask",
        element: <AddTask></AddTask>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
