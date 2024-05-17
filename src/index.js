import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import Aboutpage from '../src/Pages/Aboutpage';
import Collection from '../src/Pages/Collection';
import Wear from '../src/Pages/Wear';
import Dress from '../src/Pages/Dress';
  const router = createBrowserRouter([


   {
        path: "/",
        element: <App/>,
   },
    {
        path: "about",
        element: <Aboutpage/>
      },
      {
        path: "Ethnic_Wear",
        element: <Collection/>
      },
      {
        path: " Traditional",
        element:<Wear/>
      },
      {
        path: "Causal",
        element:<Dress/>
      },
      
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
