import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Article from './components/article/Article.jsx';
import AboutUs from './pages/about_us/about_us.jsx';
import Login from './container/login/Login.jsx';
import HomePage from './Main/HomePage.jsx';
import Blog from './pages/blog/Blog.jsx';
import SelfExamination from './pages/self_examination/SelfExamination.jsx';
import CancerInfo from './pages/cancer_information/CancerInfo.jsx';

import {
  createBrowserRouter,
  RouterProvider,
  // Outlet,
} from "react-router-dom";

const Layout = () =>{
  return(
    // this is first page structure
      <>
      <Navbar/>
      <Article/>
      </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home_page",
        element: <HomePage />,
      },
      {
        path: "/logout",
        element: <HomePage />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/self_examination",
    element: <SelfExamination/>
  },

  {
    path: "/cancer_info",
    element: <CancerInfo/>
  },
  
  {
    path: "blog",
    element: <Blog/>
  },
  
  {
    path: "about_us",
    element: <AboutUs/>
  }
])

function App() {
  return (
  <>
    <div className="app">
        <div className="app-container">
       <RouterProvider router={router}/>
        </div>

    </div>
  </>
  );
}

export default App;