import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  createBrowserRouter,
  RouterProvider,
  Route
 } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import { BarChart } from './BarChart';
import { Charts } from './Charts';


const router = createBrowserRouter([  
  {
    path : '/', 
    element : <Charts />,
    errorElement: <ErrorPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>
);


