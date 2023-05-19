import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./Components/UserStates/Register.jsx";
import Login from "./Components/UserStates/Login.jsx";

import Home from "./Components/Home/Home.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import FirstPage from "./Components/FirstPage/FirstPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<FirstPage></FirstPage>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
