import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './views/home/index';
import Login from './views/login/index';
import Finance from './views/finance/index';
import Stock from './views/Stock/index';
import RegisterProduct  from './views/RegisterProduct';
import Error from './views/Error/index';
import { AuthProvider } from "react-auth-kit";

import {RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <Error/>,
      children: [
        {
          path: 'início',
          element: <Home />,
        },
        {
          path: 'financeiro',
          element: <Finance />,
        },
        {
          path:'cadastrar produto',
          element: <RegisterProduct />,
        },
        {
          path:'visualizar estoque',
          element: <Stock />,
        }
      ]
    },
    {
      path:"/login",
      element: <Login />
    }
  ]
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={false}
      >
        <RouterProvider router={router}/>
      </AuthProvider>
  </React.StrictMode>
);
