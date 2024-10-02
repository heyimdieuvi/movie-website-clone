import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MovieManagement from './pages/movie-management'
import React from 'react';
import Home from './pages/home';
import './main.scss';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movie-management",
      element: <MovieManagement />,
    },
  ]);
  
  return <RouterProvider router={router} /> 
   //RouterProvider đại diện router cho trang web 
   //và cta sẽ config nhiều router con trong này
   
}

export default App