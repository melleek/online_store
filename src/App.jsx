import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import './App.css';
import Carzina from "./pages/Carzina/Carzina";
import CatalogTVR from "./pages/CatalogTVR/CatalogTVR";
import UserById from "./pages/UserById/UserById";


export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/carzina',
          element: <Carzina />
        },
        {
          path: "/catalogtvr",
          element: <CatalogTVR />
        },
        {
          path: '/userId',
          element: <UserById />
        }
      ]
    },
  ]);

  
  return <RouterProvider router={router} />;
};
