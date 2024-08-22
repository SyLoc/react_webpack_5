import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import Root from './routers/root'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './style.css';
import ErrorPage from './routers/ErrorPage';
import Contact from './routers/Contact';
import About from './routers/about';
import TestJs from './routers/testJs';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
        }
      ]
    },
    {
      path:'/about',
      element: <About/>
    },
    {
      path:'/test-js',
      element: <TestJs/>
    }
  ]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));
