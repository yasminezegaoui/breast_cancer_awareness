import React from 'react'
import './cancerinfo.css';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
// import stethoscope from '../../assets/stethoscope-solid-4.png'; 
// import heart from '../../assets/heart-solid.png';
// import personDress from '../../assets/person-dress-solid.png';
// import handshake from '../../assets/handshake-angle-solid.png';

const CancerInfo = () => {
  const navigate = useNavigate();

  const handleSympthomClick = () => {
    navigate('/self_examination');
  }; 
  
  const handleBlogClick = () => {
    navigate('/blog');
  };

  return (
  <>
    <Navbar/>
  <section class="hero-section">
    <div class="hero-content">
      <img class="ribbon" alt=''/>
      <h1>Fight Breast Cancer for <span>Him </span>and Her.</h1>
      <p>Let's get it off our chests</p>
      <a href="#donate" class="donate-button">Donate Now</a>
    </div>
    <div class="hero-image">
      <img src="" alt=""/>
    </div>
  </section>

  
  <section class="info-section">
    <div class="info-card">
        <div class="icon-container">
          {/* <img src={stethoscope} alt="" /> */}
        </div>
      <h3>Breastcare Solutions</h3>
      <p>Look Good Feel Better for Teens is a unique, free program for teenage cancer patients.</p>
      <span>Read More</span>
    </div>
    <div class="info-card">
        <div class="icon-container">
        {/* <img src={heart} alt="" />  */}
          </div>
      <h3>Self Examination</h3>
      <p>
        Learn how to perform a self-examination with our interactive 3D model and easy-to-follow animations, designed to guide you step-by-step through 
        the process from the comfort of your home.
      </p>
      <span onClick={handleSympthomClick}>Read More</span>
    </div>
    <div class="info-card">
        <div class="icon-container">
      {/* <img src={personDress} alt="" />  */}
          </div>
      <h3>Community</h3>
      <p>Join our local Algerian community, where you can access a blog, hear from our doctors, and connect with others. Share your own 
        experiences and know that you are not alone in this journey..</p>
      <span onClick={handleBlogClick}>Read More</span>
    </div>
    <div class="info-card">
        <div class="icon-container">
        {/* <img src={handshake} alt="" /> */}
          </div>
      <h3>Where to get help</h3>
      <p>Find nearby doctors and available locations for 
        scans—because a scan can detect what you can't.</p>
      <span>Read More</span>
    </div>
  </section>

  
  <footer class="footer">
    <p>&copy; 2024 Breast Cancer Awareness. All rights reserved.</p>
  </footer>
  </>
  )
}

export default CancerInfo
