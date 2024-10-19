import React from 'react'
import './article.css';
import { useNavigate } from 'react-router-dom';
//
const Article = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/login');
  };

  return (
    <>
    <section class="main-section">
      <div class="content">
        <h1>Breast</h1>
          <h1 id="X">Cancer</h1>
        <p>Join the Fight Against Breast Cancer: Learn Self-Examination with Our 3D Model, Share Your Story,
          and Donate to Help Save Lives sign up and make a Difference! </p>
        <a href="#sign_in" class="join-button" onClick={handleJoinClick}>Join Us</a>
      </div>
    </section>
    </>
  )
}

export default Article
