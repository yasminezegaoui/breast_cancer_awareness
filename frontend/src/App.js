import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Article from './components/article/Article.jsx';
import AboutUs from './pages/about_us/about_us.jsx';
import SignUp from './container/sign_up/SignUp.jsx';
import Login from './container/login/Login.jsx';
import HomePage from './Main/HomePage.jsx';
import Blog from './pages/blog/Blog.jsx';

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
      <Blog/>
      <AboutUs />
      </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/logout",
        element: <HomePage />,
      },
    ],
  },
  //path to register page
  // ki diri npm start w ytafta7 site, omb3d tzidi /register fel lien lfo9 ta5rojlk page ta3 register
  // same thing in login
  {
    path: "/register",
    element: <SignUp/>,
  },

  //path to login page
  // ex: http://localhost:3002/login
  {
    path: "/login",
    element: <Login />,
  },
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