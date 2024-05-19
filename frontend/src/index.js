import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import Layout from "./Layout/index";
// Components
import SignUp from './Components/Auth/SignUp';
import SignIn from './Components/Auth/SignIn';
import Dashboard from './Components/Dashboard';
// Components ---- End

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Layout><Dashboard /></Layout>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);