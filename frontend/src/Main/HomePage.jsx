import React from 'react';
import Article from '../components/article/Article.jsx';
import AboutUs from '../pages/about_us/about_us.jsx';
import Blog from '../pages/blog/Blog.jsx';
import Navbar from '../components/navbar/Navbar.jsx';
import CancerInfo from '../pages/cancer_information/CancerInfo.jsx';
import Quizzes from '../pages/quizzes/Quizzes.jsx'

const HomePage = () => {
  return (
    // home page wach fiha exact ( u can modify it here but don't forget to modify it tan f app.js)
    <>
      <Navbar/>
      <Article/>
      <CancerInfo/>
      <Quizzes/>
      <Blog/>
      <AboutUs/>
    </>
  )
}

export default HomePage
