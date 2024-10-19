import React from 'react'
import './about_us.css';
import Navbar from '../../components/navbar/Navbar';
import MC1 from '../../assets/MC1.png';
import MC2 from '../../assets/MC2.png';
import MC3 from '../../assets/MC3.JPG';

const about_us = () => {
  return (

    <>
    <Navbar/>
    <div className='about-wrapper'>
    <section class="page-layout">
    
    <div class="about-section">
      <h1>About Us</h1>
      <p>Founded in 1985 at USTHB, Micro Club (MC) is the first university scientific club in Algeria. As a non-profit organization,
         our mission is to promote and introduce computer science and technology to students and the larger community.</p>
      
      <h1>What We Do</h1>
      <p>MC organizes various events, such as hackathons, game development challenges, design competitions, and coding contests. 
        Our goal is to foster learning, innovation, and collaboration through exciting events like:</p><br/>
      <ul>
        <li><strong>MGV (MC Gets Visual):</strong> A design competition bringing together the best Algerian designers 
            to compete in rapid design challenges.</li>
        <li><strong>AGC (Algeria Game Challenge):</strong> A game development competition encouraging the creation of 
            innovative video games.</li>
        <li><strong>Micro Hack:</strong> A 3-day hackathon that gathers participants to develop a 
            digital solution within a short time frame.</li>
      </ul>
      
      <h1>Our Project - Pink <span> October </span> Hackathon</h1>
      <p>This year, MC is proud to host the Pink October Hackathon, a special event dedicated to raising awareness about breast cancer. By bringing together individuals from different disciplines, we aim to create innovative digital solutions that contribute to breast cancer awareness and education.</p>
      
      <p>Through this hackathon, we hope to make a significant impact in spreading awareness, supporting survivors, and encouraging early detection—all using the power of technology.</p>
    </div>

    <div class="image-boxes-right">
      <div class="box">
        <img src={MC1} alt=""/>
        <p>Best club reward</p>
      </div>
      <div class="box">
        <img src={MC2} alt=""/>
        <p>Events and benevolat</p>
      </div>
      <div class="box">
        <img src={MC3} alt=""/>
        <p> Our Community</p>
      </div>
    </div>
  </section>
  </div>
  </>
  )
}

export default about_us
