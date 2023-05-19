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
import ToyDetails from "./ToyDetails/ToyDetails.jsx";
import PrivateRoute from "./PrivateRoutes/PrivateRoutes.jsx";
import AllToys from "./Components/AllToys/AllToys.jsx";
import AddToy from "./Components/AddToy/AddToy.jsx";

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
      },
      {
        path:'alltoys',
        element: <AllToys></AllToys>,
        loader:()=>fetch('http://localhost:5003/toys')
      },
      {
        path:'addtoy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
        
      },
      {
        path:'toyDetails/:id',
        element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5003/toys/${params.id}`)
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
